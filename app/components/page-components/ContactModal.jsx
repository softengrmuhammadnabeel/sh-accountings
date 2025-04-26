"use client";
import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    TextField,
    IconButton,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Paper,
    Stack,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";  // Import CircularProgress for loading spinner
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { toast } from "react-toastify";
const industries = [
    "Technology", "Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Real Estate", "Automotive", "Energy", "Telecommunications",
    "Agriculture", "Entertainment", "Media", "Construction", "Food & Beverage", "Pharmaceuticals", "Hospitality", "Transportation", "Legal Services", "Aerospace",
    "Government", "Nonprofit", "E-commerce", "Cybersecurity", "Biotechnology", "Consulting", "Insurance", "Logistics", "Sports", "Environmental Services"
];

const ContactModal = ({ closeModal }) => {
    const [industry, setIndustry] = React.useState("");
    const [form, setForm] = useState({ firstName: '', lastName: "", email: '',phoneNumber:'', message: '', Industry: '', companyName: '' });
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [FormValid, setFormValid] = useState(false);
    React.useEffect(() => {
        const isFormValid = () => {
            setFormValid(form.firstName !== '' && form.lastName !== '' && form.Industry !== '' &&form.phoneNumber !== '' && form.companyName !== '' && form.email !== '' && form.message !== '')
        };
        isFormValid()
    }, [form])
    React.useEffect(() => {
        setForm({ firstName: '', lastName: "", email: '', message: '' })
    
      }, [isSuccess])

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'Industry') {
            setIndustry(value);
        }

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        setLoading(false);
        if (res.ok) {
            setForm({ firstName: '', lastName: "", email: '', message: '' })
            setIsSuccess(true);
            closeModal()
            toast.success('Email sent successfully!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                theme: "colored",
            });
        } else {
            toast.error('Error: Unable to send email. Please try again later.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                theme: 'colored',
            });

        }
    };

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                zIndex: 9999,
                pt: 4,
                px: 2,
                mb: 2
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                style={{
                    backgroundColor: "#fff",
                    borderRadius: 8,
                    padding: "32px",
                    width: "100%",
                    maxWidth: 700,
                    maxHeight: "90vh",
                    overflowY: "auto",
                    position: "relative",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                }}
            >
                <IconButton
                    onClick={closeModal}
                    sx={{ position: "absolute", top: 16, right: 16 }}
                >
                    <CloseIcon />
                </IconButton>

                <Typography variant="h5" fontWeight="bold" mb={1}>
                    What have you seen?
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={2}>
                    Give us some details about who you are and what you do and we'll get in touch with you right away.
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={3}>
                    We can't wait to collaborate with you.
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth onChange={handleChange} label="First Name" name="firstName" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth onChange={handleChange} label="Last Name" name="lastName" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth onChange={handleChange} label="Email Address" name="email" type="email" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth onChange={handleChange} label="Company Name" name="companyName" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth onChange={handleChange} type="tel" label="Phone Number" name="phoneNumber" required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth onChange={handleChange} required>
                                <InputLabel>Industry</InputLabel>
                                <Select
                                    value={industry}
                                    label="Industry"
                                    onChange={handleChange}
                                    name="Industry"
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200,
                                            },
                                        },
                                    }}
                                >
                                    {industries.map((industry, index) => (
                                        <MenuItem key={index} value={industry}>
                                            {industry}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="message"
                                fullWidth
                                onChange={handleChange}
                                label="What Services Are You Interested In?"
                                multiline
                                rows={3}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={!FormValid}
                                sx={{
                                    bgcolor: "#3C4E80",
                                    color: "white",
                                    py: 1.4,
                                    borderRadius: "8px",
                                    fontWeight: 600,
                                    '&:hover': {
                                        bgcolor: "#2c3e50"
                                    }
                                }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <Box mt={6} pt={4} borderTop="1px solid #e0e0e0">
                    <Typography variant="h5" gutterBottom>
                        Contact Us
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                        <EmailIcon sx={{ color: "#3C4E80" }} />
                        <Typography variant="body2">
                            <strong>info@clearhorizonaccountants.com</strong>
                        </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
                        <PhoneIcon sx={{ color: "#3C4E80" }} />
                        <Typography variant="body2"><strong>+61 424 887 032</strong></Typography>
                    </Stack>
                </Box>
            </motion.div>
        </Box>
    );
};

export default ContactModal;
