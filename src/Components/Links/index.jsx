import Ballon from '../Ballon';
import Chat from '../Chat';
import styled from 'styled-components';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail, SiTelegram } from 'react-icons/si';
import { Link } from 'react-router-dom';

const A = styled.a`
  min-width: 200px;
  justify-content: center;
  margin: 0 auto;
  padding: 8px !important;
`;

export default function Links() {
  return (
    <Chat>
      <Ballon delay={0.5}>
        <A href="https://www.linkedin.com/in/owillianlira/" className="my-1" target="_blank" rel="noopener noreferrer">
          <BsLinkedin /> Linkedin
        </A>
      </Ballon>
      <Ballon delay={1.5}>
        <A href="https://github.com/oWillianLira" className="my-1" target="_blank" rel="noopener noreferrer">
          <BsGithub /> GitHub
        </A>
      </Ballon>
      <Ballon delay={2}>
        <A href="mailto:owillianlira@gmail.com" className="my-1" target="_blank" rel="noopener noreferrer">
          <SiGmail /> E-Mail
        </A>
      </Ballon>
      <Ballon delay={3}>
        <A href="https://t.me/owillianlira" className="my-1" target="_blank" rel="noopener noreferrer">
          <SiTelegram /> Telegram
        </A>
      </Ballon>
      <Ballon delay={3.5}>
        <Link to="/">Back to home</Link>
      </Ballon>
    </Chat>
  );
}
