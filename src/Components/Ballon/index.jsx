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
  min-width: 300px;
  max-width: 100%;
  display: grid;
  background: ${colors.primary};
  box-shadow: -4px 4px 4px -2px rgba(0, 0, 0, 0.3);
  border-radius: 18px 12px 12px 0px;
  padding: 10px 20px;
  margin-bottom: 10px;

  animation-name: ${appear};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  opacity: 0;
  color: #fff;
  font-size: 1.1rem;

  * {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  a {
    width: fit-content;
    font-size: 0.9em;
    letter-spacing: 1px;
    margin-bottom: 10px;
    background-color: ${colors.btn}cc;
    padding: 5px 15px;
    border-radius: 8px;
    transition: 250ms;
    display: flex;
    align-items: center;

    &:first-of-type {
      margin-top: 20px;
    }
    &:hover {
      background-color: ${colors.btn};
    }
  }
`;

export default function Ballon({ children, delay, center }) {
  return (
    <Message style={{ animationDelay: delay + 's' }} className={center ? 'ml-auto mr-auto' : null}>
      {children}
    </Message>
  );
}
