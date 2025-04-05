import { assets } from '@/assets/assets';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{ 
      borderTop:'2px solid white',
      position: 'relative',
      zIndex: 1000,
      bgcolor: '#3C4E80',
      color: 'white'
    }}>
      <Box sx={{ 
        textAlign: 'center',
        pt: 8,
        pb: 4
      }}>
        <Image 
          src={assets.logo} 
          alt="Clear Horizon" 
          width={144}
          height={144}
          style={{ 
            margin: '0 auto 8px',
            filter: 'brightness(0) invert(1)' 
          }} 
        />
        
        <Box sx={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: 2,
          mb: 2
        }}>
          <Image 
            src={assets.mail_icon} 
            alt="Email" 
            width={24}
            height={24}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <Typography variant="body1">clearHorizon@gmail.com</Typography>
        </Box>
      </Box>

      <Box sx={{ 
        textAlign: 'center',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        mx: '10%',
        mt: 6,
        py: 6
      }}>
        <Box>
          <Typography variant="body2">© All rights reserved {new Date().getFullYear()}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Developed by <a 
              href="https://www.linkedin.com/in/softengrmuhammadnabeel/" 
              // href="https://www.linkedin.com/in/your-linkedin-username/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              MD NABEEL
            </a>
          </Typography>
        </Box>

        <Box component="ul" sx={{ 
          display: 'flex', 
          gap: 5, 
          mt: { xs: 4, sm: 0 },
          p: 0,
          m: 0,
          listStyle: 'none'
        }}>
          {['Instagram', 'LinkedIn', 'Twitter'].map((platform) => (
            <li key={platform}>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href='#'
                // href={`https://${platform.toLowerCase()}.com/`}
                style={{ 
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#7F8DAB'
                  }
                }}
              >
                <Typography variant="body2">{platform}</Typography>
              </a>
            </li>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
