import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#5a0261',
                color: 'lightpink',
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    © {new Date().getFullYear()} Elīza Kanska
                </Typography>

                <Box>
                    <IconButton href="https://www.facebook.com/profile.php?id=100006630435262&sk=about_overview" target="_blank" aria-label="Facebook" color="secondary">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton href="https://x.com/Eliza_SmileyCat" target="_blank" aria-label="Twitter" color="secondary">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/eliza-kanska-a8b3a5317/" target="_blank" aria-label="LinkedIn" color="secondary">
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
