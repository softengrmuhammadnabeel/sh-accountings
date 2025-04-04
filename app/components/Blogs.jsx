import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
import { motion } from "motion/react";
import servicesData from '@/utils/serviceData';
import { Button } from '@mui/material';
import { rowVariants } from './Services';
import { useRouter } from 'next/navigation';
import accountingBlogs from '@/utils/blogData';
import { Box } from "@mui/material";
import parse from "html-react-parser";

const Blogs = ({ isDarkMode }) => {
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const stripHtml = (html) => {
        // const clean = DOMPurify.sanitize(html); // Optional step
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
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[5%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className=' text-center mb-2 text-lg font-Ovo'> Latest Blog Posts
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=' text-center text-5xl font-Ovo'>Our Blogs
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className=' text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                We are here to keep you informed with the latest trends, tips, and insights through our:

            </motion.p>

            <motion.div
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ delay: 0.9, duration: 0.6 }}
                // className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

                {/* {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className=' aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative 
                    cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className=' bg-white w-10/12 rounded-md absolute bottom-5
                         left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between 
                         duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className=' font-semibold'>{project.title}</h2>
                                <p className=' text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className=' border rounded-full border-black w-9 aspect-square flex
                             items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
                              transition'>
                                <Image src={assets.send_icon} alt='send icon' className=' w-5' />
                            </div>
                        </div>
                    </motion.div>
                ))} */}

                {blogs
                    .slice(0, 4)
                    .map((blog) => (
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
            </motion.div>
            {/* <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onClick={() => router.push('/blogs')}
                transition={{ delay: 1.1, duration: 0.5 }}
                href="" className=' w-max flex items-center justify-center gap-2 text-gray-700
             border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20
              hover:bg-lightHover duration-300 dark:text-white dark:border-white
               dark:hover:bg-darkHover'> */}
                {/* Show more
                <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                    alt='Right arrow' className=' w-4' /> */}
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
                        component={motion.button}
                        initial={{ scale: 0.9, opacity: 0 }}
                        onClick={() => router.push('/blogs')}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
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
            {/* </motion.a> */}
        </motion.div >
    )
}


export default Blogs