// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import { motion } from "motion/react"

// const Header = () => {
//     return (
//         <div className=' w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
//          justify-center gap-4'>
//             <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
//             >
//                 <Image src={assets.profile_img} alt='' className=' rounded-full w-32' />
//             </motion.div>
//             <motion.h3
//                 initial={{ y: -20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}

//                 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo stroke-yellow-500'>
//                 Accounting And Bookkeeping Services <Image src={assets.hand_icon} alt=''
//                     className=' w-6' />
//             </motion.h3>
//             <motion.h1
//                 initial={{ y: -30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className=' text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
//                 We Speak Financials Fluently
//             </motion.h1>
//             <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className=' max-w-2xl mx-auto font-Ovo'>
//                 Our expert and certified accountants offer efficient Accounting and Bookkeeping
//                 Services. Receive reliable financial services to analyze your position and maintain
//                 regulatory compliance. We can help you gain the answer to all business queries you
//                 may have. Your operations can be made easier through our quality assurance services
//                 and efficient pricing strategies as it will allow you to make informed business
//                 decisions.
//             </motion.p>
//             <div className=' flex flex-col sm:flex-row items-center gap-4 mt-4'>
//                 <motion.a
//                     initial={{ y: 30, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 1 }}
//                     href="#contact"
//                     className=' px-10 py-3 border border-white rounded-full bg-black 
//                     text-white flex items-center gap-2 dark:bg-transparent'
//                 >Get a Quote
//                     <Image src={assets.right_arrow_white} alt='' />
//                 </motion.a>

//                 <motion.a
//                     initial={{ y: 30, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 1.2 }}
//                     href="/sample-resume.pdf" download className=' px-10 py-3 border rounded-full
//                 border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume
//                     <Image src={assets.download_icon} alt='' className=' w-4' />
//                 </motion.a>

//             </div>
//         </div>

//     )
// }

// export default Header

// "use client";
// import { assets } from "@/assets/assets";
// import { assetsVid } from "@/assets/mp4";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export const Header = () => {
//     const images = [assets.acc1, assets.acc2, assets.acc3];
//     const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 2000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
//             {images.map((image, index) => (
//                 <motion.div
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: index === currentImageIndex ? 1 : 0, scale: index === currentImageIndex ? 1.05 : 1 }}
//                     transition={{ duration: 1, ease: "easeInOut" }}
//                     style={{
//                         position: "absolute",
//                         top: 0,
//                         objectFit:"cover",
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                     }}
//                 >
//                     <Image src={image} alt={`Background ${index + 1}`} layout="fill" objectFit="cover" quality={85} priority={index === 0} />
//                     <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
//                 </motion.div>
//             ))}

//             <Container
//                 maxWidth="lg"
//                 sx={{
//                     position: "relative",
//                     zIndex: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: "100%",
//                     color: "common.white",
//                     textAlign: "center",

//                 }}
//             >
//                 <Typography
//                     variant="h1"
//                     component={motion.h1}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     sx={{ mt: 20, mb: 3, fontWeight: 700, fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" }, lineHeight: 1.2 }}
//                 >
//                     Manage Your <Typography component="span" color="#EB1552" variant="inherit">Finances</Typography> With Confidence!
//                 </Typography>

//                 <Typography
//                     variant="h6"
//                     component={motion.p}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.9 }}
//                     sx={{
//                         mb: 4,
//                         fontSize: { xs: "1rem", sm: "1.25rem" },
//                         color: "rgba(255, 255, 255, 0.8)",
//                         maxWidth: "800px",
//                         mx: "auto",
//                     }}
//                 >
//                     We provide expert accounting, tax, and financial services to help businesses and individuals make informed decisions and achieve financial success.
//                 </Typography>

//                 <Button
//                     variant="contained"
//                     size="large"
//                     component={motion.button}
//                     initial={{ scale: 0.9, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.6, ease: "easeInOut" }}
//                     sx={{ backgroundColor:"#EB1552",fontSize: "1rem", fontWeight: 600, px: 4, py: 2, borderRadius: "8px", boxShadow: "none", "&:hover": { backgroundColor: "primary.dark" } }}
//                 >
//                     Contact Us
//                 </Button>
//             </Container>
//         </Box>
//     );
// };


"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <Box sx={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
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
                }}
            >
                <source src={"/vid.mp4"} type="video/mp4" />
            </video>

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
                    sx={{ mt: 20, mb: 3, fontWeight: 700, fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" }, lineHeight: 1.2 }}
                >
                    Manage Your <Typography component="span" color="#EB1552" variant="inherit">Finances</Typography> With Confidence!
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
                        color: "rgba(255, 255, 255, 0.8)",
                        maxWidth: "800px",
                        mx: "auto",
                        
                    }}
                >
                    We provide expert accounting, tax, and financial services to help businesses and individuals make informed decisions and achieve financial success.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    component={motion.button}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    sx={{ backgroundColor: "#EB1552", fontSize: "1rem", fontWeight: 600, px: 4, py: 2, borderRadius: "8px", boxShadow: "none", "&:hover": { backgroundColor: "#3c0e63" } }}
                >
                    Contact Us
                </Button>
            </Container>
        </Box>
    );
};
