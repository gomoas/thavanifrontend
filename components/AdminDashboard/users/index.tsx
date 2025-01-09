"use client"
import { useState, useEffect } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AdminDashboardLayout from "..";
import { fetchUsersPaginationsData } from "@/apiRequest/users";

interface Users {
  _id: string;
  full_name: string;
  email: string;
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
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchUsersPaginationsData(page, limit, search);
        if (data && data.data) {
            setUsers(data.data);
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


  // const renderRating = (rating: number) => (
  //   <div className="flex items-center gap-0.5">
  //     {Array.from({ length: 5 }).map((_, i) => (
  //       <Star
  //         key={i}
  //         className={`h-4 w-4 ${
  //           i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
  //         }`}
  //       />
  //     ))}
  //   </div>
  // );

  return (
    <AdminDashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Users Management</h2>
        </div>

        <div className="mb-6">
          <Input
            placeholder="Search Users..."
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
                <TableHead>FUll Name</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableSkeleton />
              ) : users.length > 0 ? (
                users.map((user, index) => (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium">
                      {(page - 1) * limit + index + 1}
                    </TableCell>
                    <TableCell>{user.full_name}</TableCell>
                    <TableCell className="max-w-[300px]">
                      <p className="truncate">{user.email}</p>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No Users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {users.length > 0 && (
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
      </div>
    </AdminDashboardLayout>
  );
}