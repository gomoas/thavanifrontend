import { Box, Button, Modal, TextField, Select, MenuItem, Snackbar, Alert } from "@mui/material";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";
import { fetchCategoryData } from "@/apiRequest/category";
import { postSubCategoryData } from "@/apiRequest/subcategory";

// Define the interface for the category
interface Category {
    id: string;  // Or number, depending on your data type
    name: string;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: "60%",
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '20px',
    border: 'none'
};

export default function CreateSubCategory() {
    const [open, setOpen] = useState(false);
    const [subCategoryName, setSubCategoryName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(""); // For storing selected category
    const [categories, setCategories] = useState<Category[]>([]); // Use Category type
    const [error, setError] = useState("");

    // Notification state
    const [notifyMessage, setNotifyMessage] = useState("");
    const [openNotifier, setOpenNotifier] = useState(false);
    const [hideDuration, setHideDuration] = useState(3000);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSubCategoryName("");
        setSelectedCategory("");
        setError("");
    };

    // Fetch categories when the component mounts
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await fetchCategoryData(); // Fetch categories
                setCategories(categoryData);
            } catch (error) {
                console.log(error);
                setError("Failed to fetch categories.");
            }
        };
        fetchCategories();
    }, []);

    const handleSubmit = async () => {
        if (!selectedCategory) {
            setError("Please select a category.");
            return;
        }

        const data = {
            name: subCategoryName,
            categoryId: selectedCategory,
        };

        try {
            await postSubCategoryData(data);
            handleClose();
            setNotifyMessage(`${subCategoryName} has been created as a sub-category.`);
            setOpenNotifier(true);
            setHideDuration(3000);
            window.location.reload();
        } catch (error) {
            console.log(error);
            setError("Failed to create sub-category. Please try again.");
            setNotifyMessage("Failed to create sub-category.");
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
                    Create a Sub-Category
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h4>Create Sub-Category</h4>
                        <GrClose onClick={handleClose} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: 'column', width: '100%', justifyContent: "center", alignItems: 'center', height: '70%' }}>
                        <TextField
                            variant="standard"
                            label="Enter Sub-Category Name"
                            sx={{ margin: 2, width: "250px" }}
                            value={subCategoryName}
                            onChange={(e) => setSubCategoryName(e.target.value)}
                        />
                        <Select
                            variant="standard"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            displayEmpty
                            sx={{ margin: 2, width: "250px" }}
                        >
                            <MenuItem value="" disabled>
                                Select Category
                            </MenuItem>
                            {categories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
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
