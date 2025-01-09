"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { GrClose } from "react-icons/gr";
import { fetchUsersData } from "@/apiRequest/users";
import { postTestimonialData } from "@/apiRequest/testimonal";

// Define interface for user data
interface User {
  id: string | number;
  firstName: string;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "auto",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "20px",
  border: "none",
};

export default function CreateTestimonial() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState<number | "">("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]); // Properly type the users state

  // Notification
  const [notifyMessage, setNotifyMessage] = useState("");
  const [openNotifier, setOpenNotifier] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUserName("");
    setContent("");
    setRating("");
    setError("");
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetchUsersData();
        setUsers(response);
      } catch (err) {
        console.error("Error fetching Users:", err);
        setError("Failed to load Users.");
      }
    }
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (!userName || !content || rating === "" || rating < 1 || rating > 5) {
      setError("All fields are required, and rating must be between 1 and 5.");
      return;
    }

    const data = {
      user_name: userName,
      content,
      rating,
    };

    try {
      const response = await postTestimonialData(data);
      if (response.ok) {
        setNotifyMessage("Testimonial created successfully.");
        setOpenNotifier(true);
        handleClose();
      } else {
        setError("Failed to create testimonial.");
      }
    } catch {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Create Testimonial
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <h4>Create Testimonial</h4>
            <GrClose onClick={handleClose} />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}
          >
            <TextField
              select
              label="User Name"
              variant="outlined"
              value={userName || ""}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            >
              {users?.length ? (
                users.map((user) => (
                  <MenuItem key={user.id} value={user.firstName}>
                    {user.firstName}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No users available</MenuItem>
              )}
            </TextField>

            <TextField
              label="Content"
              variant="outlined"
              value={content || ""}
              onChange={(e) => setContent(e.target.value)}
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Rating (1-5)"
              variant="outlined"
              type="number"
              value={rating !== "" ? rating : ""}
              onChange={(e) => setRating(Number(e.target.value))}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Button variant="contained" onClick={handleSubmit} sx={{ mb: 2 }}>
              Submit
            </Button>

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={openNotifier}
        autoHideDuration={3000}
        onClose={() => setOpenNotifier(false)}
      >
        <Alert severity={error ? "error" : "success"}>{notifyMessage}</Alert>
      </Snackbar>
    </>
  );
}