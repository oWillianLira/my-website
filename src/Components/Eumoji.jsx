import styled from 'styled-components';
import { appear } from '../GlobalStyles';

const Image = styled.picture`
  width: 90%;
  max-width: 500px;
  margin: 40px auto -1.25rem;
  animation: ${appear} forwards 2s;
  display: flex;
  justify-content: center;
  img {
    width: 200px;
  }
`;

export default function Eumoji({ children }) {
  return <Image>{children}</Image>;
}
