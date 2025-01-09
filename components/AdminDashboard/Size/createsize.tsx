"use client"
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { postsizeData } from "@/apiRequest/size";

export default function CreateSize() {
  const [open, setOpen] = useState(false);
  const [sizeName, setSizeName] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setSizeName("");
    setError("");
  };

  const handleSubmit = async () => {
    if (!sizeName.trim()) {
      setError("Size name is required.");
      return;
    }

    try {
      const response = await postsizeData({ name: sizeName });
      
      if (response.data.message === "Size name already exists") {
        setError("This size name already exists.");
        toast({
          title: "Error",
          description: "This size name already exists.",
          variant: "destructive",
        });
        return;
      }

      handleClose();
      toast({
        title: "Success",
        description: `${sizeName} has been created.`,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error creating size:", error);
      setError("Failed to create size. Please try again.");
      toast({
        title: "Error",
        description: "Failed to create size. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <Button 
        onClick={() => setOpen(true)}
        variant="outline"
        className="bg-background/10 hover:bg-background/60 hover:text-primary-foreground"
      >
        Create a Size
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              Create Size
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

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Input
                placeholder="Enter Size Name"
                value={sizeName}
                onChange={(e) => setSizeName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
            </div>

            {error && (
              <div className="text-sm text-destructive bg-destructive/15 p-3 rounded-md">
                {error}
              </div>
            )}

            <Button onClick={handleSubmit} className="w-full">
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}