"use client"; // Mark this component as a Client Component

import { assets } from '@/assets/assets';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";

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
import ContactUs from '../components/ContactUs';
import { useRouter } from 'next/navigation';
export const cardVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const rowVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
const Page = () => {
  const router = useRouter();
  let isDarkMode = 'true'

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchservices = async () => {
    const response = await fetch("/api/services");
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    return response.json();
  };

  const checkCacheAndFetch = async () => {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem("services");
    const lastFetched = localStorage.getItem("lastFetchedservices");

    // If cached data exists and was fetched less than 5 minutes ago, use it
    if (cachedData && lastFetched) {
      const now = new Date().getTime();
      const timeDifference = now - parseInt(lastFetched, 10);

      if (timeDifference < 0.5 * 60 * 1000) { // 5 minutes
        setServices(JSON.parse(cachedData));
        setLoading(false);
        return;
      }
    }

    // If no valid cache, fetch from API
    try {
      const data = await fetchservices();
      setServices(data);

      // Save data and timestamp to localStorage
      localStorage.setItem("services", JSON.stringify(data));
      localStorage.setItem("lastFetchedservices", new Date().getTime().toString());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkCacheAndFetch();
  }, []);

  return (
    <>
      <Box sx={{
        backgroundColor: "#ffffff"
      }}>
        {/* Hero Section */}
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url('/services/servicesbg.jpeg')`, // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#3C4E80" // fallback color
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(60, 78, 128, 0.5)", // overlay
            }}
          /> */}
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
              sx={{
                mt: 20,
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                lineHeight: 1.2
              }}
            >
              Discover Our <Typography component="span" color="white" variant="inherit">Premium Services</Typography>
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
                color: "rgba(255, 255, 255, 0.9)",
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
              sx={{
                backgroundColor: "#7F8DAB",
                fontSize: "1rem",
                fontWeight: 600,
                px: 4,
                py: 2,
                border: '2px solid white',
                borderRadius: "50px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#3C4E80"
                }
              }}
            >
              Explore Services
            </Button>
          </Container>
        </Box>

        {/* Services Section */}
        <Box sx={{
          py: 10,
          px: { xs: 2, sm: 5 },
          bgcolor: "background.default",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100px",
            // background: "linear-gradient(to bottom, #3C4E80, #ffffff)",
            zIndex: 0
          }
        }}>
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                mb: 6,
                pt: 10,
                fontWeight: "bold",
                color: "#3C4E80"
              }}
            >
              Our Services
            </Typography>

            <Grid container spacing={4}>
              {loading ? (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                </Grid>

              ) : services.map((service) => (
                <Grid item xs={12} sm={6} md={4} key={service._id}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        bgcolor: "background.paper",
                        boxShadow: "0 4px 20px rgba(60, 78, 128, 0.1)",
                        borderRadius: "16px",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          boxShadow: "0 8px 30px rgba(60, 78, 128, 0.25)",
                        },
                        border: "1px solid rgba(127, 141, 171, 0.1)"
                      }}
                      onClick={() => router.push(`/services/${service._id}`)}
                    >
                      {/* Service Image - Fixed height */}
                      <Box sx={{
                        height: 200,
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                      }}>
                        <CardMedia
                          component="img"
                          image={service.image}
                          alt={service.title}
                          sx={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "16px 16px 0 0",
                          }}
                        />
                      </Box>

                      <CardContent sx={{
                        flexGrow: 1,
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        minHeight: 180 // Ensures consistent height for text content
                      }}>
                        {/* Service Title */}
                        <Typography
                          variant="h6"
                          component="h2"
                          sx={{
                            mb: 2,
                            fontWeight: "bold",
                            color: "#3C4E80",
                            fontSize: "1.1rem",
                            lineHeight: 1.4
                          }}
                        >
                          {service.title}
                        </Typography>

                        {/* Service Description */}
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 2,
                            color: "#7F8DAB",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            flexGrow: 1,
                          }}
                        >
                          {service?.description?.split("\n")[0]}
                        </Typography>


                        {/* Explore Button */}
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#3C4E80",
                            borderColor: "#3C4E80",
                            fontWeight: "600",
                            borderRadius: "50px",
                            alignSelf: "center",
                            px: 3,
                            fontSize: "0.8rem",
                            "&:hover": {
                              backgroundColor: "rgba(60, 78, 128, 0.1)",
                              borderColor: "#3C4E80",
                            },
                          }}
                        >
                          Explore More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <ContactUs />
      </Box>
    </>
  );
};

export default Page;