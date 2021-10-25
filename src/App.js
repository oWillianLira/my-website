import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Components/Home';
import Links from './Components/Links';
import Portfolio from './Components/Portfolio';
import NotFound from './NotFound';

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
          <Route path="/portfolio/" component={Portfolio} />
          <Route path="/links/" component={Links} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Area>
  );
}

export default App;
