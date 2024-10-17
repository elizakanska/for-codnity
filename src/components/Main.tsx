import React from 'react';
import { Box, Grid2, Typography } from '@mui/material'; // Changed Grid2 to Grid
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#6A0572',
                padding: 4,
            }}
        >
            <Typography variant="h4" sx={{ color: 'lightpink', mb: 4 }}>
                Elīzas Kanskas Testa lapa
            </Typography>

            <Grid2 container spacing={4} justifyContent="center">
                {/* Link to ParMani */}
                <Grid2 size={{ xs: 6, md: 4 }}>
                    <Box
                        component={Link}
                        to="/par-mani"
                        sx={{
                            display: 'block',
                            textDecoration: 'none',
                            textAlign: 'center',
                            '&:hover': { opacity: 0.8 },
                        }}
                    >
                        <Box
                            component="img"
                            src={require('./imgs/par-mani.jpg')}
                            alt="Par Mani"
                            sx={{
                                width: '100%',
                                borderRadius: '8px',
                                mb: 2,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                        <Typography variant="h6" sx={{ color: 'lightpink' }}>
                            Par Mani
                        </Typography>
                    </Box>
                </Grid2>

                {/* Link to Dzivnieki */}
                <Grid2 size={{ xs: 6, md: 4 }}>
                    <Box
                        component={Link}
                        to="/dzivnieki"
                        sx={{
                            display: 'block',
                            textDecoration: 'none',
                            textAlign: 'center',
                            '&:hover': { opacity: 0.8 },
                        }}
                    >
                        <Box
                            component="img"
                            src={require('./imgs/dzivnieki.jpg')}
                            alt="Mani Dzīvnieki"
                            sx={{
                                width: '100%',
                                borderRadius: '8px',
                                mb: 2,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                        <Typography variant="h6" sx={{ color: 'lightpink' }}>
                            Mani Dzīvnieki
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default MainPage;
