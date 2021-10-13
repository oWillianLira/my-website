import Ballon from '../Ballon';
import Chat from '../Chat';
import styled from 'styled-components';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail, SiTelegram } from 'react-icons/si';
import Back from '../Back';

const A = styled.a`
  min-width: 200px;
  margin: 0 auto;
  padding: 8px 20px !important;

  svg {
    margin-right: 10px;
  }
`;

export default function Links() {
  return (
    <Chat>
      <Back />

      <Ballon delay={0.5}>
        <A
          href="https://www.linkedin.com/in/owillianlira/"
          title="in/owillianlira"
          className="my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin /> Linkedin
        </A>
      </Ballon>
      <Ballon delay={1.5}>
        <A
          href="https://github.com/oWillianLira"
          title="github.com/oWillianLira"
          className="my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub /> GitHub
        </A>
      </Ballon>
      <Ballon delay={2}>
        <A
          href="mailto:owillianlira@gmail.com"
          title="owillianlira@gmail.com"
          className="my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail /> E-Mail
        </A>
      </Ballon>
      <Ballon delay={3}>
        <A
          href="https://t.me/owillianlira"
          title="t.me/owillianlira"
          className="my-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTelegram /> Telegram
        </A>
      </Ballon>
    </Chat>
  );
}
