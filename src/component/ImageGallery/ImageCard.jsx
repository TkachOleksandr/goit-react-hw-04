import styled from 'styled-components';

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.03);
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const ImageCard = ({ smallImg, alt, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Img src={smallImg} alt={alt} loading="lazy" />
    </Card>
  );
};
