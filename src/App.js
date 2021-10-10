import styled from 'styled-components';

import main_me from './assets/img/main_me.png';
import Home from './Components/Home';

const Area = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > picture img {
    width: 200px;
    margin: 40px auto -20px;
  }
`;

function App() {
  return (
    <Area className="container mx-auto py-5">
      <Home />
      <picture className="">
        <img src={main_me} alt="A drawing of me" />
      </picture>
    </Area>
  );
}

export default App;
