"use client";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Box, Typography, Paper, Grid, TextField, Slider } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
const bgImage1 = "/about/fourth.jpg";
// const bgImage1 = "/1.jpg";
const bgImage2 = "/about/fourth.jpg";
const headerImage = "/about/fourth.jpg";

const SecondSection = () => {
  return (
    <Box sx={{
      position: "relative",
      width: "45%",
      height: "100vh",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      zIndex: 1
    }}>
      <Box sx={{
        width: "100%",
        maxWidth: "1200px",
        mb: { xs: 0, md: 0 },
        pl: { xs: 2, md: 10 },
      }}>
        <Box sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          gap: { xs: 3, md: 4 },
          mx: "auto",
          bgcolor: "white",
          height: { xs: "auto", md: 100 },
          minHeight: 250,
          position: "relative",
          overflow: "hidden",
          px: { xs: 2, sm: 2, md: 2 }
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            color: "black",
            width: "100%",
            maxWidth: { md: "80%" },
            zIndex: 2
          }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.15rem" },
              fontWeight: 400,
              mb: 2,
              py: { xs: 2, md: 4 },
              // px: { xs: 0, md: 4 },
              position: "relative",
              width: "100%",
              "&::after": {
                content: '""',
                position: "absolute",
                left: { xs: 0, md: -70 },
                bottom: -8,
                width: 80,
                height: 4,
                backgroundColor: "primary.main"
              }
            }}>
              Accounting & Taxation is our passion
            </Typography>

            <Typography variant="h1" sx={{
              fontSize: { xs: "1rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              py: { xs: 0, md: 2 },
              px: { xs: 0, md: 0 },
              textTransform: "uppercase"
            }}>
              About Us
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const ThirdSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        bgcolor: "white",
        overflow: "hidden",
        px: { xs: 3, md: 8 },
        pb: { xs: 4, md: 8 },
      }}
    >
      {/* Left Content Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          pr: { md: 4 },
          pl: { md: 10 },
          maxWidth: { md: "50%" }
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.15rem" },
            fontWeight: 400,
            mb: 5,
            py: { xs: 2, md: 4 },
            color: 'black',
            // px: { xs: 0, md: 4 },
            position: "relative",
            width: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              left: { xs: 0, md: -60 },
              bottom: -8,
              width: 80,
              height: 4,
              backgroundColor: "primary.main"
            }
          }}
        >
          Let us tell you about
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
            fontWeight: 700,
            lineHeight: 1.1,
            mb: 4,
            textTransform: "uppercase",
            color: 'black'
          }}
        >
          ACCOUNTING &<br />BOOKKEEPING<br />SERVICES
        </Typography>

        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "text.primary",
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            We are a team of qualified Chartered Accountants with a passion for
            precision, problem-solving, and empowering businesses through financial
            clarity. With extensive experience in accounting, financial reporting,
            and bookkeeping, we bring a unique blend of technical expertise and
            real-world insight to support your financial journey.
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              color: "text.primary",
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            Our team has worked in both corporate and public practice environments,
            allowing us to understand and address the challenges faced by small
            businesses, growing enterprises, and SMSFs. We go beyond processing
            numbers—we identify opportunities, find solutions, and help you stay ahead.
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              color: "text.primary",
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            At the core of everything we do is dedication. We are committed to our
            clients' success, providing reliable, responsive, and tailored financial
            solutions. By simplifying complex financial matters, we enable you to focus
            on growing your business with confidence.
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              color: "text.primary",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            Most importantly, we equip you with clear, accurate, and timely financial
            information, ensuring that you make informed decisions at every stage of
            your business. Let us take care of your finances—so you can focus on what
            matters most.
          </Typography>
        </Box>

      </Box>

      {/* Right Image Section */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          height: { xs: "300px", md: "500px" },
          width: "100%",
          maxWidth: { md: "50%" },
          mt: { xs: 4, md: 0 },
          ml: { md: 4 }
        }}
      >
        <Image
          src="/about/about-us-side.webp"
          alt="About Us"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
          priority
        />

        {/* Red Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "50%",
            backgroundColor: "rgba(255, 0, 0, 0.6)",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />
      </Box>
    </Box>
  );
};

const MotionBox = motion(Box);

const features = [
  {
    title: "Accuracy",
    description:
      "ClearHorizon provides precise assistance for accounting and taxation services with unparalleled accuracy. Our team of experts is dedicated to ensuring that your financial goals are met with the utmost attention to detail and professionalism.",
  },
  {
    title: "Compliance",
    description:
      "Recognizing the paramount significance of adhering to ATO taxation compliance and regulations, we are committed to delivering our clients top-notch services that exude professionalism and expertise.",
  },
  {
    title: "Approachable",
    description:
      "At ClearHorizon, we are approachable and committed to providing exceptional service and support. Whether it's a question, concern, or our clients requiring assistance, we are here to help.",
  },
  {
    title: "Cost-effective",
    description:
      "At ClearHorizon, we offer cost-effective solutions to our clients understanding the importance of financial management. Our reputation is built on our commitment to providing service with the best possible advice.",
  },
  {
    title: "Community-based",
    description:
      "We are a local community-based accounting & taxation firm that prides itself on its adaptability and inclusivity. As a proud member of the Whittlesea community, we provide a family-friendly atmosphere to feel right at home.",
  },
];

const FourthSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        background: 'transparent',
        height: '1000px',
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // background: "linear-gradient(135deg, #ffffff 60%, #f1f1f1 100%)",
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "#777", mb: 1 }}
        >
          Tax experts at your doorstep.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#111",
            mb: 2,
          }}
        >
          Many reasons to choose ClearHorizon...
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#3C4E80",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 8 },
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {features.map((item, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
          >
            <ChevronRightIcon sx={{ color: "white", fontSize: 28, mt: 0.5 }} />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 0.5, color: "white" }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "white" }}>
                {item.description}
              </Typography>
            </Box>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};

const AppointmentBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976D2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '2rem 1rem', md: '4rem 8rem' },
        gap: 5,

        borderRadius: 0,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: { xs: '1.2rem', md: '2rem' },
        }}
      >
        For more information book an appointment
      </Typography>

      <Link href="/contact-us" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: '999px',
            padding: '0.8rem 2rem',
            backgroundColor: '#fff',
            color: 'black',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#f1f1f1',
            },
          }}
        >
          Book Now
        </Button>
      </Link>
    </Box>
  );
};


const ROIAccountingSystem = () => {
  // State to hold investment, return, and calculated ROI
  const [investment, setInvestment] = useState(1000);
  const [returnOnInvestment, setReturnOnInvestment] = useState(1500);
  const [roi, setRoi] = useState(null);
  const [error, setError] = useState('');

  // Function to calculate ROI
  const calculateROI = () => {
    const inv = parseFloat(investment);
    const roiValue = parseFloat(returnOnInvestment);

    if (!inv || !roiValue || inv <= 0 || roiValue <= 0) {
      setError('Please enter valid positive numbers for both fields.');
      setRoi(null);
      return;
    }

    setError('');
    const calculatedROI = ((roiValue - inv) / inv) * 100; // ROI formula
    setRoi(calculatedROI.toFixed(2)); // Showing only 2 decimal points
  };

  // Reset the form
  const resetForm = () => {
    setInvestment(1000);
    setReturnOnInvestment(1500);
    setRoi(null);
    setError('');
  };

  return (
    <Box sx={{ width: '100%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{
        padding: 4,
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '700px',
        backgroundColor: '#FFFFFF',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': { transform: 'scale(1.02)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }
      }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#2B4A76', fontWeight: 'bold' }}>
            ROI Accounting System
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ color: '#555', lineHeight: 1.6 }}>
            Easily calculate your Return on Investment (ROI). Adjust the sliders below to set your investment amount and expected return.
          </Typography>

          {/* Investment Slider */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h6" color="#2B4A76">Investment Amount: ${investment}</Typography>
              <Slider
                value={investment}
                onChange={(e, newValue) => setInvestment(newValue)}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value}`}
                min={500}
                max={10000}
                step={50}
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  '& .MuiSlider-thumb': { backgroundColor: '#2B4A76' },
                  '& .MuiSlider-rail': { backgroundColor: '#2B4A76' },
                  '& .MuiSlider-track': { backgroundColor: '#2B4A76' },
                }}
              />
            </Grid>

            {/* Return on Investment Slider */}
            <Grid item xs={12}>
              <Typography variant="h6" color="#2B4A76">Return on Investment: ${returnOnInvestment}</Typography>
              <Slider
                value={returnOnInvestment}
                onChange={(e, newValue) => setReturnOnInvestment(newValue)}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value}`}
                min={500}
                max={15000}
                step={50}
                sx={{
                  width: '100%',
                  marginBottom: 3,
                  '& .MuiSlider-thumb': { backgroundColor: '#2B4A76' },
                  '& .MuiSlider-rail': { backgroundColor: '#2B4A76' },
                  '& .MuiSlider-track': { backgroundColor: '#2B4A76' },
                }}
              />
            </Grid>
          </Grid>

          {/* Calculate Button */}
          <Box sx={{ marginTop: 3, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={calculateROI}
              sx={{
                backgroundColor: "#7F8DAB",
                fontSize: "1rem",
                fontWeight: 600,
                px: 4,
                py: 1,
                border: '2px solid white',
                borderRadius: "50px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#3C4E80"
                }
              }}
            >
              Calculate ROI
            </Button>
          </Box>

          {roi !== null && (
            <Box sx={{ marginTop: 4, textAlign: 'center' }}>
              <Typography variant="h5" color="#3C4E80" sx={{ fontWeight: 'bold' }}>
                Your ROI: <span style={{ color: roi < 0 ? 'red' : 'black' }}>{roi} %</span>
              </Typography>
            </Box>
          )}

          {error && (
            <Box sx={{ marginTop: 2, textAlign: 'center' }}>
              <Typography variant="body1" color="error" sx={{ fontWeight: 'bold' }}>
                {error}
              </Typography>
            </Box>
          )}

          <Box sx={{ marginTop: 3, textAlign: 'center' }}>

            <Button
              variant="contained"
              size="small"
              onClick={resetForm}
              sx={{
                backgroundColor: "#7F8DAB",
                fontSize: "0.8rem",
                fontWeight: 600,
                px: 4,
                py: 1,
                border: '2px solid white',
                borderRadius: "50px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#3C4E80"
                }
              }}
            >
              Reset            </Button>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

const sections = [
  {
    type: "color",
    content: <ThirdSection />,
    height: "auto"
  },
  {
    type: "color",
    content: <FourthSection />,
    height: "auto"
  },
  // {
  //   type: "color",
  //   bgValue: "#EB1552",
  //   content: <SecondSection />,
  //   height: "100vh"
  // },
  {
    type: "color",
    bgValue: "#EB1552",
    content: <AppointmentBanner />,
    height: "auto"
  },
  {
    type: "image",
    bgValue: bgImage2,
    content: <ROIAccountingSystem />,
    height: "auto"
  },
  // {
  //   type: "image",
  //   bgValue: bgImage2,
  //   title: "Page in under-development",
  //   content: "",
  //   height: "100vh"
  // }
];

const AboutUsPage = () => {
  const [activeBg, setActiveBg] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setActiveBg(scrollPosition > windowHeight * 0.5 ? 1 : 0);
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
          // backgroundColor: "rgba(0,0,0,0.1)"
        }} />
      </Box>

      {/* Header Content */}
      <Box sx={{
        position: "relative",
        width: "100%",
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
                style={{ width: "100%" }}
              >
                <Typography variant="h2" sx={{
                  mb: { xs: 3, md: 4 },
                  fontSize: { xs: "1.8rem", sm: "2.25rem", md: "2.75rem" },
                  fontWeight: 700,
                  lineHeight: 1.3,
                  px: 2
                }}>
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{
                  maxWidth: 800,
                  mx: "auto",
                  mb: { xs: 4, md: 6 },
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  fontWeight: 400,
                  lineHeight: 1.8,
                  px: 3
                }}>
                  {section.content}
                </Typography>
                {/* <Button
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
                </Button> */}
              </motion.div>
              <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                // backgroundColor: "rgba(0,0,0,0.5)",
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