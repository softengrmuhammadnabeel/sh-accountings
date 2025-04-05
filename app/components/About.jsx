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
            id="about"
            className="w-full px-[12%] py-10 scroll-mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{
                background: 'linear-gradient(180deg, #FF7A00 0%, #FF4B00 100%)', // Background Gradient
                borderRadius: '10px', // Optional: to add rounded corners to the section
            }}
        >
            <motion.h2
                className="text-center text-5xl font-Ovo"
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
                className="flex flex-col gap-16 my-20 px-4 lg:px-20 lg:flex-row"
            >
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex justify-center"
                >
                    <Box className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl overflow-hidden shadow-lg">
                        <img
                            src="/home/about-us-home.jpg"
                            alt="Clear Horizon Logo"
                            className="w-full h-full object-cover rounded-3xl transition-transform duration-300 hover:scale-105"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    </Box>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 flex flex-col justify-center"
                >
                    <p className="mb-8 max-w-2xl font-Ovo text-lg text-[#1F2943] leading-relaxed">
                        We are a team of Chartered Accountants committed to precision and financial clarity.
                        With expertise in accounting, financial reporting, and bookkeeping, we help businesses
                        stay financially organized and ahead of challenges.
                    </p>

                    <p className="mb-8 max-w-2xl font-Ovo text-lg text-[#1F2943] leading-relaxed">
                        Our experience spans corporate and public practice, allowing us to offer tailored
                        solutions to small businesses, enterprises, and SMSFs. Beyond number crunching, we
                        identify opportunities, solve problems, and streamline financial processes.
                    </p>

                    <p className="mb-8 max-w-2xl font-Ovo text-lg text-[#1F2943] leading-relaxed">
                        We ensure you have <strong>accurate, timely financial insights</strong> to make informed
                        decisions—so you can focus on growing your business with confidence.
                    </p>

                    <Box sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            size="large"
                            component={motion.button}
                            initial={{ scale: 0.9, opacity: 0 }}
                            onClick={() => router.push("/about-us")}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            sx={{
                                backgroundColor: "#7F8DAB",
                                fontSize: "1rem",
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                border: "2px solid white",
                                borderRadius: "50px",
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: "#3C4E80",
                                },
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
