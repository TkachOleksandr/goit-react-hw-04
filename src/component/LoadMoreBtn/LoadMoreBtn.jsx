
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 24px;
  font-size: 16px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bcc;
  }
`;

export const LoadMoreBtn = ({ onClick }) => {
  return <Button onClick={onClick}>Load more</Button>;
};