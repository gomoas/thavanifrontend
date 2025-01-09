"use client"
import { useState, useEffect } from "react";
import {Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import {
  fetchCategoryPaginationsData,
  deleteCategoryData,
  editCategoryData,
  postCategoryData,
} from "@/apiRequest/category";
import AdminDashboardLayout from "..";
import CreateCategory from "./createcategory";

interface Category {
  _id: string;
  name: string;
  is_deleted: boolean;
}

export default function CategoriesDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [categories, setCategories] = useState<Category[]>([]);
  const [totalCategories, setTotalCategories] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Dialog states
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [formError, setFormError] = useState("");

  const { toast } = useToast();

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await fetchCategoryPaginationsData(page, limit, search);
        setCategories(data.data || []);
        setTotalCategories(data.count || 0);
      } catch (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "Failed to fetch categories",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [page, limit, search]);

  // Create category
  const handleCreate = async () => {
    if (!newCategoryName.trim()) {
      setFormError("Category name is required");
      return;
    }

    try {
      await postCategoryData({ name: newCategoryName });
      toast({ title: "Success", description: "Category created successfully" });
      setCreateDialogOpen(false);
      setNewCategoryName("");
      setFormError("");
      // Refresh categories
      const data = await fetchCategoryPaginationsData(page, limit, search);
      setCategories(data.data || []);
      setTotalCategories(data.count || 0);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to create category",
        variant: "destructive",
      });
    }
  };

  // Edit category
  const handleEdit = async (id: string, newName: string) => {
    try {
      await editCategoryData({ name: newName }, id);
      toast({ title: "Success", description: "Category updated successfully" });
      // Refresh categories
      const data = await fetchCategoryPaginationsData(page, limit, search);
      setCategories(data.data || []);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to update category",
        variant: "destructive",
      });
    }
  };

  // Delete category
  const handleDelete = async () => {
    if (!selectedCategory) return;

    try {
      await deleteCategoryData(selectedCategory._id);
      toast({ title: "Success", description: "Category deleted successfully" });
      setDeleteDialogOpen(false);
      setSelectedCategory(null);
      // Refresh categories
      const data = await fetchCategoryPaginationsData(page, limit, search);
      setCategories(data.data || []);
      setTotalCategories(data.count || 0);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to delete category",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Category Management</h2>
          <CreateCategory/>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">S.No</TableHead>
                <TableHead>Category Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="h-4 w-8 bg-muted animate-pulse rounded" />
                    </TableCell>
                    <TableCell>
                      <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                    </TableCell>
                    <TableCell>
                      <div className="h-8 w-24 bg-muted animate-pulse rounded" />
                    </TableCell>
                  </TableRow>
                ))
              ) : categories.length > 0 ? (
                categories.map((category, index) => (
                  <CategoryRow
                    key={category._id}
                    category={category}
                    index={index}
                    onEdit={handleEdit}
                    onDelete={() => {
                      setSelectedCategory(category);
                      setDeleteDialogOpen(true);
                    }}
                    page={page}
                    limit={limit}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    No categories found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {categories.length > 0 && (
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
                      {[5, 10, 25, 50, 100].map((value) => (
                        <SelectItem key={value} value={value.toString()}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {page} of {Math.ceil(totalCategories / limit)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Create Dialog */}
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center">
                Create Category
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setCreateDialogOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Input
                  placeholder="Enter category name"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
              </div>

              {formError && (
                <div className="text-sm text-destructive bg-destructive/15 p-3 rounded-md">
                  {formError}
                </div>
              )}

              <Button onClick={handleCreate} className="w-full">
                Create
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Category</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this category? This action cannot be undone.
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

// Category Row Component
function CategoryRow({
  category,
  index,
  onEdit,
  onDelete,
  page,
  limit,
}: {
  category: Category;
  index: number;
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
  page: number;
  limit: number;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(category.name);

  const handleUpdate = () => {
    onEdit(category._id, editName);
    setIsEditing(false);
  };

  return (
    <TableRow>
      <TableCell>{(page - 1) * limit + index + 1}</TableCell>
      <TableCell>
        {isEditing ? (
          <Input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="max-w-sm"
            autoFocus
          />
        ) : (
          category.name
        )}
      </TableCell>
      <TableCell className="text-right space-x-2">
        {isEditing ? (
          <>
            <Button variant="default" size="sm" onClick={handleUpdate}>
              Save
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIsEditing(false);
                setEditName(category.name);
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
              disabled={category.is_deleted}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(category._id)}
              disabled={category.is_deleted}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
}