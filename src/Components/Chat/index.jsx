import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colors } from '../../GlobalStyles';

const appear = keyframes`
  0% {
    opacity: 0;
    left: -200px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
`;

const Message = styled.div`
  width: fit-content;
  min-width: 350px;
  max-width: 100%;
  background: ${colors.blue};
  box-shadow: -4px 4px 4px -2px rgba(0, 0, 0, 0.3);
  border-radius: 12px 12px 12px 0px;
  padding: 10px 25px;
  margin-bottom: 15px;

  animation-name: ${appear};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  opacity: 0;

  p {
    font-size: 17px;
    color: #fff;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export default function Ballon({ children, delay }) {
  return <Message style={{ animationDelay: delay + 's' }}>{children}</Message>;
}
