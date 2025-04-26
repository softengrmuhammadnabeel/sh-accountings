/* eslint-disable @next/next/no-img-element */

"use client"; // Mark this component as a Client Component

import { assets } from '@/assets/assets';
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import { useRouter } from 'next/navigation';
import { Search } from "@mui/icons-material"; // MUI icon

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
import ContactUS from '../components/ContactUs';

const Page = () => {
  const isDarkMode = true; // Set this dynamically based on your theme logic
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
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const contactRef = React.useRef(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const fetchBlogs = useCallback(async () => {
    const response = await fetch("/api/blogs");
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return response.json();
  }, []);
  // console.log(blogs);
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



  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBlogs([]);
      return;
    }

    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url('/blogs/blogbg.jpeg')`, // Replace with your image path
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
              color: "rgba(255, 255, 255, 1)",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Stay updated with the latest trends, insights, and tips from our experts. Dive into our collection of blogs designed to help you grow and innovate.
          </Typography>

          <Button
            onClick={scrollToContact}
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
      </Box >


      {/* Blog Section | Search Section */}
      < Box sx={{
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
      }
      }>
        
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Title and Search Row - Responsive layout */}
          <Box ref={contactRef}></Box>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            alignItems: { xs: 'center', sm: 'center', md: 'flex-end' },
            justifyContent: 'space-between',
            gap: 2,
            mb: 6,
            pt: 10
          }}>
            
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#3C4E80",
                alignSelf: { xs: 'center', sm: 'center', md: 'flex-start' }
              }}
            >
              Latest Blogs
            </Typography>

            <TextField
              variant="outlined"
              size="small"
              placeholder="Search blog..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <Search sx
                  ={{
                    color: "#3C4E80",
                    mr: 1
                  }}
                />,
              }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "300px"
                },
                alignSelf: {
                  xs: 'center',
                  sm: 'center',
                  md: 'flex-start'
                }
              }}

            />
          </Box>

          {/* Blog Grid - Responsive layout */}
          <Grid container spacing={4} >
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

            ) : (filteredBlogs.length > 0 ? filteredBlogs : blogs).map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id || blog._id}>
                <motion.div
                  // ref={contactRef}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  <Box
                    onClick={() => router.push(`/blogs/${blog._id || blog.id}`)}
                    sx={{
                      height: '100%',
                      '&:hover': {
                        cursor: 'pointer'
                      }
                    }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        bgcolor: "background.paper",
                        boxShadow: "0 4px 20px rgba(60, 78, 128, 0.1)",
                        borderRadius: "16px",
                        transition: "transform 0.3s, box-shadow 0 3s",
                        "&:hover": {
                          boxShadow: "0 8px 40px rgba  (60, 78, 128, 0.2)",
                        },
                        border: "1px solid rgba  (127, 141, 171, 0.1)"
                      }}
                    >
                      {/* Blog Image - Fixed height */}
                      <Box
                        sx={{
                          height: 200,
                          width: "100%",
                          overflow: "hidden",
                          position: "relative",
                          borderRadius: "16px 16px 0 0"
                        }}
                      >
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
                            }}
                            loading="lazy"
                          />
                        )}
                      </Box>

                      <CardContent
                        sx={{
                          flexGrow: 1,
                          p: 3,
                          display: "flex",
                          flexDirection: "column",
                          minHeight: 180
                        }}
                      >
                        {/* Category and Date */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2
                          }}
                        >
                          {/* <Box
                            sx={{
                              backgroundColor: "#2B4B74", 
                              borderRadius: "50%",
                              padding: "4px", 
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              // width: 28,
                              // height: 28,
                            }}
                          >
                            <Image src="/tab/favicon-16x16.png" width={20} height={20} alt="category" />
                          </Box> */}

                          <Typography
                            variant="caption"
                            sx={{
                              color: "#7F8DAB",
                              fontSize: "0.7rem"
                            }}
                          >
                            {blog?.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''}
                          </Typography>
                        </Box>

                        {/* Blog Title */}
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
                            minHeight: "4.2rem"
                          }}
                        >
                          {blog?.title || 'Untitled Blog'}
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
                          <Avatar
                            sx={{
                              width: 24,
                              height: 24,
                              fontSize: "0.75rem",
                              bgcolor: "#3C4E80"
                            }}
                          >
                            <Image src="/tab/favicon-16x16.png" width={20} height={20} alt="category" />
                          </Avatar>
                          {blog?.author || 'Clear Horizon Accountants'}
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
      {/* <ContactUS /> */}
    </>
  );
};

export default Page;