import React from 'react';
import { Box, Typography } from '@mui/material';

function ParMani() {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#6A0572',
                maxWidth: '80%',
                margin: '20px auto 0',
            }}
        >
            <Typography variant="h4" sx={{ color: 'lightpink', mb: 4 }}>
                Par Mani: Elīza Kanska
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightpink', mb: 2 }}>
                Adrese: Ogres nov., Tomes pag., “Sniedzes”
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightpink', mb: 2 }}>
                Tel. nr.: 25672521
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightpink', mb: 2 }}>
                E-pasts: elizakanska@gmail.com
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightpink', mb: 2 }}>
                Es esmu Elīza Kanska, un esmu kaislīga par programmēšanu. Pārzinu JavaScript un šobrīd mācos Java un Python, ātri apgūstot jaunas tehnoloģijas. Vēlos radīt spēles, kas iegūst pasaules līmeņa atzinību. Pašlaik studēju Datorsistēmas bakalaura programmu Rīgas Tehniskajā universitātē.
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightpink', mb: 2 }}>
                Man ir vidējā izglītība Rīgas Centra humanitārajā vidusskolā ar programmēšanas un ekonomikas virzienu. Man ir arī pieredze zīmēšanā un datorgrafikā, kā arī esmu piedalījusies dažādos apmācību projektos, kas saistīti ar uzņēmējdarbību un videospēļu izstrādi.
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightpink', mb: 2 }}>
                Manā profesionālajā pieredzē ir iekļauta administrēšana kempingā “Sniedzes” un darbs kā Junior Analyst Accenture Latvia. Es runāju latviešu valodā un augstā līmenī angļu valodā.
            </Typography>
            <Typography variant="body1" sx={{ color: 'lightpink', mb: 2 }}>
                Brīvajā laikā es pavadu ar savām mīļajām sunenēm un kaķīti.
            </Typography>
        </Box>
    );
}

export default ParMani;
