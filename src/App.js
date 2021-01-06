import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Users from './component/users'
import Adduser from './component/adduser'
import Viewuser from './component/viewuser'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />          
          <Route path="/adduser" component={Adduser} />
          <Route path="/:id" component={Viewuser} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
