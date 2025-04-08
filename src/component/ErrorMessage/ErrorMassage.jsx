import styled from 'styled-components';

const Message = styled.p`
  text-align: center;
  color: red;
  font-size: 18px;
  margin-top: 20px;
`;

export const ErrorMessage = ({ message }) => {
  return <Message>{message}</Message>;
};