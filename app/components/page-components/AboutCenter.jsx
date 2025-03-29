
"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Image from "next/image";
// Background images
const bgImage1 = "/1.jpg";
const bgImage2 = "/2.jpg";
const header_about = "header_about.png"

const sections = [
  {
    type: "color",
    bgValue: "#3c0e63",
    title: "Our Mission",
    content: "To provide innovative financial solutions that help businesses and individuals thrive...",
    height: "150vh"
  },
  {
    type: "color",
    bgValue: "#4c0e63",
    title: "Our Team",
    content: "50+ certified professionals with expertise across all financial disciplines...",
    height: "100vh"
  },
  {
    type: "image",
    bgValue: bgImage1,
    title: "Our Story",
    content: "Founded in 2010, we began as a small team passionate about financial empowerment...",
    height: "100vh"
  },
  {
    type: "color",
    bgValue: "#EB1552",
    title: "Our Values",
    content: "Integrity, transparency, and client success drive everything we do...",
    height: "150vh"
  }
];


const AboutCenter = () => {
  return (
    <Box sx={{my:10, position: "relative", overflowX: "hidden" }}>
      <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundImage: `url(${bgImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: { xs: "none", md: "block" }
      }} />

      {/* <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundImage: `url(${bgImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        transition: "opacity 0.5s ease",
        "&.active": {
          opacity: 1
        }
      }} id="second-bg" /> */}

      {/* Scrollable Content Sections */}
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            height: section.height,
            zIndex: 1,
            backgroundColor: section.type === "color" ? section.bgValue : "transparent"
          }}
        >
          {/* Content Container */}
          <Container maxWidth="lg" sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: section.type === "color" ? "white" : "white",
            position: "relative",
            zIndex: 2
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" sx={{
                mb: 4,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 700
              }}>
                {section.title}
              </Typography>
              <Typography variant="h5" sx={{
                maxWidth: "800px",
                mx: "auto",
                mb: 6,
                fontWeight: 400,
                lineHeight: 1.6
              }}>
                {section.content}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: section.type === "color" ? "white" : "#EB1552",
                  color: section.type === "color" ? "#3c0e63" : "white",
                  px: 6,
                  py: 2,
                  fontSize: "1.1rem",
                  "&:hover": {
                    backgroundColor: section.type === "color" ? "#f5f5f5" : "#3c0e63"
                  }
                }}
              >
                Learn More
              </Button>
            </motion.div>
          </Container>

          {/* Image Overlay for non-color sections */}
          {section.type === "image" && (
            <Box sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1
            }} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default AboutCenter;
