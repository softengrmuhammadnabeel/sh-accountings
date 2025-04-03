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
        pl: 10
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
          px: { xs: 2, md: 0 }
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
                left: { xs: 0, md: -60 },
                bottom: -8,
                width: 80,
                height: 4,
                backgroundColor: "primary.main"
              }
            }}>
              Accounting & Taxation is our passion
            </Typography>

            <Typography variant="h1" sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              lineHeight: 1.1,
              py: { xs: 0, md: 2 },
              px: { xs: 0, md: 4 },
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
const sections = [
  {
    type: "color",
    content: <ThirdSection />,
    height: "auto"
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