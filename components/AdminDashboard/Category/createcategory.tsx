import { Box, Button, Modal, TextField, Tooltip, Snackbar, Alert } from "@mui/material";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { IoCreate } from "react-icons/io5";
import { postCategoryData } from "../../../apiRequest/category";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: "50%",
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '20px',
    border: 'none'
};

export default function CreateCategory() {
    const [open, setOpen] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [error, setError] = useState("");

    // Notification state
    const [notifyMessage, setNotifyMessage] = useState("");
    const [openNotifier, setOpenNotifier] = useState(false);
    const [hideDuration, setHideDuration] = useState(3000);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setCategoryName("");
        setError("");
    };

    const handleSubmit = async () => {
        const data = {
            name: categoryName,
        };

        try {
            await postCategoryData(data);
            handleClose();
            setNotifyMessage(`${categoryName} has been created.`);
            setOpenNotifier(true);
            setHideDuration(3000);
            window.location.reload();
        } catch (error) {
            console.error("Error creating category:", error);
            setError("Failed to create category. Please try again.");
            setNotifyMessage("Failed to create category.");
            setOpenNotifier(true);
            setHideDuration(3000);
        }
    };

    // Close notification
    const handleCloseNotifier = () => {
        setOpenNotifier(false);
    };

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button
                    onClick={handleOpen}
                    sx={{
                        gap: 1,
                        marginRight: "5px",
                        background: 'rgba(0, 0, 0, 0.1)',
                        color: "black",
                        padding: "5px 10px",
                        '&:hover': {
                            background: 'rgba(0, 0, 0, 0.6)',
                            color: 'white',
                        }
                    }}
                >
                    Create a Category
                </Button>
                <Tooltip title="Create Category">
                    <IoCreate fontSize="24px" onClick={handleOpen} />
                </Tooltip>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h4>Create Category</h4>
                        <GrClose onClick={handleClose} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: 'column', width: '100%', justifyContent: "center", alignItems: 'center', height: '70%' }}>
                        <TextField
                            variant="standard"
                            label="Enter Category Name"
                            sx={{ margin: 2, width: "250px" }}
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        <Button variant='contained' sx={{ margin: 2 }} onClick={handleSubmit}>Submit</Button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Box>
                </Box>
            </Modal>

            {/* Snackbar for notifications */}
            <Snackbar
                open={openNotifier}
                autoHideDuration={hideDuration}
                onClose={handleCloseNotifier}
            >
                <Alert onClose={handleCloseNotifier} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                    {notifyMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
