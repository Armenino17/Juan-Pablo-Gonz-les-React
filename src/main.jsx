import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saludo from "./saludo.jsx";
import Contador from './useState.jsx';

const App = () =>{
  return(
    <div>
       <Saludo name="Juan" lastName="Gonzalez" idioma="en"/>
       <Contador/>
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)