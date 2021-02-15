import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './pages/Landing';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;