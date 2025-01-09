import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { postFAQData } from "@/apiRequest/faq";

export default function CreateFAQ() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ question: "", answer: "" });
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ question: "", answer: "" });
    setError("");
  };

  const handleSubmit = async () => {
    const { question, answer } = formData;
    if (!question || !answer) {
      setError("Both question and answer are required.");
      return;
    }

    try {
      await postFAQData(formData);
      handleClose();
      toast({
        title: "Success",
        description: `${question} has been created.`,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error creating FAQ:", error);
      toast({
        title: "Error",
        description: "Failed to create FAQ. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <Button onClick={() => setOpen(true)}>Create FAQ</Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              Create FAQ
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
                placeholder="Enter Question"
                value={formData.question}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, question: e.target.value }))
                }
              />
            </div>

            <div className="grid gap-2">
              <Textarea
                placeholder="Enter Answer"
                className="min-h-[120px]"
                value={formData.answer}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, answer: e.target.value }))
                }
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