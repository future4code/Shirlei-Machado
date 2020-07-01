import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import ListTripsPage from "../ListTripsPage";


function Router(props) {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/Login">
                    <LoginPage/>
                </Route>

                <Route exact path="/trips">
                    <ListTripsPage/>
                </Route>

            </Switch>

        </BrowserRouter>
      
        
    </div>
  );
}

export default Router;
