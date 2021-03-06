import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { InfoPage } from './pages/InfoPage';
import { TodosPage } from './pages/TodosPage';



const App: React.FC = () => {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container"> 
      <Switch>
        <Route component={TodosPage} path='/' exact/>
        <Route component={InfoPage} path='/about'/>
      </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;