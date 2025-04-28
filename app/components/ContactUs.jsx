// "use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { motion } from "framer-motion";
// import {
//   Grid,
//   TextField,
// } from "@mui/material";
// import { assets } from "@/assets/assets";
// import { rowVariants } from "../services/page";

// const ContactUs = () => {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log("Message sent successfully!");
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       {/* Contact Section */}
//       <Box
//         id="contact"
//         sx={{
//           px: { xs: 2, sm: 10 },
//           py: 16,
//           display: "flex",
//           flexDirection: { xs: "column", lg: "row" },
//           alignItems: "center",
//           justifyContent: "center",
//           gap: { xs: 6, lg: 10 },
//           bgcolor: "#3C4E80",
//           color: "common.white",
//         }}
//       >
//         <Box
//           id="contact"

//           sx={{
//             px: { xs: 2, sm: 2 },
//             py: 16,
//             display: "flex",
//             flexDirection: { xs: "column", lg: "row" },
//             alignItems: "center",
//             justifyContent: "center",
//             gap: { xs: 6, lg: 10 },
//             // bgcolor: "#3C4E80",
//             color: "common.white",
//           }}
//         >
//           {/* Contact Form */}
//           <motion.div
//             variants={rowVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             style={{ width: "100%", maxWidth: "600px" }}
//           >
//             <Box
//               sx={{
//                 p: 4,
//                 borderRadius: "30px",
//                 bgcolor: "rgba(255, 255, 255, 0.1)",
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <Typography
//                 variant="h4"
//                 sx={{
//                   mb: 4,
//                   fontWeight: "bold",
//                   color: "common.white",
//                   textAlign: { xs: "center", lg: "left" },
//                 }}
//               >
//                 Get in Touch
//               </Typography>

//               <form onSubmit={onSubmit}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="First Name"
//                       variant="outlined"
//                       sx={{
//                         bgcolor: "rgba(255, 255, 255, 0.1)",
//                         borderRadius: "8px",
//                         "& .MuiOutlinedInput-root": {
//                           color: "common.white",
//                           "& fieldset": {
//                             borderColor: "rgba(255, 255, 255, 0.3)",
//                           },
//                           "&:hover fieldset": {
//                             borderColor: "common.white",
//                           },
//                         },
//                         "& .MuiInputLabel-root": {
//                           color: "rgba(255, 255, 255, 0.7)",
//                         },
//                         "& .MuiInputLabel-root.Mui-focused": {
//                           color: "common.white",
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Last Name"
//                       variant="outlined"
//                       sx={{
//                         bgcolor: "rgba(255, 255, 255, 0.1)",
//                         borderRadius: "8px",
//                         "& .MuiOutlinedInput-root": {
//                           color: "common.white",
//                           "& fieldset": {
//                             borderColor: "rgba(255, 255, 255, 0.3)",
//                           },
//                           "&:hover fieldset": {
//                             borderColor: "common.white",
//                           },
//                         },
//                         "& .MuiInputLabel-root": {
//                           color: "rgba(255, 255, 255, 0.7)",
//                         },
//                         "& .MuiInputLabel-root.Mui-focused": {
//                           color: "common.white",
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       type="email"
//                       variant="outlined"
//                       sx={{
//                         bgcolor: "rgba(255, 255, 255, 0.1)",
//                         borderRadius: "8px",
//                         "& .MuiOutlinedInput-root": {
//                           color: "common.white",
//                           "& fieldset": {
//                             borderColor: "rgba(255, 255, 255, 0.3)",
//                           },
//                           "&:hover fieldset": {
//                             borderColor: "common.white",
//                           },
//                         },
//                         "& .MuiInputLabel-root": {
//                           color: "rgba(255, 255, 255, 0.7)",
//                         },
//                         "& .MuiInputLabel-root.Mui-focused": {
//                           color: "common.white",
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Your Message"
//                       multiline
//                       rows={4}
//                       variant="outlined"
//                       sx={{
//                         bgcolor: "rgba(255, 255, 255, 0.1)",
//                         borderRadius: "8px",
//                         "& .MuiOutlinedInput-root": {
//                           color: "common.white",
//                           "& fieldset": {
//                             borderColor: "rgba(255, 255, 255, 0.3)",
//                           },
//                           "&:hover fieldset": {
//                             borderColor: "common.white",
//                           },
//                         },
//                         "& .MuiInputLabel-root": {
//                           color: "rgba(255, 255, 255, 0.7)",
//                         },
//                         "& .MuiInputLabel-root.Mui-focused": {
//                           color: "common.white",
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       fullWidth
//                       sx={{
//                         bgcolor: "common.white",
//                         color: "#3C4E80",
//                         fontSize: "1rem",
//                         fontWeight: 600,
//                         py: 2,
//                         borderRadius: "50px",
//                         "&:hover": {
//                           bgcolor: "rgba(255, 255, 255, 0.9)",
//                         },
//                       }}
//                     >
//                       Send Message NA
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </motion.div>

//           {/* Contact Image */}
//           <motion.div
//             variants={rowVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             style={{ width: "100%", maxWidth: "500px" }}
//           >
//             <Box
//               sx={{
//                 height: { xs: 300, lg: 450 },
//                 borderRadius: "30px",
//                 overflow: "hidden",
//                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//                 border: "2px solid rgba(255, 255, 255, 0.2)"
//               }}
//             >
//               <img
//                 src={assets.contactUsGirl.src}
//                 alt="Contact"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </Box>
//           </motion.div>
//         </Box>
//       </Box>





//       {/* Contact Form
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           sx={{ width: { xs: "100%", lg: "50%" } }}
//         >
//           <Box
//             sx={{
//               p: 4,
//               borderRadius: 2,
//               bgcolor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white background
//               backdropFilter: "blur(10px)", // Blur effect for a modern look
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Subtle shadow
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 mb: 4,
//                 fontWeight: "bold",
//                 color: "common.white",
//                 textAlign: { xs: "center", lg: "left" },
//               }}
//             >
//               Contact Us
//             </Typography>
//             <form onSubmit={onSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="First Name"
//                     variant="outlined"
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.1)",
//                       borderRadius: "8px",
//                       "& .MuiOutlinedInput-root": {
//                         color: "common.white",
//                         "& fieldset": {
//                           borderColor: "rgba(255, 255, 255, 0.3)",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "common.white",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         color: "rgba(255, 255, 255, 0.7)", // Light label color
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "common.white", // White label when focused
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="Last Name"
//                     variant="outlined"
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.1)",
//                       borderRadius: "8px",
//                       "& .MuiOutlinedInput-root": {
//                         color: "common.white",
//                         "& fieldset": {
//                           borderColor: "rgba(255, 255, 255, 0.3)",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "common.white",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         color: "rgba(255, 255, 255, 0.7)", // Light label color
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "common.white", // White label when focused
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="Email"
//                     type="email"
//                     variant="outlined"
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.1)",
//                       borderRadius: "8px",
//                       "& .MuiOutlinedInput-root": {
//                         color: "common.white",
//                         "& fieldset": {
//                           borderColor: "rgba(255, 255, 255, 0.3)",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "common.white",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         color: "rgba(255, 255, 255, 0.7)", // Light label color
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "common.white", // White label when focused
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     fullWidth
//                     label="Phone"
//                     variant="outlined"
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.1)",
//                       borderRadius: "8px",
//                       "& .MuiOutlinedInput-root": {
//                         color: "common.white",
//                         "& fieldset": {
//                           borderColor: "rgba(255, 255, 255, 0.3)",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "common.white",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         color: "rgba(255, 255, 255, 0.7)", // Light label color
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "common.white", // White label when focused
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Your Message"
//                     multiline
//                     rows={4}
//                     variant="outlined"
//                     sx={{
//                       bgcolor: "rgba(255, 255, 255, 0.1)",
//                       borderRadius: "8px",
//                       "& .MuiOutlinedInput-root": {
//                         color: "common.white",
//                         "& fieldset": {
//                           borderColor: "rgba(255, 255, 255, 0.3)",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "common.white",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         color: "rgba(255, 255, 255, 0.7)", // Light label color
//                       },
//                       "& .MuiInputLabel-root.Mui-focused": {
//                         color: "common.white", // White label when focused
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       bgcolor: "common.white",
//                       color: "#EB1552",
//                       fontSize: "1rem",
//                       fontWeight: 600,
//                       py: 2,
//                       borderRadius: "8px",
//                       "&:hover": {
//                         bgcolor: "rgba(255, 255, 255, 0.9)",
//                       },
//                     }}
//                   >
//                     Send Message
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </motion.div>

//         {/* Contact Image */}
//       {/* <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           sx={{ width: { xs: "100%", lg: "50%" } }}
//         >
//           <Box
//             sx={{
//               height: { xs: 300, lg: 450 },
//               borderRadius: 2,
//               overflow: "hidden",
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <img
//               src={assets.contactUsGirl.src}
//               alt="Contact"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </Box>
//         </motion.div>  */}


//     </>
//   );
// };

// export default ContactUs;

"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress";  // Import CircularProgress for loading spinner
import { toast } from 'react-toastify';  // Import react-toastify for toast notifications


import {
  Grid,
  TextField,
} from "@mui/material";
import { assets } from "@/assets/assets";
import { rowVariants } from "../services/page";

const Page = () => {

  const [form, setForm] = useState({ firstName: '', lastName: "", email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [FormValid, setFormValid] = useState(false);
  const contactRef = React.useRef(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(() => {
    const isFormValid = () => {
      setFormValid(form.firstName !== '' && form.lastName !== '' && form.email !== '' && form.message !== '')
    };
    isFormValid()
  }, [form])

  React.useEffect(() => {
    setForm({ firstName: '', lastName: "", email: '', message: '' })

  }, [isSuccess])
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setForm({ firstName: '', lastName: "", email: '', message: '' })
      setIsSuccess(true);
      toast.success('Email sent successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        theme: "colored",
      });
    } else {
      toast.error('Error: Unable to send email. Please try again later.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        theme: 'colored',
      });

    }
  };


  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url('/contact/contactbg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#3C4E80"
        }}
      >
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
            Get in <Typography component="span" color="white" variant="inherit">Touch</Typography> With Us!
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
            Have questions or need assistance? Reach out to us today! Our team is here to help you with all your accounting and reporting needs.
          </Typography>

          {/* <Button
            variant="contained"
            size="large"
            component={motion.button}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            sx={{ backgroundColor: "#EB1552", fontSize: "1rem", fontWeight: 600, px: 4, py: 2, borderRadius: "8px", boxShadow: "none", "&:hover": { backgroundColor: "#3c0e63" } }}
          >
            Contact Us
          </Button> */}
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
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
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
        }}
      >
        <Box
          id="contact"
          ref={contactRef}
          sx={{
            px: { xs: 2, sm: 2 },
            py: 16,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 6, lg: 10 },
            // bgcolor: "#3C4E80",
            color: "common.white",
          }}
        >
          {/* Contact Form */}
          <motion.div
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

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="firstName"
                      onChange={handleChange}
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
                      onChange={handleChange}
                      name="lastName"
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
                      onChange={handleChange}
                      name="email"
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
                      name="message"
                      onChange={handleChange}
                      type="text"
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
                      disabled={!FormValid}
                      sx={{
                        bgcolor: "common.white",
                        color: FormValid ? "#3C4E80" : "white",
                        fontSize: "1rem",
                        fontWeight: 600,
                        py: 2,

                        borderRadius: "50px",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.9)",
                        },
                      }}
                    >
                      {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                    </Button>

                  </Grid>
                </Grid>
              </form>
            </Box>
          </motion.div>

          {/* Contact Image */}
          <motion.div
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
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default Page;