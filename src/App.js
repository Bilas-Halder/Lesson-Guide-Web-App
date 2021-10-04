import logo from './logo.svg';
import './App.css';
import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useData from './Hooks/useData';
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import NotFound from './Components/NotFound/NotFound';

const DataContext = createContext([]);
export { DataContext };

function App() {
  const [data, setData] = useData();

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/' exact><Home></Home></Route>
            <Route path='/home' exact><Home></Home></Route>
            <Route path='/courses' ><Courses></Courses></Route>
            <Route path='/about' ><About></About></Route>
            <Route path='/*' ><NotFound></NotFound></Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;

// use context api
// const data = useContext(DataContext);