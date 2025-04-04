"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { Grid, TextField, IconButton, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const industries = [
    "Technology", "Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Real Estate", "Automotive", "Energy", "Telecommunications",
    "Agriculture", "Entertainment", "Media", "Construction", "Food & Beverage", "Pharmaceuticals", "Hospitality", "Transportation", "Legal Services", "Aerospace",
    "Government", "Nonprofit", "E-commerce", "Cybersecurity", "Biotechnology", "Consulting", "Insurance", "Logistics", "Sports", "Environmental Services"
];

const ContactModal = ({ closeModal }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Message sent successfully!");
    };

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeModal();
                }
            }}
        >
            <motion.div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    padding: "30px",
                    maxWidth: "900px",
                    width: "95%",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    position: "relative",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <IconButton
                    onClick={closeModal}
                    style={{ position: 'absolute', top: 10, right: 10 }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Contact Info */}
                <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
                    Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
                    Give us some details about who you are and what you do and we'll get in touch with you right away.
                </Typography>

                {/* Form */}
                <form onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField fullWidth label="First Name" variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="Last Name" variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="Email Address" type="email" variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="Company Name" variant="outlined" required />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>Industry</InputLabel>
                                <Select required>
                                    {industries.map((industry, index) => (
                                        <MenuItem key={index} value={industry}>{industry}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="Services Interested In" multiline rows={3} variant="outlined" required />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: "#3C4E80", color: "white", py: 2, borderRadius: "50px", '&:hover': { bgcolor: "#2c3e50" } }}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </motion.div>
        </Box>
    );
};

export default ContactModal;
