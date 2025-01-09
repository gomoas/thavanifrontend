"use client"
import { useState, useEffect } from "react";
import { Edit, Trash2} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalTitle} from "@/components/ui/Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { fetchProductsPagination, deleteProductData } from "@/apiRequest/product";
import AdminDashboardLayout from "..";
import CreateProduct from "./createproducts";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  category_id?: {
    name: string;
  };
  size: string;
  stock: string;
  images: [
    {
      _id: string;
      image_url: string;
    }
  ];
}

const TableSkeleton = () => (
  <>
    {[1, 2, 3, 4, 5].map((i) => (
      <TableRow key={i}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((j) => (
          <TableCell key={j}>
            <div className="h-4 bg-muted animate-pulse rounded" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

export default function ProductDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");



  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProductsPagination(page, limit, search);
        if (data) {
          setProducts(data.data || []);
          setCount(data.count || 0);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast({
          title: "Error",
          description: "Failed to fetch products",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, limit, search]);


  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl); // Set the clicked image URL
    setIsImageModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsImageModalOpen(false); // Close the modal
    setSelectedImage(""); // Clear the selected image
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const response = await deleteProductData(deleteId);
      if (response?.success) {
        setProducts((prev) => prev.filter((item) => item._id !== deleteId));
        setDeleteId(null);
        setDeleteDialogOpen(false);
        toast({
          title: "Success",
          description: "Product deleted successfully",
        });
      } else {
        throw new Error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Product Management</h2>
          <CreateProduct />
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Image</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableSkeleton />
              ) : products.length > 0 ? (
                products.map((product, index) => (
                  <TableRow key={product._id}>
                    <TableCell className="font-medium">
                      {(page - 1) * limit + index + 1}
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {product.description}
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.category_id?.name || "No Category"}</TableCell>
                    <TableCell>{product.size}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell className="text-right space-x-2">
                      {product.images && product.images.length > 0 && (
                        <img
                          src={product.images[0].image_url}
                          alt={product.name}
                          className="w-16 h-16 object-cover cursor-pointer"
                          onClick={() => handleImageClick(product.images[0].image_url)}
                        />
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="mr-2"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          setDeleteId(product._id);
                          setDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center text-muted-foreground">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <Modal isOpen={isImageModalOpen} onClose={handleCloseModal}>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Product Image</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <img
                  src={selectedImage}
                  alt="Product"
                  className="w-full h-auto object-contain"
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="outline" onClick={handleCloseModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {products.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">Rows per page</p>
                  <Select
                    value={limit.toString()}
                    onValueChange={(value) => {
                      setLimit(Number(value));
                      setPage(1);
                    }}
                  >
                    <SelectTrigger className="h-8 w-[70px]">
                      <SelectValue placeholder={limit} />
                    </SelectTrigger>
                    <SelectContent side="top">
                      {[5, 10, 25].map((value) => (
                        <SelectItem key={value} value={value.toString()}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {page} of {Math.ceil(count / limit)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Product</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this product? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminDashboardLayout>
  );
}