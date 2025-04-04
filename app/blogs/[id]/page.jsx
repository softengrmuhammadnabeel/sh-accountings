'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blogs/${params.id}`);
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  if (!blog) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          fontSize: '1.25rem',
          color: 'text.secondary',
        }}
      >
        Loading...
      </Box>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sx={{ mt: 12 }}>
            <Card sx={{ position: 'relative', height: '60vh', borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                alt={blog.title}
                height="100%"
                image={blog.image}
                sx={{ objectFit: 'cover', borderRadius: 2 }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h3" color="white" sx={{ textShadow: 2 }}>
                  {blog.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Content Section */}
        <Grid container spacing={4} justifyContent="center" >
          <Grid item xs={12} md={12} >
            <Card sx={{ gap: 5, display: 'flex', boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
              <CardContent sx={{ p: 4, }}>
                <Typography variant="h5" gutterBottom>
                  {blog.title}
                </Typography>
                <Box
                  sx={{
                    typography: 'body1',
                    '& p': {
                      lineHeight: 1.8,
                      color: 'text.primary',
                    },
                    '& h2': {
                      color: 'primary.main',
                      fontWeight: 'bold',
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default BlogPost;
