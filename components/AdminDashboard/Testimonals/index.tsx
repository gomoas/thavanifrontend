"use client"
import { useState, useEffect } from "react";
import { Edit, Trash2, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  fetchTestimonialPaginationsData,
  deleteTestimonialData,
  editTestimonialData,
} from "@/apiRequest/testimonal";
import AdminDashboardLayout from "..";
import CreateTestimonial from "./createtestimonal";

interface Testimonial {
  _id: string;
  user_name: string;
  content: string;
  rating: number;
}

const TableSkeleton = () => (
  <>
    {[1, 2, 3, 4, 5].map((i) => (
      <TableRow key={i}>
        {[1, 2, 3, 4, 5].map((j) => (
          <TableCell key={j}>
            <div className="h-4 bg-muted animate-pulse rounded" />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

export default function TestimonialDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // Edit dialog state
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState<{ id: string; content: string }>({ id: "", content: "" });

  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonialPaginationsData(page, limit, search);
        if (data && data.data) {
          setTestimonials(data.data);
          setCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        toast({
          title: "Error",
          description: "Failed to fetch testimonials",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, limit, search]);

  const handleEdit = (testimonial: Testimonial) => {
    setEditData({ id: testimonial._id, content: testimonial.content });
    setEditDialogOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const updatedTestimonial = await editTestimonialData(
        { content: editData.content },
        editData.id
      );
      setTestimonials((prev) =>
        prev.map((t) =>
          t._id === editData.id
            ? { ...t, content: updatedTestimonial.content }
            : t
        )
      );
      setEditDialogOpen(false);
      toast({
        title: "Success",
        description: "Testimonial updated successfully",
      });
    } catch (error) {
      console.error("Error updating testimonial:", error);
      toast({
        title: "Error",
        description: "Failed to update testimonial",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteTestimonialData(deleteId);
      setTestimonials((prev) => prev.filter((t) => t._id !== deleteId));
      setDeleteId(null);
      setDeleteDialogOpen(false);
      toast({
        title: "Success",
        description: "Testimonial deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      toast({
        title: "Error",
        description: "Failed to delete testimonial",
        variant: "destructive",
      });
    }
  };

  const renderRating = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <AdminDashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Testimonial Management</h2>
          <CreateTestimonial/>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search testimonials..."
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
                <TableHead>User Name</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableSkeleton />
              ) : testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <TableRow key={testimonial._id}>
                    <TableCell className="font-medium">
                      {(page - 1) * limit + index + 1}
                    </TableCell>
                    <TableCell>{testimonial.user_name}</TableCell>
                    <TableCell className="max-w-[300px]">
                      <p className="truncate">{testimonial.content}</p>
                    </TableCell>
                    <TableCell>{renderRating(testimonial.rating)}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(testimonial)}
                        className="mr-2"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          setDeleteId(testimonial._id);
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
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No testimonials found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {testimonials.length > 0 && (
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
                      {[5, 10, 25, 50].map((value) => (
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

        {/* Edit Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex justify-between items-center">
                Edit Testimonial
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setEditDialogOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <Textarea
                placeholder="Edit testimonial content..."
                value={editData.content}
                onChange={(e) => setEditData((prev) => ({ ...prev, content: e.target.value }))}
                className="min-h-[100px]"
              />
              <Button onClick={handleUpdate}>Update</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Testimonial</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this testimonial? This action cannot be undone.
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