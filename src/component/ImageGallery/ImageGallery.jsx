import styled from 'styled-components';
import { ImageCard } from './ImageCard';

const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 24px;
  list-style: none;
  margin: 0;
`;

const Item = styled.li`
  cursor: pointer;
`;

export const ImageGallery = ({ images, onImageClick }) => {
  if (!images.length) return null;

  return (
    <Gallery>
      {images.map((img) => (
        <Item key={img.id}>
          <ImageCard
            smallImg={img.urls.small}
            alt={img.alt_description}
            fullImg={img.urls.regular}
            onClick={() => onImageClick(img.urls.regular)}
          />
        </Item>
      ))}
    </Gallery>
  );
};
