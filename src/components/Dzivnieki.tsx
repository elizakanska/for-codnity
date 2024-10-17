import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

const itemData = [
    {
        img: require('./imgs/pukse.jpg'),
        title: 'Pukse',
        rows: 3,
        cols: 3,
    },
    {
        img: require('./imgs/rozi1.jpg'),
        title: 'Rozija',
        rows: 2,
    },
    {
        img: require('./imgs/rozi2.jpg'),
        title: 'Rozija',
        rows: 2,
    },
    {
        img: require('./imgs/stella1.jpg'),
        title: 'Stella',
        cols: 2,
    },
    {
        img: require('./imgs/son1.jpg'),
        title: 'Titāns',
        cols: 2,
    },
    {
        img: require('./imgs/stella2.jpg'),
        title: 'Stella',
        rows: 2,
        cols: 2,
    },
    {
        img: require('./imgs/son2.jpg'),
        title: 'Titāns',
        rows: 2,
    },
    {
        img: require('./imgs/stella3.jpg'),
        title: 'Stella',
        cols: 2,
    },
    {
        img: require('./imgs/son3.jpg'),
        title: 'Titāns',
        rows: 2,
        cols: 2,
    },
    {
        img: require('./imgs/rozi3.jpg'),
        title: 'Rozija',
        cols: 2,
    },
    {
        img: require('./imgs/pega.jpg'),
        title: 'Pega',
        rows: 2,
    },
    {
        img: require('./imgs/sasa.jpg'),
        title: 'Saša',
        cols: 2,
    },
];


export default function QuiltedImageList() {
    const allImagesPresent = itemData.every(item => item.img);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
            {allImagesPresent ? (
                <ImageList
                    sx={{ width: '90%', height: 'auto' }}
                    variant="quilted"
                    cols={5}
                    rowHeight={200}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            ) : (
                <Typography variant="h5" sx={{ color: 'lightpink', textAlign: 'center' }}>
                    Some images are missing. Please check your data.
                </Typography>
            )}
        </Box>
    );
}
