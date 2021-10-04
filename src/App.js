import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemLists from "./components/ItemLists"
import ItemDetail from './components/ItemDetail';
import NewForm from './components/NewForm';
import EditForm from './components/EditForm';

function App() {
  
  useEffect(() => {
    document.title = "My Wishlist"
  }, [])

  return (
    <div className="App">
      <h1>Wishlist App</h1>
    <Router>
        <Switch>
        <Route exact path="/wishlist" component={ItemLists} />
        <Route exact path="/wishlist/new" render={(routerProps)=><NewForm {...routerProps} />}/> 
        <Route exact path="/wishlist/:id/edit" component={EditForm} />
        <Route exact path="/wishlist/:id" component={ItemDetail}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
