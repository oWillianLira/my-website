import { Link } from 'react-router-dom';
import Eumoji from '../Eumoji';

import Ballon from '../Ballon';
import Chat from '../Chat';
import main_me from '../../assets/img/main_me.png';

export default function Home() {
  return (
    <>
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
          <a href="#o">my PORTFOLIO</a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/128XDkeQmIZ5WHqU5ayQ3mUybW4NZdOJz/view?usp=sharing"
          >
            my RESUME
          </a>
          <Link to="/links/">my LINKS</Link>
        </Ballon>
      </Chat>

      <Eumoji>
        <img src={main_me} alt="A drawing of me" />
      </Eumoji>
    </>
  );
}
