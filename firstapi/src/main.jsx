
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import mystore from './reduxstore/Reduxstorecreate.js';

createRoot(document.getElementById('root')).render(
     <BrowserRouter>
     <Provider store={mystore}>
          <App/>
     </Provider>
     
    
     </BrowserRouter>
    
 
)

