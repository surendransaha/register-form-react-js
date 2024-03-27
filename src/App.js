// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
//import StendentForm from "./component/studentForm";
import RoutePath from './routes/routes';

function App() {
  return (

    

<Provider store={store}>
    <div>
      <RoutePath />
    </div>
    </Provider>



    
  );
}

export default App;
