
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const Page = () => {
    return (
        <Box sx={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src={"/vid.mp4"} type="video/mp4" />
            </video>

            <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "common.white",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h1"
                    component={motion.h1}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    sx={{ mt: 20, mb: 3, fontWeight: 700, fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" }, lineHeight: 1.2 }}
                >
                    Manage Your <Typography component="span" color="#EB1552" variant="inherit">Finances</Typography> With Confidence!
                </Typography>

                <Typography
                    variant="h6"
                    component={motion.p}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    sx={{
                        mb: 4,
                        fontSize: { xs: "1rem", sm: "1.25rem" },
                        color: "rgba(255, 255, 255, 0.8)",
                        maxWidth: "800px",
                        mx: "auto",
                        
                    }}
                >
                    We provide expert accounting, tax, and financial services to help businesses and individuals make informed decisions and achieve financial success.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    component={motion.button}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    sx={{ backgroundColor: "#EB1552", fontSize: "1rem", fontWeight: 600, px: 4, py: 2, borderRadius: "8px", boxShadow: "none", "&:hover": { backgroundColor: "#3c0e63" } }}
                >
                    Contact Us
                </Button>
            </Container>
        </Box>
    );
};

export default Page;