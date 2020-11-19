import React from 'react';
import './App.css';
import Home from './componet/Home/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ViewRecipe from './componet/ViewRecipe/ViewRecipe'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/recipe/:label" component={ViewRecipe}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
