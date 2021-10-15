import Ballon from '../Ballon';
import Chat from '../Chat';
import Eumoji from '../Eumoji';
import styled from 'styled-components';

import Me from '../../assets/img/contact_me.png';
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
    <>
      <Chat>
        <Back />

        <Ballon center delay={0.5}>
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
        <Ballon center delay={1.5}>
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
        <Ballon center delay={2}>
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
        <Ballon center delay={3}>
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

      <Eumoji>
        <img src={Me} alt="A drawing of me" />
      </Eumoji>
    </>
  );
}
