import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';


const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products">
                    <Catalog />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
