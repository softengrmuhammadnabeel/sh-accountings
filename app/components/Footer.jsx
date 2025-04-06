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

const footerLinks = {
  services: [
    'Year End Accounts', 'Tax Returns', 'Bookkeeping', 'TPAR', 'BAS Returns',
    'Payroll', 'Commercial and Business', 'Loans', 'Tax Savings', 'Company Tax',
    'Cash flow Projections', 'Online Accounts', 'Superannuation', 'Business Plans',
    'Employment Law', 'Debt Recovery', 'Capital Gains Tax', 'Audits', 'Cryptocurrency Tax',
  ],
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

  const renderSection = (title, items) => (
    isMobile ? (
      <Box sx={{ borderBottom: '3px solid #3498DB' }}>
        <Accordion
          elevation={0}
          square
          disableGutters
          sx={{
            bgcolor: '#3C4E80',
            color: 'white',
            boxShadow: 'none',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
            <Typography variant="h6">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {items.map((item) => (
              <Typography key={item} variant="body2" sx={{ mt: 1, lineHeight: '1rem' }}>
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
          sx={{ mb: 2, borderBottom: '2px solid #3498DB', display: 'inline-block' }}
        >
          {title}
        </Typography>
        {items.map((item) => (
          <Typography key={item} variant="body2" sx={{ mt: 1, lineHeight: '1rem' }}>
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
          bgcolor: '#3C4E80',
          position: 'relative',
          color: 'white',
          px: { xs: 2, md: 10 },
          pt: 6,
          pb: 2,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>{renderSection('Our Services', footerLinks.services)}</Grid>
          <Grid item xs={12} md={3}>{renderSection('Who We Help', footerLinks.help)}</Grid>
          <Grid item xs={12} md={3}>{renderSection('About Us', footerLinks.about)}</Grid>
          <Grid item xs={12} md={3}>{renderSection('Resources', footerLinks.resources)}</Grid>
        </Grid>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          position: "relative",
          bgcolor: 'white',
          width: '100%',
          pb: 2,
          pt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Link href="#" target="_blank" color="inherit" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaFacebook size={20} /></Link>
          <Link href="#" target="_blank" color="inherit" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaXTwitter size={20} /></Link>
          <Link href="#" target="_blank" color="inherit" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaLinkedin size={20} /></Link>
          <Link href="#" target="_blank" color="inherit" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaInstagram size={20} /></Link>
          <Link href="#" target="_blank" color="inherit" sx={{ bgcolor: '#00294f', borderRadius: "50%", p: '6px' }}><FaYoutube size={20} /></Link>
        </Box>

        <Typography variant="body2" sx={{ fontWeight: "semibold", mt: 1, color: '#00294f' }}>
          © {new Date().getFullYear()} All rights reserved | Developed by{' '}
          <Link
            href="https://www.linkedin.com/in/softengrmuhammadnabeel/"
            target="_blank"
            rel="noopener"
            sx={{ fontWeight: "bold", color: '#00294f', textDecoration: 'underline' }}
          >
            MD NABEEL
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
