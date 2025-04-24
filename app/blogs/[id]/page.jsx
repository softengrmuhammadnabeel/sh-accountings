'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const params = useParams();

  const fetchBlog = useCallback(async () => {
    try {
      const response = await fetch(`/api/blogs/${params.id}`);
      if (!response.ok) throw new Error('Failed to fetch blog');
      const data = await response.json();
      setBlog(data);
      setTimeout(() => extractHeadings(data.description), 100);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  const fetchRecentBlogs = useCallback(async () => {
    try {
      const response = await fetch(`/api/blogs`);
      if (!response.ok) throw new Error('Failed to fetch recent blogs');
      const data = await response.json();
      setRecentBlogs(data);
    } catch (err) {
      console.error('Error fetching recent blogs:', err);
      // Fallback to static data
      setRecentBlogs([
        {
          title: 'Understanding React Server Components',
          image: 'https://via.placeholder.com/300x200',
          date: 'April 3, 2025'
        },
        {
          title: 'Top 10 Tips for TypeScript Developers',
          image: 'https://via.placeholder.com/300x200',
          date: 'March 30, 2025'
        },
        {
          title: 'Mastering MUI v6 Layouts',
          image: 'https://via.placeholder.com/300x200',
          date: 'March 25, 2025'
        }
      ]);
    }
  }, []);

  const extractHeadings = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;

    const headingsArray = Array.from(div.querySelectorAll('h2')).map((heading) => {
      const text = heading.innerText;
      const id = heading.id || text.toLowerCase().replace(/\s+/g, '-');
      heading.id = id;
      return { id, title: text };
    });

    setBlog((prev) => ({ ...prev, description: div.innerHTML }));
    setHeadings(headingsArray);
  };

  useEffect(() => {
    fetchBlog();
    fetchRecentBlogs();
  }, [fetchBlog, fetchRecentBlogs]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        Loading...
      </Box>
    );
  }

  if (!blog) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="error">{error || 'Blog not found'}</Typography>
      </Box>
    );
  }

  {/* <Grid item xs={12} md={8}>
              <Box sx={{ pr: 2, scrollBehavior: 'smooth', mt: 10 }}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>{blog.title}</Typography>
                <Card sx={{ mb: 3, borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
                  <CardMedia component="img" alt={blog.title} height="400" image={blog.image} sx={{ objectFit: 'cover' }} />
                </Card>
                <Card sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
                  <Box sx={{ typography: 'body1', '& p': { mb: 2, lineHeight: 1.8 }, '& h2': { color: 'primary.main', mt: 4, mb: 2, fontWeight: 'bold' } }}
                    dangerouslySetInnerHTML={{ __html: blog.description }} />
                </Card>
              </Box>
            </Grid> */}

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <Box
        sx={{
          // background: 'linear-gradient(to bottom, rgba(1, 10, 0, 0.1), transparent)',
          background: 'white',
          minHeight: '100vh',
          py: 6
        }}
      >
        <Container maxWidth="xl" sx={{
          mt: 10
        }}>
          <Grid container spacing={4}>
            {/* Blog Content Section */}
            <Grid item xs={12} md={8}>
              <Container maxWidth="md">
                {/* Blog Title */}
                <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
                  {blog.title}
                </Typography>

                {/* Author, Date, Read Time */}
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="textSecondary"
                  mb={3}
                >
                  <Box component="span" fontWeight="bold" color="primary.main">
                    {blog.author}
                  </Box>{' '}
                  &bull;{' '}
                  {new Date(blog.createdAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  &bull; {blog.readTime || '5 min read'}
                </Typography>

                {/* Image */}
                <Card
                  sx={{
                    mb: 4,
                    borderRadius: 3,
                    maxHeight: '500px',
                    overflow: 'hidden',
                    boxShadow: 4,
                    alignSelf: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={blog.title}
                    image={blog.image}
                    sx={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      maxHeight: '500px',
                    }}
                  />
                </Card>


                {/* Blog Content */}
                <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
                  <Box
                    sx={{
                      typography: 'body1',
                      '& p': { mb: 2, lineHeight: 1.8 },
                      '& h2': {
                        color: 'primary.main',
                        mt: 4,
                        mb: 2,
                        fontWeight: 'bold',
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </Card>
              </Container>
            </Grid>

            {/* Sidebar: TOC + Recent Blogs */}
            <Grid
              item
              xs={12}
              md={4}
              mt={10}
              sx={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                '::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {/* Table of Contents */}
              <Card sx={{ p: 3, mb: 4, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h6" color="#3C4E80" fontWeight="bold" gutterBottom>
                  Table Of Contents
                </Typography>
                <List>
                  {headings.map((item, index) => (
                    <Box key={index}>
                      <ListItem
                        button
                        onClick={() =>
                          document.getElementById(item.id)?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          })
                        }
                        sx={{ px: 2 }}
                      >
                        <ListItemText primary={item.title} />
                      </ListItem>
                      <Divider />
                    </Box>
                  ))}
                </List>
              </Card>

              {/* Recent Blogs */}
              <Typography variant="h5" fontWeight="bold" color="#3C4E80" mb={2}>
                Recent Blogs
              </Typography>
              {recentBlogs.map((blog, index) => (
                <Card
                  key={index}
                  sx={{
                    display: 'flex',
                    mb: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={blog.image}
                    alt={blog.title}
                    sx={{
                      maxWidth: 150,
                      maxHeight: 100,
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1rem' }}>
                      {blog.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>

  );
};

export default BlogPost;
