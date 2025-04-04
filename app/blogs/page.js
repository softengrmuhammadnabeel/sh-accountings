/* eslint-disable @next/next/no-img-element */
"use client"; // Mark this component as a Client Component

import { assets } from '@/assets/assets';
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import { useRouter } from 'next/navigation';

import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Avatar,
  TextField,
  Container,
} from "@mui/material";
import blogData from '@/utils/blogData'; // Replace with your blog data

const Page = () => {
  const isDarkMode = true; // Set this dynamically based on your theme logic
  console.log(blogData);
  const rowVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  const router = useRouter();


  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent successfully!");
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const fetchBlogs = useCallback(async () => {
    const response = await fetch("/api/blogs");
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return response.json();
  }, []);

  const checkCacheAndFetch = useCallback(async () => {
    const cachedData = localStorage.getItem("blogs");
    const lastFetched = localStorage.getItem("lastFetched");

    const now = new Date().getTime();
    if (cachedData && lastFetched && now - +lastFetched < 0.5 * 60 * 1000) {
      setBlogs(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    try {
      const data = await fetchBlogs();
      setBlogs(data);
      localStorage.setItem("blogs", JSON.stringify(data));
      localStorage.setItem("lastFetched", now.toString());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [fetchBlogs]);


  useEffect(() => {
    checkCacheAndFetch();
  }, [checkCacheAndFetch]);


  // const fetchBlogs = async () => {
  //   const response = await fetch("/api/blogs");
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch blogs");
  //   }
  //   return response.json();
  // };

  // const checkCacheAndFetch = async () => {
  //   // Check if data exists in localStorage
  //   const cachedData = localStorage.getItem("blogs");
  //   const lastFetched = localStorage.getItem("lastFetched");

  //   // If cached data exists and was fetched less than 5 minutes ago, use it
  //   if (cachedData && lastFetched) {
  //     const now = new Date().getTime();
  //     const timeDifference = now - parseInt(lastFetched, 10);

  //     if (timeDifference < 5 * 60 * 1000) { // 5 minutes
  //       setBlogs(JSON.parse(cachedData));
  //       setLoading(false);
  //       return;
  //     }
  //   }

  //   // If no valid cache, fetch from API
  //   try {
  //     const data = await fetchBlogs();
  //     setBlogs(data);

  //     // Save data and timestamp to localStorage
  //     localStorage.setItem("blogs", JSON.stringify(data));
  //     localStorage.setItem("lastFetched", new Date().getTime().toString());
  //     console.log(blogs);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   checkCacheAndFetch();
  // }, []);

  return (
    <>
      {/* Hero Section */}
      <Box sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#3C4E80" // Fallback if video doesn't load
      }}>
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
            opacity: 0.8
          }}
        >
          <source src={"/vid.mp4"} type="video/mp4" />
        </video>

        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(60, 78, 128, 0.5)"
        }} />

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
            Explore Our <Typography component="span" color="white" variant="inherit">Latest Blogs</Typography>
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
            Stay updated with the latest trends, insights, and tips from our experts. Dive into our collection of blogs designed to help you grow and innovate.
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
              borderRadius: "50px",
              border: '2px solid white',
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#3C4E80"
              }
            }}
          >
            Read Blogs
          </Button>
        </Container>
      </Box>

      {/* Blog Section */}
      {/* Blog Section */}
      <Box sx={{
        pb: 10,
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
              color: "#3C4E80",
            }}
          >
            Latest Blogs
          </Typography>

          <Grid container spacing={4}>
            {
              loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
                  <CircularProgress />
                </Box>
              ) :
                blogs.map((blog) => (
                  <Grid item xs={12} sm={6} md={4} key={blog.id}>
                    <motion.div
                      variants={cardVariants}
                      whileHover={{ y: -5 }}
                    >
                      <Box onClick={() => router.push(`/blogs/${blog._id}`)}>

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
                              boxShadow: "0 8px 40px rgba(60, 78, 128, 0.2)",
                              cursor: 'pointer',
                            },
                            border: "1px solid rgba(127, 141, 171, 0.1)"
                          }}

                        >
                          {/* Blog Image - Fixed height */}
                          <Box sx={{
                            height: 200,
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"

                          }}>
                            {blog?.image && (
                              <CardMedia
                                component="img"
                                image={blog.image}
                                alt={blog.title}
                                sx={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "cover",
                                  borderRadius: "16px 16px 0 0",
                                }}
                                loading="lazy"
                                blurDataURL={blog.image.blurDataURL}
                              />
                            )}

                          </Box>

                          <CardContent sx={{
                            flexGrow: 1,
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            minHeight: 180 // Ensures consistent height for text content
                          }}>
                            {/* Category and Date */}
                            <Box sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mb: 2
                            }}>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#7F8DAB",
                                  fontWeight: "medium",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                  fontSize: "0.7rem"
                                }}
                              >
                                {blog?.category}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#7F8DAB",
                                  fontSize: "0.7rem"
                                }}
                              >
                                {blog?.date}
                              </Typography>
                            </Box>

                            {/* Blog Title - Fixed height with line clamp */}
                            <Typography
                              variant="h6"
                              component="h2"
                              sx={{
                                mb: 2,
                                fontWeight: "bold",
                                color: "#3C4E80",
                                fontSize: "1.1rem",
                                lineHeight: 1.4,
                                flexGrow: 1,
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                minHeight: "4.2rem" // 3 lines * 1.4 line-height
                              }}
                            >
                              {blog?.title}
                            </Typography>

                            {/* Author */}
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#7F8DAB",
                                fontSize: "0.75rem",
                                mt: "auto",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                              }}
                            >
                              <Avatar sx={{
                                width: 24,
                                height: 24,
                                fontSize: "0.75rem",
                                bgcolor: "#3C4E80"
                              }}>
                                {String(blog?.author).charAt(0)}
                              </Avatar>
                              {blog?.author}
                            </Typography>
                          </CardContent>
                        </Card>

                      </Box>
                    </motion.div>
                  </Grid>
                ))}
          </Grid>
        </Container>
      </Box >

      {/* Contact Section */}
      < Box
        id="contact"
        sx={{
          px: { xs: 2, sm: 10 },
          py: 16,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, lg: 10 },
          bgcolor: "#3C4E80",
          color: "common.white",
        }
        }
      >
        {/* Contact Form */}
        < motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: "30px",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
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
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "common.white",
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
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "common.white",
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
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "common.white",
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
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "common.white",
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
                      color: "#3C4E80",
                      fontSize: "1rem",
                      fontWeight: 600,
                      py: 2,
                      borderRadius: "50px",
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
        </motion.div >

        {/* Contact Image */}
        < motion.div
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <Box
            sx={{
              height: { xs: 300, lg: 450 },
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            <img
              src={assets.contactUsGirl.src}
              alt="Contact"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </motion.div >
      </Box >
    </>
  );
};

export default Page;