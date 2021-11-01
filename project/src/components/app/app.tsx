import MainPage from '../main/main';
import {Hotels} from '../../types/data';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from '../notfound/notfound';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';

type Props = {
  data: Hotels
}

function App({ data }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainPage data={data} />;
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path='/favorites'
          render={() => <Favorites />}
          authorization={false}
        />
        <Route path='/offer/:id' exact>
          <Property />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
