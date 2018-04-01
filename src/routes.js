import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from './components/welcome/welcome';

import displayInfo from '././components/displayInfo/displayInfo';
import card from '././components/card/card';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome}/>

          <Route path="/displayinfo" component={displayInfo}/>

      </Switch>
  </BrowserRouter>
);

export default Routes;