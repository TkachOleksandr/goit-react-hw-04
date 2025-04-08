import { DotLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Loader = () => (
  <LoaderWrapper>
    <DotLoader color="#36d7b7" size={60} />
  </LoaderWrapper>
);