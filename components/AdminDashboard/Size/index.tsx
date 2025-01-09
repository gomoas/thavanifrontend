"use client"
import { useState, useEffect } from "react";
import { Trash2, X} from "lucide-react";
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
import { fetchsizePaginationsData, deletesizeData, postsizeData } from "@/apiRequest/size";
import AdminDashboardLayout from "..";
import CreateSize from "./createsize";

interface Size {
  _id: string;
  name: string;
  is_deleted: boolean;
}

const TableSkeleton = () => (
  <>
    {[1, 2, 3].map((i) => (
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
    ))}
  </>
);

export default function SizeDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [sizes, setSizes] = useState<Size[]>([]);
  const [loading, setLoading] = useState(true);

  // Create dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "" });
  const [formError, setFormError] = useState("");

  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchsizePaginationsData(page, limit, search);
        setSizes(data.data || []);
        setCount(data.count || 0);
      } catch (error) {
        console.error("Error fetching sizes:", error);
        toast({
          title: "Error",
          description: "Failed to fetch sizes",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, limit, search]);

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      setFormError("Size name is required.");
      return;
    }

    try {
      const response = await postsizeData({ name: formData.name });
      if (response.data.message === "Size name already exists") {
        setFormError("This size name already exists.");
        return;
      }
      toast({
        title: "Success",
        description: "Size created successfully",
      });
      setDialogOpen(false);
      resetForm();
      window.location.reload();
    } catch (error) {
      console.error("Error saving size:", error);
      toast({
        title: "Error",
        description: "Failed to create size",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deletesizeData(deleteId);
      setSizes((prev) => prev.filter((size) => size._id !== deleteId));
      setDeleteId(null);
      setDeleteDialogOpen(false);
      toast({
        title: "Success",
        description: "Size deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting size:", error);
      toast({
        title: "Error",
        description: "Failed to delete size",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({ name: "" });
    setFormError("");
  };

  return (
    <AdminDashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Size Management</h2>
          <CreateSize/>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search sizes..."
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
                <TableHead>Size Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableSkeleton />
              ) : sizes.length > 0 ? (
                sizes.map((size, index) => (
                  <TableRow key={size._id}>
                    <TableCell className="font-medium">
                      {(page - 1) * limit + index + 1}
                    </TableCell>
                    <TableCell>{size.name}</TableCell>
                    <TableCell className="text-right space-x-2">
                      {!size.is_deleted && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setDeleteId(size._id);
                            setDeleteDialogOpen(true);
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground">
                    No sizes found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {sizes.length > 0 && (
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
                    Page {page} of {Math.ceil(count / limit)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Create Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center">
                Create Size
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => {
                    setDialogOpen(false);
                    resetForm();
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Input
                  placeholder="Enter size name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                />
              </div>

              {formError && (
                <div className="text-sm text-destructive bg-destructive/15 p-3 rounded-md">
                  {formError}
                </div>
              )}

              <Button onClick={handleSubmit} className="w-full">
                Create
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Size</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this size? This action cannot be undone.
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
