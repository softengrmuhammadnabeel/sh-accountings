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
import servicesData from '@/utils/serviceData';
import ContactUs from '../components/ContactUs';

const Page = () => {

  let isDarkMode = 'true'
  const rowVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };



  return (
    <>
      <Box sx={{
        backgroundColor: "#11001F"
      }}>
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
              Discover Our <Typography component="span" color="#EB1552" variant="inherit">Premium Services</Typography>
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
              From expert consulting to cutting-edge digital solutions, we offer comprehensive services to help businesses scale, innovate, and thrive in the modern world.
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
              Explore Services
            </Button>
          </Container>
        </Box>

        {/* Services Section */}
        <Box sx={{ my: 10, px: { xs: 2, sm: 5 } }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 6, fontWeight: "bold", color: "white" }}
          >
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {servicesData.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "linear-gradient(135deg, #fff 0%, #f5f5f5 100%)",
                      border: "2px solid #11001F",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "5px 8px 40px rgba(255, 20, 147, 0.4)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image.src}
                      alt={service.title}
                      sx={{
                        objectFit: "cover",
                        borderRadius: "12px 12px 0 0",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }} className='bg-slate-100'>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          mb: 2,
                          fontWeight: "bold",
                          color: "#EB1552",
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mb: 2, fontSize: "0.95rem", lineHeight: "1.6" }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          color: "white",
                          bgcolor: "#EB1552",
                          borderColor: "transparent",
                          borderRadius: "8px",
                          boxShadow: "0 4px 10px rgba(255, 20, 147, 0.2)",
                          transition: "all 0.3s",
                          "&:hover": {
                            backgroundColor: "#11001F",
                            color: "white",
                            boxShadow: "0 6px 20px rgba(255, 20, 147, 0.4)",
                          },
                        }}
                      >
                        EXPLORE MORE
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <ContactUs/>
      </Box>
    </>
  );
};

export default Page;