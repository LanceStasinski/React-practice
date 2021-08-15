import { Route, Switch } from 'react-router-dom'

import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import AllQuotes from './pages/AllQuotes';


function App() {
  return (
    <Switch>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
