import { BrowserRouter as Browser } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';

const Routes = (props: any) => {
  return(
    <Browser>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Browser>
  );
  
};

export default Routes;
