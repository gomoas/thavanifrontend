import { useState, useEffect } from "react";
import { X, Upload, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { fetchCategoryData } from "@/apiRequest/category";
import { postProductData } from "@/apiRequest/product";

interface Category {
  _id: string;
  name: string;
}

interface FormData {
  name: string;
  description: string;
  price: string;
  size: string;
  stock: string;
  category_id: string;
}

const CreateProduct = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    size: "",
    stock: "",
    category_id: "",
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploadMethod, setUploadMethod] = useState<"file" | "url">("file");
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetchCategoryData();
        setCategories(response);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories.");
      }
    }
    fetchCategories();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      size: "",
      stock: "",
      category_id: "",
    });
    setImageFiles([]);
    setImageUrls([]);
    setError("");
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      const maxFileSize = 5 * 1024 * 1024;

      const validatedFiles: File[] = [];
      const invalidFiles: string[] = [];

      Array.from(files).forEach((file) => {
        if (!validImageTypes.includes(file.type)) {
          invalidFiles.push(`${file.name} (Unsupported file type)`);
        } else if (file.size > maxFileSize) {
          invalidFiles.push(`${file.name} (File size exceeds 5 MB)`);
        } else {
          validatedFiles.push(file);
        }
      });

      if (invalidFiles.length > 0) {
        setError(`The following files are invalid: ${invalidFiles.join(", ")}`);
      } else {
        setError("");
      }

      setImageFiles(validatedFiles);
    }
  };

  const handleAddImageUrl = (url: string) => {
    if (url) {
      setImageUrls((prev) => [...prev, url]);
    }
  };

  const handleRemoveImageUrl = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const { name, description, price, size, stock, category_id } = formData;
    if (!name || !description || !price || !size || !stock || !category_id) {
      setError("Please fill in all fields.");
      return;
    }

    if (uploadMethod === "file" && imageFiles.length === 0) {
      setError("Please upload at least one image.");
      return;
    }

    if (uploadMethod === "url" && imageUrls.length === 0) {
      setError("Please provide at least one image URL.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      let finalImageUrls: string[] = [];

      if (uploadMethod === "file") {
        const presignedUrlsResponse = await fetch(
          "http://localhost:5000/api/v1/images/get-presigned-urls",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              files: imageFiles.map((file) => ({
                filename: file.name,
                filetype: file.type,
              })),
            }),
          }
        );

        if (!presignedUrlsResponse.ok) {
          throw new Error("Failed to get presigned URLs.");
        }

        const { presignedUrls } = await presignedUrlsResponse.json();

        const uploadPromises = imageFiles.map((file, index) => {
          const presignedUrl = presignedUrls[index].url;
          const fileUrl = presignedUrls[index].fileUrl;

          return fetch(presignedUrl, {
            method: "PUT",
            headers: {
              "Content-Type": file.type,
            },
            body: file,
          }).then((uploadResponse) => {
            if (!uploadResponse.ok) {
              throw new Error(`Failed to upload file: ${file.name}`);
            }
            return fileUrl;
          });
        });

        finalImageUrls = await Promise.all(uploadPromises);
      } else {
        finalImageUrls = imageUrls;
      }

      const response = await postProductData({
        ...formData,
        images: finalImageUrls,
      });

      if (response?.success) {
        toast({
          title: "Success",
          description: `${name} created successfully.`,
        });
        handleClose();
      } else {
        setError("Failed to create product. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during the image upload or product creation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Create Product</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              Create Product
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="size">Size</Label>
                  <Input
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="stock">Stock</Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category_id}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, category_id: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category._id} value={category._id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Upload Method</Label>
                <RadioGroup
                  value={uploadMethod}
                  onValueChange={(value) => setUploadMethod(value as "file" | "url")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="file" id="file" />
                    <Label htmlFor="file">Upload File</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="url" id="url" />
                    <Label htmlFor="url">Add Image URLs</Label>
                  </div>
                </RadioGroup>
              </div>

              {uploadMethod === "file" && (
                <div className="grid gap-4">
                  <Label htmlFor="images">Images</Label>
                  <div className="flex items-center gap-4">
                    <Button asChild variant="outline">
                      <label className="cursor-pointer">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Files
                        <input
                          type="file"
                          multiple
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </Button>
                  </div>
                  {imageFiles.length > 0 && (
                    <Card>
                      <CardContent className="p-4">
                        {imageFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-2"
                          >
                            <span className="text-sm">{file.name}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                setImageFiles((prev) =>
                                  prev.filter((_, i) => i !== index)
                                )
                              }
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {uploadMethod === "url" && (
                <div className="grid gap-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter image URL"
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (
                          e.key === "Enter" &&
                          (e.target as HTMLInputElement).value
                        ) {
                          handleAddImageUrl((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = "";
                        }
                      }}
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        const input = document.querySelector(
                          'input[placeholder="Enter image URL"]'
                        ) as HTMLInputElement;
                        if (input.value) {
                          handleAddImageUrl(input.value);
                          input.value = "";
                        }
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {imageUrls.length > 0 && (
                    <Card>
                      <CardContent className="p-4">
                        {imageUrls.map((url, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-2"
                          >
                            <span className="text-sm truncate max-w-[80%]">
                              {url}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveImageUrl(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {error && (
                <div className="bg-destructive/15 text-destructive px-4 py-2 rounded-md text-sm">
                  {error}
                </div>
              )}

              <Button
                className={cn("w-full", loading && "opacity-50 cursor-not-allowed")}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Product"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProduct;