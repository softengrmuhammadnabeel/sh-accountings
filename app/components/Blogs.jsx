import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import servicesData from '@/utils/serviceData';
import { Button, Box, CircularProgress } from '@mui/material'; // <-- added CircularProgress
import { useRouter } from 'next/navigation';
import accountingBlogs from '@/utils/blogData';
import parse from "html-react-parser";

const Blogs = ({ isDarkMode }) => {
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

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

    return (
        <div id='work' className='w-full px-[5%] py-10 scroll-mt-20'>
            <h4 className=' text-center mb-2 text-lg font-Ovo'>Latest Blog Posts</h4>
            <h2 className=' text-center text-5xl font-Ovo'>Our Blogs</h2>
            <p className=' text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                We are here to keep you informed with the latest trends, tips, and insights through our:
            </p>

            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                        width: "100%",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {blogs.slice(0, 4).map((blog) => (
                            <div
                                key={blog._id}
                                className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-[#1c0831] rounded-lg shadow-md"
                            >
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">
                                        {blog.title}
                                    </h2>
                                    <p className="mb-6 text-gray-600 dark:text-white">
                                        {stripHtml(blog.description).substring(0, 75)}...
                                    </p>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "#3C4E80",
                                            borderColor: "#3C4E80",
                                            fontWeight: "600",
                                            borderRadius: "50px",
                                            alignSelf: "flex-start",
                                            px: 3,
                                            fontSize: "0.8rem",
                                            "&:hover": {
                                                backgroundColor: "rgba(60, 78, 128, 0.1)",
                                                borderColor: "#3C4E80",
                                            },
                                        }}
                                        onClick={() => router.push(`/blogs/${blog._id}`)}
                                    >
                                        Explore More
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4,
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => router.push('/blogs')}
                            sx={{
                                backgroundColor: "#7F8DAB",
                                fontSize: "1rem",
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                border: '2px solid white',
                                borderRadius: "50px",
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: "#3C4E80"
                                }
                            }}
                        >
                            Explore More Services
                        </Button>
                    </Box>
                </>
            )}
        </div>
    );
};

export default Blogs;
