import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Components/Home';
import Links from './Components/Links';

const Area = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <Area className="container mx-auto py-5">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/links/" component={Links} />
        </Switch>
      </Router>
    </Area>
  );
}

export default App;
