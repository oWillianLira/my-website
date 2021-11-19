import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/Links';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="container mx-auto py-5 flex flex-col justify-between min-h-screen">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/" component={Portfolio} />
          <Route path="/links/" component={Links} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
