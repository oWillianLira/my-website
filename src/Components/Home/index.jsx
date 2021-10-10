import styled from 'styled-components';
import Ballon from '../Chat';

const Chat = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  max-width: 550px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <Chat>
      <Ballon delay={0.8}>
        <p>Hello! Good to see you here...</p>
      </Ballon>
      <Ballon delay={2}>
        <p>
          If you don't know, I'm Willian Lira <br />
          Front-End Web Developer and this is my website
        </p>
      </Ballon>
      <Ballon delay={4}>
        <p>And here you can see:</p>
        <a href="#">My Portfolio</a>
        <a href="#">My Resume</a>
        <a href="#">My links</a>
      </Ballon>
    </Chat>
  );
}
