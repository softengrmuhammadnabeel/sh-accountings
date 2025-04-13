// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Box,
//   Grid,
//   Link,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const footerLinks = {
//   services: [
//     'Year End Accounts', 'Tax Returns', 'Bookkeeping', 'TPAR', 'BAS Returns',
//     'Payroll', 'Commercial and Business', 'Loans', 'Tax Savings', 'Company Tax',
//     'Cash flow Projections', 'Online Accounts', 'Superannuation', 'Business Plans',
//     'Employment Law', 'Debt Recovery', 'Capital Gains Tax', 'Audits', 'Cryptocurrency Tax',
//   ],
//   help: [
//     'Start Ups', 'Sole Traders', 'Partnerships', 'Companies', 'Contractors',
//     'LSL Contractors', 'Landlords', 'Selling Your Business', 'Employed Individuals',
//     'Primary producers',
//   ],
//   about: [
//     'Fixed Fee Pricing', 'Right For You', 'Switching Is Easy',
//     'Buy Local Campaign', 'Careers and Vacancies',
//   ],
//   resources: [
//     'News', 'Articles', 'Questions And Answers', 'Customer Services',
//     'Register For Newsletter', 'Join Our Franchise', 'Guides',
//   ],
// };

// const Footer = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const renderSection = (title, items) => (
//     isMobile ? (
//       <Box sx={{ borderBottom: '3px solid #3498DB',  }}>
//         <Accordion
//           elevation={0}
//           square
//           disableGutters
//           sx={{
//             bgcolor: '#3C4E80',
//             color: 'white',
//             boxShadow: 'none',
//           }}
//         >
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
//             <Typography variant="h6">{title}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             {items.map((item) => (
//               <Typography key={item} variant="body2" sx={{ mt: 1, lineHeight: '1rem' }}>
//                 {item}
//               </Typography>
//             ))}
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     ) : (
//       <Box >
//         <Typography
//           variant="h6"
//           sx={{ mb: 2, borderBottom: '2px solid #3498DB', display: 'inline-block' }}
//         >
//           {title}
//         </Typography>
//         {items.map((item) => (
//           <Typography key={item} variant="body2" sx={{ mt: 1, lineHeight: '1rem' }}>
//             {item}
//           </Typography>
//         ))}
//       </Box>
//     )
//   );

//   return (
//     <>
//       <Box
//         sx={{
//           bgcolor: '#3C4E80',
//           position: 'relative',
//           color: 'white',
//           px: { xs: 2, md: 10 },
//           pt: 6,
//           pb: 2,
//           borderTop:'3px solid #3498DB'
//         }}
//       >
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={3}>{renderSection('Our Services', footerLinks.services)}</Grid>
//           <Grid item xs={12} md={3}>{renderSection('Who We Help', footerLinks.help)}</Grid>
//           <Grid item xs={12} md={3}>{renderSection('About Us', footerLinks.about)}</Grid>
//           <Grid item xs={12} md={3}>{renderSection('Resources', footerLinks.resources)}</Grid>
//         </Grid>
//       </Box>

//       {/* Footer Bottom */}
//       <Box
//         sx={{
//           borderTop: '1px solid rgba(255,255,255,0.2)',
//           position: "relative",
//           bgcolor: 'white',
//           width: '100%',
//           pb: 2,
//           pt: 4,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center'
//         }}
//       >
//         <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//           <Link href="#" target="_blank" color="#ffff" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaFacebook size={20} /></Link>
//           <Link href="#" target="_blank" color="#ffff" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaXTwitter size={20} /></Link>
//           <Link href="#" target="_blank" color="#ffff" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaLinkedin size={20} /></Link>
//           <Link href="#" target="_blank" color="#ffff" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaInstagram size={20} /></Link>
//           <Link href="#" target="_blank" color="#ffff" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaYoutube size={20} /></Link>
//         </Box>

//         <Typography variant="body2" sx={{ fontWeight: "semibold", mt: 1, color: '#00294f' }}>
//           © {new Date().getFullYear()} All rights reserved | Developed by{' '}
//           <Link
//             href="https://www.linkedin.com/in/softengrmuhammadnabeel/"
//             target="_blank"
//             rel="noopener"
//             sx={{ fontWeight: "bold", color: '#00294f', textDecoration: 'underline' }}
//           >
//             MD NABEEL
//           </Link>
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default Footer;


import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import React, { useState, useEffect } from "react";


const footerLinks = {
  // services: [
  //   'Year End Accounts', 'Tax Returns', 'Bookkeeping', 'TPAR', 'BAS Returns',
  //   'Payroll', 'Commercial and Business', 'Loans', 'Tax Savings', 'Company Tax',
  //   'Cash flow Projections', 'Online Accounts', 'Superannuation', 'Business Plans',
  //   'Employment Law', 'Debt Recovery', 'Capital Gains Tax', 'Audits', 'Cryptocurrency Tax',
  // ],
  help: [
    'Start Ups', 'Sole Traders', 'Partnerships', 'Companies', 'Contractors',
    'LSL Contractors', 'Landlords', 'Selling Your Business', 'Employed Individuals',
    'Primary producers',
  ],
  about: [
    'Fixed Fee Pricing', 'Right For You', 'Switching Is Easy',
    'Buy Local Campaign', 'Careers and Vacancies',
  ],
  resources: [
    'News', 'Articles', 'Questions And Answers', 'Customer Services',
    'Register For Newsletter', 'Join Our Franchise', 'Guides',
  ],
};

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const fetchservices = async () => {
    const response = await fetch("/api/services");
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    return response.json();
  };

  const checkCacheAndFetch = async () => {
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem("services");
    const lastFetched = localStorage.getItem("lastFetchedservices");

    // If cached data exists and was fetched less than 5 minutes ago, use it
    if (cachedData && lastFetched) {
      const now = new Date().getTime();
      const timeDifference = now - parseInt(lastFetched, 10);

      if (timeDifference < 0.5 * 60 * 1000) { // 5 minutes
        setServices(JSON.parse(cachedData));
        setLoading(false);
        return;
      }
    }

    // If no valid cache, fetch from API
    try {
      const data = await fetchservices();
      setServices(data);

      // Save data and timestamp to localStorage
      localStorage.setItem("services", JSON.stringify(data));
      localStorage.setItem("lastFetchedservices", new Date().getTime().toString());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkCacheAndFetch();
  }, []);

  const renderSection = (title, items) => (
    isMobile ? (
      <Box sx={{ borderBottom: '3px solid #3498DB', mb: 2 }}>
        <Accordion
          elevation={0}
          square
          disableGutters
          sx={{
            bgcolor: '#FFF',
            color: 'white',
            boxShadow: 'none',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
            <Typography variant="h6" color="black">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {items.map((item) => (
              <Typography key={item} variant="body2" color="black" sx={{ mt: 1, lineHeight: '1.5rem' }}>
                {item}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    ) : (
      <Box>
        <Typography
          variant="h6"
          sx={{ mb: 2, borderBottom: '2px solid #3498DB', color: "black", display: 'inline-block' }}
        >
          {title}
        </Typography>
        {items.map((item) => (
          <Typography key={item} color="black" variant="body2" sx={{ mt: 1, lineHeight: '1.5rem' }}>
            {item}
          </Typography>
        ))}
      </Box>
    )
  );

  return (
    <>
      <Box
        sx={{
          bgcolor: 'white',
          // bgcolor: '#3C4E80',
          position: 'relative',
          color: 'black',
          px: { xs: 3, md: 10 },
          pt: 8,
          pb: 6,
          zIndex: 1,
          borderTop: '4px solid #3498DB',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box mb={2}>
              <Image
                src="/footer/footerfull.png"
                alt="Company Logo"
                width={140}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Empowering individuals and businesses through expert tax, accounting, and financial guidance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>{renderSection('Our Services', services.map(service => service.title.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\uFE00-\uFE0F]|\u200D|\u2600-\u26FF|\u2700-\u27BF)/g, '')))}</Grid>
          <Grid item xs={12} md={3}>{renderSection('Who We Help', footerLinks.help)}</Grid>
          <Grid item xs={12} md={3}>{renderSection('Resources', footerLinks.resources)}</Grid>
        </Grid>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          bgcolor: '#7F8DAB',
          position: 'relative',
          // bgcolor: '#00294f',
          width: '100%',
          py: 4,
          px: 2,
          textAlign: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          {[FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaYoutube].map((Icon, index) => (
            <Link key={index} href="#" target="_blank" sx={{
              bgcolor: '#ffffff',
              borderRadius: "50%",
              p: '6px',
              transition: '0.3s',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: 'lightblue',
                color: "#fff",
                transform: 'scale(1.1)',
              }
            }}>
              <Icon size={20} color="#00294f" />
            </Link>
          ))}
        </Box>

        <Typography variant="body2" sx={{ color: 'white' }}>
          © {new Date().getFullYear()} All rights reserved | {' '}
          <Link
            href="#"
            target="_blank"
            rel="noopener"
            sx={{ color: '#00294F', fontWeight: 600 }}
          >
            CLEAR HORIZON ACCOUNTANTS
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
