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
import Image from 'next/image';

const BlogPost = () => {
    const [service, setService] = useState(null);
    const [headings, setHeadings] = useState([]);
    const [recentService, setRecentService] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const params = useParams();

    const fetchService = useCallback(async () => {
        try {
            const response = await fetch(`/api/services/${params.id}`);
            if (!response.ok) throw new Error('Failed to fetch blog');
            const data = await response.json();
            setService(data);
            setTimeout(() => extractHeadings(data.description), 100);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [params.id]);

    const fetchRecentServices = useCallback(async () => {
        try {
            const response = await fetch(`/api/services`);
            if (!response.ok) throw new Error('Failed to fetch recent service');
            const data = await response.json();
            setRecentService(data);
        } catch (err) {
            console.error('Error fetching recent service:', err);
            // Fallback to static data
            setRecentService([
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

        setService((prev) => ({ ...prev, description: div.innerHTML }));
        setHeadings(headingsArray);
    };

    useEffect(() => {
        fetchService();
        fetchRecentServices();
    }, [fetchService, fetchRecentServices]);


    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                Loading...
            </Box>
        );
    }

    if (!service) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h6" color="error">{error || 'service not found'}</Typography>
            </Box>
        );
    }

    const paragraphs = service.description
        .split(/\n+/)
        .filter(Boolean)
        .map((para) => para.trim());

    const bulletPoints = paragraphs.filter((line) => line.startsWith('•') || line.startsWith('-'));
    const mainParagraphs = paragraphs.filter((line) => !line.startsWith('•') && !line.startsWith('-') && !line.startsWith('    •'));

    return (
        // <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        //     <Box
        //         sx={{
        //             background: 'linear-gradient(to bottom, rgba(1, 10, 0, 0.1), transparent)',
        //             minHeight: '100vh',
        //             py: 6
        //         }}
        //     >
        //         <Container maxWidth="xl">
        //             <Grid container spacing={4}>
        //                 <Grid item xs={12} md={8}>
        //                     <Box sx={{ pr: 2, scrollBehavior: 'smooth', mt: 10 }}>
        //                         <Typography variant="h3" fontWeight="bold" gutterBottom>{blog.title}</Typography>
        //                         <Card sx={{ mb: 3, borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
        //                             <CardMedia component="img" alt={blog.title} height="400" image={blog.image} sx={{ objectFit: 'cover' }} />
        //                         </Card>
        //                         <Card sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
        //                             <Box sx={{ typography: 'body1', '& p': { mb: 2, lineHeight: 1.8 }, '& h2': { color: 'primary.main', mt: 4, mb: 2, fontWeight: 'bold' } }}
        //                                 dangerouslySetInnerHTML={{ __html: blog.description }} />
        //                         </Card>
        //                     </Box>
        //                 </Grid>

        //                 <Grid item xs={12} md={4} mt={10} sx={{
        //                     overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none',
        //                     '::-webkit-scrollbar': { display: 'none' }  // Hides the scrollbar
        //                 }}>
        //                     <Card sx={{ p: 3, mb: 4, borderRadius: 2, boxShadow: 3 }}>
        //                         <Typography variant="h6" color='#3C4E80' fontWeight='bold' gutterBottom>Table Of Contents</Typography>
        //                         <List>
        //                             {headings.map((item, index) => (
        //                                 <Box key={index}>
        //                                     <ListItem button onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })} sx={{ px: 2 }}>
        //                                         <ListItemText primary={item.title} />
        //                                     </ListItem>
        //                                     <Divider />
        //                                 </Box>
        //                             ))}
        //                         </List>
        //                     </Card>

        //                     <Typography variant="h5" fontWeight="bold" color='#3C4E80' mb={2}>Recent Blogs</Typography>
        //                     {recentBlogs.map((blog, index) => (
        //                         <Card key={index} sx={{ display: 'flex', mb: 2, borderRadius: 2, boxShadow: 3, overflow: 'hidden' }}>
        //                             <CardMedia component="img" image={blog.image} alt={blog.title} sx={{
        //                                 maxWidth: 150, maxHeight: 100, height: "100%",
        //                                 width: "100%", objectFit: 'cover'
        //                             }} />
        //                             <CardContent>
        //                                 <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1rem' }}>{blog.title}</Typography>
        //                             </CardContent>
        //                         </Card>
        //                     ))}
        //                 </Grid>
        //             </Grid>
        //         </Container>
        //     </Box>
        // </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Box
                sx={{
                    backgroundColor: '#E6E7E6',
                    minHeight: '100vh',
                    py: 6,

                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            backgroundColor: '#2B4B74',
                            // px: 3,
                            py: 1,
                            borderRadius: 2,
                            mb: 4,
                            justifyContent:'center',
                            textAlign: 'center',
                            mt: 10
                        }}
                    >
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="#FFF"
                            gutterBottom
                            sx={{ fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' } }}
                        >
                            {service.title.replace('📘', '').trim()}
                        </Typography>
                    </Box>

                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7}>
                            {mainParagraphs.map((para, idx) => (
                                <Typography variant="body1" sx={{ my: 2, lineHeight: 1.8, color: 'black' }} key={idx}>
                                    {para}
                                </Typography>
                            ))}

                            {bulletPoints.length > 0 && (
                                <Box mt={3}>
                                    <Typography variant="h6" fontWeight="bold" color='black' gutterBottom>
                                        What we do:
                                    </Typography>
                                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: 'black' }}>
                                        {bulletPoints.map((point, idx) => (
                                            <li key={idx}>{point.replace(/^•\s*/, '')}</li>
                                        ))}
                                    </ul>
                                </Box>
                            )}
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 flex justify-center "
                            >
                                <Box className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl overflow-hidden shadow-lg">
                                    <img
                                        src={service.image}
                                        alt="Service Illustration"
                                        className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
                                        style={{
                                            objectFit: 'cover',
                                            height: '100%',
                                            width: '100%',
                                        }}
                                    />
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default BlogPost;
