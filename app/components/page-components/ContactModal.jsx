"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { Grid, TextField, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ContactModal = ({ closeModal }) => {
    console.log(typeof closeModal); // Should log "function"

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Message sent successfully!");
    };

    return (
        <>
            {/* Modal with blurred background */}
            {/* Modal with blurred background */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                    backdropFilter: "blur(10px)", // Blur the background
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999, // Ensure it's on top
                }}
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        closeModal();
                    }
                }}
            >

                {/* Modal Content */}
                <motion.div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "16px", // Rounded corners for the modal
                        padding: "30px",
                        maxWidth: "600px",
                        width: "100%",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                        position: 'relative', // To position the close button correctly
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Modal Title and Close Button */}
                    <Box className="flex items-center justify-center mb-3">
                        <Typography
                            component="h5"
                            variant="h5"
                            className={`text-[34px] gotham-bold text-black cursor-pointer tracking-wide transition-colors duration-300 `}
                        >
                            Clear
                        </Typography>

                        <Typography
                            component="h5"
                            variant="h5"
                            className={`text-[34px] moontime font-extrabold cursor-pointer tracking-wide transition-colors duration-300 text-black`}
                        >
                            Horizon
                        </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
                        Get in Touch
                    </Typography>

                    <IconButton
                        onClick={closeModal}
                        style={{
                            backgroundColor: '',
                            position: 'absolute',
                            top: 10,
                            right: 10,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Form Content */}
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    sx={{
                                        bgcolor: "rgba(255, 255, 255, 0.7)",
                                        borderRadius: "8px",
                                        "& .MuiOutlinedInput-root": {
                                            color: "black",
                                            "& fieldset": {
                                                borderColor: "rgba(0, 0, 0, 0.3)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "black",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "rgba(0, 0, 0, 0.7)",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "black",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    variant="outlined"
                                    sx={{
                                        bgcolor: "rgba(255, 255, 255, 0.7)",
                                        borderRadius: "8px",
                                        "& .MuiOutlinedInput-root": {
                                            color: "black",
                                            "& fieldset": {
                                                borderColor: "rgba(0, 0, 0, 0.3)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "black",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "rgba(0, 0, 0, 0.7)",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "black",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    sx={{
                                        bgcolor: "rgba(255, 255, 255, 0.7)",
                                        borderRadius: "8px",
                                        "& .MuiOutlinedInput-root": {
                                            color: "black",
                                            "& fieldset": {
                                                borderColor: "rgba(0, 0, 0, 0.3)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "black",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "rgba(0, 0, 0, 0.7)",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "black",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    sx={{
                                        bgcolor: "rgba(255, 255, 255, 0.7)",
                                        borderRadius: "8px",
                                        "& .MuiOutlinedInput-root": {
                                            color: "black",
                                            "& fieldset": {
                                                borderColor: "rgba(0, 0, 0, 0.3)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "black",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "rgba(0, 0, 0, 0.7)",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "black",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        bgcolor: "#3C4E80",
                                        color: "white",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        py: 2,
                                        borderRadius: "50px",
                                        "&:hover": {
                                            bgcolor: "#2c3e50",
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </motion.div>
            </Box>

        </>
    );
};

export default ContactModal;
