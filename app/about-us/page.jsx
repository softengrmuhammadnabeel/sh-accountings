
// "use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Background images
// const bgImage1 = "/1.jpg";
// const bgImage2 = "/2.jpg";
// const headerImage = "/header_about.png";

// const sections = [
//   {
//     type: "color",
//     bgValue: "#3c0e63",
//     title: "Our Mission",
//     content: "To provide innovative financial solutions that help businesses and individuals thrive in today's competitive landscape.",
//     height: "100vh"
//   },
//   {
//     type: "image",
//     bgValue: bgImage1,
//     title: "Our Story",
//     content: "Founded in 2010, we began as a small team passionate about financial empowerment. Today, we serve clients across multiple countries.",
//     height: "100vh"
//   },
//   {
//     type: "color",
//     bgValue: "#EB1552",
//     title: "Our Team",
//     content: "Our certified professionals bring expertise across all financial disciplines, ensuring top-quality service for every client.",
//     height: "100vh"
//   },
//   {
//     type: "image",
//     bgValue: bgImage2,
//     title: "Our Values",
//     content: "Integrity, transparency, and client success drive everything we do. We build relationships based on trust and results.",
//     height: "100vh"
//   }
// ];

// const AboutUsPage = () => {
//   const [activeBg, setActiveBg] = React.useState(0);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Determine which background should be active based on scroll position
//       if (scrollPosition > windowHeight * 2.5) {
//         setActiveBg(1);
//       } else {
//         setActiveBg(0);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Box sx={{ position: "relative", px: 0, overflowX: "hidden" }}>
//       {/* Header Section */}
//       <Box sx={{
//         position: "sticky",
//         bgcolor: "red",
//         width: "100%",
//         top:0,
//         left:0,
//         height: "100vh",
//         py: { xs: 6, md: 10 },
//         px: 0,
//         zIndex: 10
//       }}>
//         <Box>
//           <Box sx={{
//             px: 0,
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: { xs: 4, md: 8 }
//           }}>

//             <Box sx={{
//               position: "relative",
//               minHeight: { xs: 300, md: 550 },
//               width: "100vw",
//               borderRadius: 0,
//               overflow: "hidden",
//               boxShadow: 6
//             }}>
//               <Image
//                 src={headerImage}
//                 alt="About TAXVISER"
//                 fill
//                 style={{
//                   objectFit: "cover",
//                   objectPosition: "center",
//                   position: "absolute",
//                 }}

//                 priority
//                 quality={100}
//               />

//               <Box sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: { xs: "center", md: "flex-start" },
//                 textAlign: { xs: "center", md: "left" }
//               }}>
//                 <Typography variant="h1" sx={{
//                   fontSize: { xs: "2.5rem", md: "3.5rem" },
//                   fontWeight: 700,
//                   color: "primary.main",
//                   mb: 2,
//                   lineHeight: 1.2
//                 }}>
//                   TAXVISER
//                 </Typography>

//                 <Typography variant="h2" sx={{
//                   fontSize: { xs: "1.75rem", md: "2.25rem" },
//                   fontWeight: 600,
//                   mb: 3,
//                   position: "relative",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     left: { md: 0 },
//                     bottom: -8,
//                     width: 80,
//                     height: 4,
//                     backgroundColor: "primary.main"
//                   }
//                 }}>
//                   About Us
//                 </Typography>

//                 <Typography variant="body1" sx={{
//                   fontSize: { xs: "1.1rem", md: "1.25rem" },
//                   fontWeight: 400,
//                   lineHeight: 1.7,
//                   maxWidth: 600,
//                   mb: 4,
//                   color: "text.secondary"
//                 }}>
//                   Discover what makes us different in the financial world.
//                 </Typography>

//                 <Button
//                   variant="contained"
//                   size="large"

//                   sx={{
//                     px: 6,
//                     py: 1.5,
//                     fontSize: "1rem",
//                     fontWeight: 600,
//                     borderRadius: "8px"
//                   }}
//                 >
//                   Get Started
//                 </Button>
//               </Box>
//             </Box>
//             {/* Text Content */}


//             {/* Header Image */}

//           </Box>
//         </Box>
//       </Box>

//       {/* Fixed Background Images */}
//       <Box sx={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//         backgroundImage: `url(${bgImage1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         opacity: activeBg === 0 ? 1 : 0,
//         transition: "opacity 0.8s ease",
//       }} />

//       <Box sx={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//         backgroundImage: `url(${bgImage2})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         opacity: activeBg === 1 ? 1 : 0,
//         transition: "opacity 0.8s ease",
//       }} />

//       {/* Content Sections */}
//       {sections.map((section, index) => (
//         <Box
//           key={index}
//           sx={{
//             position: "relative",
//             height: section.height,
//             zIndex: 2,
//             backgroundColor: section.type === "color" ? section.bgValue : "transparent"
//           }}
//         >
//           <Container maxWidth="md" sx={{
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//             color: "white",
//             position: "relative",
//             py: { xs: 8, md: 10 }
//           }}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Typography variant="h2" sx={{
//                 mb: { xs: 3, md: 4 },
//                 fontSize: { xs: "2rem", md: "2.75rem" },
//                 fontWeight: 700,
//                 lineHeight: 1.3
//               }}>
//                 {section.title}
//               </Typography>
//               <Typography variant="body1" sx={{
//                 maxWidth: 800,
//                 mx: "auto",
//                 mb: { xs: 4, md: 6 },
//                 fontSize: { xs: "1.1rem", md: "1.25rem" },
//                 fontWeight: 400,
//                 lineHeight: 1.8
//               }}>
//                 {section.content}
//               </Typography>
//               <Button
//                 variant={section.type === "color" ? "contained" : "outlined"}
//                 size="large"
//                 sx={{
//                   px: 6,
//                   py: 1.5,
//                   fontSize: "1rem",
//                   fontWeight: 600,
//                   backgroundColor: section.type === "color" ? "white" : "transparent",
//                   color: section.type === "color" ? section.bgValue : "white",
//                   borderColor: "white",
//                   "&:hover": {
//                     backgroundColor: section.type === "color" ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)"
//                   }
//                 }}
//               >
//                 Learn More
//               </Button>
//             </motion.div>
//           </Container>

//           {section.type === "image" && (
//             <Box sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0,0,0,0.5)",
//               zIndex: 1
//             }} />
//           )}
//         </Box>
//       ))}

//       {/* Footer Spacer */}
//       <Box sx={{ height: "20vh", position: "relative", zIndex: 2 }} />
//     </Box>
//   );
// };

// export default AboutUsPage;




// "use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Background images
// const bgImage1 = "/1.jpg";
// const bgImage2 = "/2.jpg";
// const headerImage = "/header_about.png";


// const secondSection = () => {
//   return (
//     <Box sx={{
//       position: "relative",
//       width: "100%",
//       height: "100vh",
//       display: "flex",
//       alignItems: "flex-end",
//       justifyContent: { xs: "center", sm: "space-between" },
//       zIndex: 1 // Above the background image
//     }} >
//       <Container maxWidth="sm">
//         <Box sx={{
//           display: "flex",
//           width: "100%",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: { xs: "flex-start", md: "flex-start" },
//           justifyContent: "flex-start",
//           gap: { xs: 3, md: 4 },
//           mx: { xs: 0, md: 6 },
//           bgcolor: "black",
//           height: { xs: "auto", md: 250 },
//           minHeight: 250,
//           position: "relative",
//           overflow: "hidden"
//         }}>
//           {/* Text Content */}
//           <Box sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             textAlign: "left",
//             color: "white",
//             width: "100%",
//             zIndex: 2
//           }}>
//             <Typography variant="h2" sx={{
//               fontSize: { xs: "1.5rem", md: "1.15rem" },
//               fontWeight: 400,
//               mb: 2,
//               py: { xs: 2, md: 4 },
//               px: { xs: 2, md: 8 },
//               position: "relative",
//               width: "100%",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 left: 0,
//                 bottom: -8,
//                 width: 80,
//                 height: 4,

//                 backgroundColor: "primary.main"
//               }
//             }}>
//               Accounting & Taxation is our passion
//             </Typography>

//             <Typography variant="h1" sx={{
//               fontSize: { xs: "2.25rem", md: "4rem" }, // Slightly reduced sizes
//               fontWeight: 700,
//               mb: 2,
//               lineHeight: 1.1,
//               py: { xs: 2, md: 2 },
//               px: { xs: 2, md: 8 },
//               textTransform: "uppercase"
//             }}>
//               About Us
//             </Typography>

//             {/* <Typography variant="body1" sx={{
//               fontSize: { xs: "1rem", md: "1.1rem" },
//               fontWeight: 600,
//               lineHeight: 1.6,
//               mb: 3,
//               color: "rgba(255,255,255,0.9)",
//               maxWidth: "100%" // Allow text to flow naturally
//             }}>
//               Discover what makes us different in the financial world.
//             </Typography> */}
//           </Box>
//         </Box>
//       </Container>
//       <Container></Container>
//     </Box >
//   )
// }
// const sections = [
//   {
//     type: "color",
//     content: <secondSection />,
//     height: "100vh"
//   },
//   {
//     type: "image",
//     bgValue: bgImage1,
//     title: "Our Story",
//     content: "Founded in 2010, we began as a small team passionate about financial empowerment. Today, we serve clients across multiple countries.",
//     height: "100vh"
//   },
//   {
//     type: "color",
//     bgValue: "#EB1552",
//     type: "color",
//     content: <secondSection />,
//     height: "100vh"
//   },
//   {
//     type: "image",
//     bgValue: bgImage2,
//     title: "Our Values",
//     content: "Integrity, transparency, and client success drive everything we do. We build relationships based on trust and results.",
//     height: "100vh"
//   }
// ];

// const AboutUsPage = () => {
//   const [activeBg, setActiveBg] = React.useState(0);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Determine which background should be active based on scroll position
//       if (scrollPosition > windowHeight * 2) {
//         setActiveBg(1);
//       } else {
//         setActiveBg(0);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);




//   return (
//     <Box sx={{ position: "relative", overflowX: "hidden" }}>
//       {/* Header Image Background (behind navbar) */}
//       <Box sx={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         zIndex: activeBg ? -1 : 1, // Behind navbar
//       }}>
//         <Image
//           src={headerImage}
//           alt="About TAXVISER"
//           fill
//           style={{
//             objectFit: "cover",
//             objectPosition: "center"
//           }}
//           priority
//           quality={100}
//         />
//         <Box sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0,0,0,0.3)" // Dark overlay for better text contrast
//         }} />
//       </Box>

//       {/* Header Content (over the image) */}
//       <Box sx={{
//         position: "relative",
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         alignItems: "flex-end",
//         justifyContent: { xs: "center", sm: "space-between" },
//         zIndex: 1 // Above the background image
//       }}>
//         <Container maxWidth="sm">
//           <Box sx={{
//             display: "flex",
//             width: "100%",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: { xs: "flex-start", md: "flex-start" },
//             justifyContent: "flex-start",
//             gap: { xs: 3, md: 4 },
//             mx: { xs: 0, md: 6 },
//             bgcolor: "black",
//             height: { xs: "auto", md: 250 },
//             minHeight: 250,
//             position: "relative",
//             overflow: "hidden"
//           }}>
//             {/* Text Content */}
//             <Box sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               textAlign: "left",
//               color: "white",
//               width: "100%",
//               zIndex: 2
//             }}>
//               <Typography variant="h2" sx={{
//                 fontSize: { xs: "1.5rem", md: "1.15rem" },
//                 fontWeight: 400,
//                 mb: 2,
//                 py: { xs: 2, md: 4 },
//                 px: { xs: 2, md: 8 },
//                 position: "relative",
//                 width: "100%",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   left: 0,
//                   bottom: -8,
//                   width: 80,
//                   height: 4,

//                   backgroundColor: "primary.main"
//                 }
//               }}>
//                 Accounting & Taxation is our passion
//               </Typography>

//               <Typography variant="h1" sx={{
//                 fontSize: { xs: "2.25rem", md: "4rem" }, // Slightly reduced sizes
//                 fontWeight: 700,
//                 mb: 2,
//                 lineHeight: 1.1,
//                 py: { xs: 2, md: 2 },
//                 px: { xs: 2, md: 8 },
//                 textTransform: "uppercase"
//               }}>
//                 About Us
//               </Typography>

//               {/* <Typography variant="body1" sx={{
//                 fontSize: { xs: "1rem", md: "1.1rem" },
//                 fontWeight: 600,
//                 lineHeight: 1.6,
//                 mb: 3,
//                 color: "rgba(255,255,255,0.9)",
//                 maxWidth: "100%" // Allow text to flow naturally
//               }}>
//                 Discover what makes us different in the financial world.
//               </Typography> */}
//             </Box>
//           </Box>
//         </Container>
//         <Container></Container>
//       </Box>

//       {/* Fixed Background Images for other sections */}
//       <Box sx={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//         backgroundImage: `url(${bgImage1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         opacity: activeBg === 0 ? 1 : 0,
//         transition: "opacity 0.8s ease",
//       }} />

//       <Box sx={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//         backgroundImage: `url(${bgImage2})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         opacity: activeBg === 1 ? 1 : 0,
//         transition: "opacity 0.8s ease",
//       }} />

//       {/* Content Sections */}
//       {sections.map((section, index) => (
//         <Box
//           key={index}
//           sx={{
//             position: "relative",
//             height: section.height,
//             zIndex: 2,
//             backgroundColor: section.type === "color" ? section.bgValue : "transparent"
//           }}
//         >
//           <Container maxWidth="md" sx={{
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//             color: "white",
//             position: "relative",
//             py: { xs: 8, md: 10 }
//           }}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Typography variant="h2" sx={{
//                 mb: { xs: 3, md: 4 },
//                 fontSize: { xs: "2rem", md: "2.75rem" },
//                 fontWeight: 700,
//                 lineHeight: 1.3
//               }}>
//                 {section.title}
//               </Typography>
//               <Typography variant="body1" sx={{
//                 maxWidth: 800,
//                 mx: "auto",
//                 mb: { xs: 4, md: 6 },
//                 fontSize: { xs: "1.1rem", md: "1.25rem" },
//                 fontWeight: 400,
//                 lineHeight: 1.8
//               }}>
//                 {section.content}
//               </Typography>
//               <Button
//                 variant={section.type === "color" ? "contained" : "outlined"}
//                 size="large"
//                 sx={{
//                   px: 6,
//                   py: 1.5,
//                   fontSize: "1rem",
//                   fontWeight: 600,
//                   backgroundColor: section.type === "color" ? "white" : "transparent",
//                   color: section.type === "color" ? section.bgValue : "white",
//                   borderColor: "white",
//                   "&:hover": {
//                     backgroundColor: section.type === "color" ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)"
//                   }
//                 }}
//               >
//                 Learn More
//               </Button>
//             </motion.div>
//           </Container>

//           {section.type === "image" && (
//             <Box sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0,0,0,0.5)",
//               zIndex: 1
//             }} />
//           )}
//         </Box>
//       ))}

//       {/* Footer Spacer */}
//       <Box sx={{ height: "20vh", position: "relative", zIndex: 2 }} />
//     </Box>
//   );
// };

// export default AboutUsPage;



"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Image from "next/image";

// Background images
const bgImage1 = "/1.jpg";
const bgImage2 = "/2.jpg";
const headerImage = "/header_about.png";

const SecondSection = () => {
  return (
    <Box sx={{
      flex: 1,
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",

      alignItems: "flex-end",
      justifyContent: { xs: "center", sm: 'center' },
      zIndex: 1
    }}>
      <Box maxWidth="sm">
        <Box sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "center" },
          justifyContent: "center",
          gap: { xs: 3, md: 4 },
          mx: { xs: 0, md: 6 },
          bgcolor: "black",
          height: { xs: "auto", md: 250 },
          minHeight: 250,
          position: "relative",
          overflow: "hidden"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            color: "white",
            width: "100%",
            zIndex: 2
          }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: "1.5rem", md: "1.15rem" },
              fontWeight: 400,
              mb: 2,
              py: { xs: 2, md: 4 },
              px: { xs: 2, md: 8 },
              position: "relative",
              width: "100%",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -8,
                width: 80,
                height: 4,
                backgroundColor: "primary.main"
              }
            }}>
              Accounting & Taxation is our passion
            </Typography>

            <Typography variant="h1" sx={{
              fontSize: { xs: "2.25rem", md: "4rem" },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.1,
              py: { xs: 2, md: 2 },
              px: { xs: 2, md: 8 },
              textTransform: "uppercase"
            }}>
              About Us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        flex: 1
      }} ></Box>
    </Box>
  );
};

const ThirdSection = () => {
  return (
    <Box sx={{
      flex: 1,
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: { xs: "center" },
      mx: 'auto',
      zIndex: 1
    }}>
      <Box >
        <Box sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "flex-start" },
          justifyContent: "flex-start",
          px: { xs: 0, md: 6 },
          bgcolor: "#FFFFFF",
          height: "100vh",
          position: "relative",
          overflow: "hidden"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            color: "white",
            width: "100%",
            zIndex: 2
          }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: "1.5rem", md: "1.15rem" },
              fontWeight: 400,
              mb: 2,
              py: { xs: 2, md: 4 },
              px: { xs: 2, md: 8 },
              position: "relative",
              width: "100%",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -8,
                width: 80,
                height: 4,
                color: 'black',
                backgroundColor: "primary.main"
              }
            }}>
              Accounting & Taxation is our passion
            </Typography>

            <Typography variant="h1" sx={{
              fontSize: { xs: "2.25rem", md: "4rem" },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.1,
              py: { xs: 2, md: 2 },
              px: { xs: 2, md: 8 },
              color: 'black',
              textTransform: "uppercase"
            }}>
              About Us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          justifyContent: 'center', // centers both sides together
          alignItems: 'stretch',
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            flex: 1, // or any fixed width you want
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            p: 4, // padding inside the left box
          }}
        >
          {/* Left content goes here */}
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            flex: 1, // or whatever fixed width you want
            backgroundImage: 'url(/about/about-us-side.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            p: 4, // padding *inside* the right image box (for overlaid content)
            display: 'flex',
            alignItems: 'center', // center content vertically if needed
            justifyContent: 'center', // center content horizontally
            color: '#fff', // optional, in case you overlay text
          }}
        >
          {/* Optional: overlay content */}
          {/* <Typography>Text on image</Typography> */}
        </Box>
      </Box>


    </Box>

  );
};

const sections = [
  {
    type: "color",
    content: <ThirdSection />,
    height: "100vh"
  },
  {
    type: "image",
    bgValue: bgImage1,
    title: "Our Story",
    content: "Founded in 2010, we began as a small team passionate about financial empowerment. Today, we serve clients across multiple countries.",
    height: "100vh"
  },
  {
    type: "color",
    bgValue: "#EB1552",
    content: <SecondSection />,
    height: "100vh"
  },
  {
    type: "image",
    bgValue: bgImage2,
    title: "Our Values",
    content: "Integrity, transparency, and client success drive everything we do. We build relationships based on trust and results.",
    height: "100vh"
  }
];

const AboutUsPage = () => {
  const [activeBg, setActiveBg] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setActiveBg(scrollPosition > windowHeight * 2 ? 1 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ position: "relative", overflowX: "hidden" }}>
      {/* Header Image Background */}
      <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: "100vh",
        zIndex: activeBg ? -1 : 1,
      }}>
        <Image
          src={headerImage}
          alt="About TAXVISER"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
          priority
          quality={100}
        />
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)"
        }} />
      </Box>

      {/* Header Content */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        mx: "auto",
      }}>
        <SecondSection />
      </Box>

      {/* Fixed Background Images */}
      <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundImage: `url(${bgImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: activeBg === 0 ? 1 : 0,
        transition: "opacity 0.8s ease",
      }} />

      <Box sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundImage: `url(${bgImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: activeBg === 1 ? 1 : 0,
        transition: "opacity 0.8s ease",
      }} />

      {/* Content Sections */}
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            height: section.height,
            zIndex: 2,
            backgroundColor: section.type === "color" ? section.bgValue : "transparent"
          }}
        >
          {section.type === "image" ? (
            <Container maxWidth="md" sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              position: "relative",
              py: { xs: 8, md: 10 }
            }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h2" sx={{
                  mb: { xs: 3, md: 4 },
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  fontWeight: 700,
                  lineHeight: 1.3
                }}>
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{
                  maxWidth: 800,
                  mx: "auto",
                  mb: { xs: 4, md: 6 },
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 400,
                  lineHeight: 1.8
                }}>
                  {section.content}
                </Typography>
                <Button
                  variant={section.type === "color" ? "contained" : "outlined"}
                  size="large"
                  sx={{
                    px: 6,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    backgroundColor: section.type === "color" ? "white" : "transparent",
                    color: section.type === "color" ? section.bgValue : "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: section.type === "color" ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.1)"
                    }
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
              <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: -1
              }} />
            </Container>
          ) : (
            section.content
          )}
        </Box>
      ))}

      {/* Footer Spacer */}
      <Box sx={{ height: "20vh", position: "relative", zIndex: 2 }} />
    </Box>
  );
};

export default AboutUsPage;