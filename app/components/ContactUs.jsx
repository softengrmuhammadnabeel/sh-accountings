"use client"; // Mark this component as a Client Component

import { assets } from '@/assets/assets';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
    TextField,
    Container,
} from "@mui/material";

const ContactUs = () => {

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };
    
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent successfully!");
  };
    return (
        <Box
            id="contact"
            sx={{
                px: { xs: 2, sm: 10 },
                py: 16,
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: 6, lg: 10 },
                bgcolor: "#EB1552", // Primary color for the section background
                background: "linear-gradient(135deg, #EB1552 0%, #3c0e63 100%)", // Gradient background
                color: "common.white", // White text for better contrast
            }}
        >
            {/* Contact Form */}
            <motion.div
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                sx={{ width: { xs: "100%", lg: "100%" } }}
            >
                <Box
                    sx={{
                        p: 4,
                        borderRadius: 2,
                        bgcolor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
                        backdropFilter: "blur(10px)", // Blur effect for a modern look
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Subtle shadow
                        display: "flex",
                        flexDirection: { xs: "column", lg: "row" }, // Stack on small screens, row on large screens
                        alignItems: "center",
                        gap: { xs: 4, lg: 6 }, // Spacing between form and image
                    }}
                >
                    {/* Form Section */}
                    <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 4,
                                fontWeight: "bold",
                                color: "common.white",
                                textAlign: { xs: "center", lg: "left" },
                            }}
                        >
                            Get in Touch
                        </Typography>
                        <form onSubmit={onSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        variant="outlined"
                                        sx={{
                                            bgcolor: "rgba(255, 255, 255, 0.1)",
                                            borderRadius: "8px",
                                            "& .MuiOutlinedInput-root": {
                                                color: "common.white",
                                                "& fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "common.white",
                                                },
                                            },
                                            "& .MuiInputLabel-root": {
                                                color: "rgba(255, 255, 255, 0.7)", // Light label color
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "common.white", // White label when focused
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
                                            bgcolor: "rgba(255, 255, 255, 0.1)",
                                            borderRadius: "8px",
                                            "& .MuiOutlinedInput-root": {
                                                color: "common.white",
                                                "& fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "common.white",
                                                },
                                            },
                                            "& .MuiInputLabel-root": {
                                                color: "rgba(255, 255, 255, 0.7)", // Light label color
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "common.white", // White label when focused
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        sx={{
                                            bgcolor: "rgba(255, 255, 255, 0.1)",
                                            borderRadius: "8px",
                                            "& .MuiOutlinedInput-root": {
                                                color: "common.white",
                                                "& fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "common.white",
                                                },
                                            },
                                            "& .MuiInputLabel-root": {
                                                color: "rgba(255, 255, 255, 0.7)", // Light label color
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "common.white", // White label when focused
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        variant="outlined"
                                        sx={{
                                            bgcolor: "rgba(255, 255, 255, 0.1)",
                                            borderRadius: "8px",
                                            "& .MuiOutlinedInput-root": {
                                                color: "common.white",
                                                "& fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "common.white",
                                                },
                                            },
                                            "& .MuiInputLabel-root": {
                                                color: "rgba(255, 255, 255, 0.7)", // Light label color
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "common.white", // White label when focused
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
                                            bgcolor: "rgba(255, 255, 255, 0.1)",
                                            borderRadius: "8px",
                                            "& .MuiOutlinedInput-root": {
                                                color: "common.white",
                                                "& fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                                },
                                                "&:hover fieldset": {
                                                    borderColor: "common.white",
                                                },
                                            },
                                            "& .MuiInputLabel-root": {
                                                color: "rgba(255, 255, 255, 0.7)", // Light label color
                                            },
                                            "& .MuiInputLabel-root.Mui-focused": {
                                                color: "common.white", // White label when focused
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
                                            bgcolor: "common.white",
                                            color: "#EB1552",
                                            fontSize: "1rem",
                                            fontWeight: 600,
                                            py: 2,
                                            borderRadius: "8px",
                                            "&:hover": {
                                                bgcolor: "rgba(255, 255, 255, 0.9)",
                                            },
                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>

                    {/* Image Section */}
                    <Box
                        sx={{
                            width: { xs: "100%", lg: "40%" },
                            height: { xs: 300, lg: 450 },
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <img
                            src={assets.contactUsGirl.src}
                            alt="Contact"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    )
}

export default ContactUs