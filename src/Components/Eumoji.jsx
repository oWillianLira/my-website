import styled from 'styled-components';
import { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Image = styled.picture`
  width: 200px;
  margin: 40px auto -1.25rem;
  animation: ${appear} forwards 1s;
`;

export default function Eumoji({ children }) {
  return <Image>{children}</Image>;
}
