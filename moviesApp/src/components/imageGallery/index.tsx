import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface ImageComponentProps {
  src: string;
  alt: string;
  key?: string;
}


export default function WovenImageList({ src, alt, key }: ImageComponentProps) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>

        <ImageListItem key={key}>
          <img
            src={src}
            alt={alt}
          />
        </ImageListItem>
    </ImageList>
  );
}