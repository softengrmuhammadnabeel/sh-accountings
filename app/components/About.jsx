import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Button, Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
const About = ({ isDarkMode }) => {
    const router = useRouter();
    return (
        <motion.div
            id='about'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{
                background: 'linear-gradient(180deg, #FF7A00 0%, #FF4B00 100%)', // Background Gradient
                borderRadius: '10px', // Optional: to add rounded corners to the section
            }}
        >
            <motion.h4
                className='text-center mb-2 text-lg font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Introduction
            </motion.h4>

            <motion.h2
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                About Us
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'
                >
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'
                >
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        We are a team of Chartered Accountants committed to precision and financial clarity.
                        With expertise in accounting, financial reporting, and bookkeeping, we help businesses
                        stay financially organized and ahead of challenges.
                    </p>

                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Our experience spans corporate and public practice, allowing us to offer tailored
                        solutions to small businesses, enterprises, and SMSFs. Beyond number crunching, we
                        identify opportunities, solve problems, and streamline financial processes.
                    </p>

                    <p className='mb-10 max-w-2xl font-Ovo'>
                        We ensure you have <strong>accurate, timely financial insights</strong> to make informed
                        decisions—so you can focus on growing your business with confidence.
                    </p>

                    {/* The Button you specified */}
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
                            onClick={() => router.push('/about-us')}
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
                            Get to Know Us
                        </Button>
                    </Box>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
