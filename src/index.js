import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RenderProvider } from './context/renderContext';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCheckSquare, 
  faCoffee, 
  faCartShopping, 
  faMagnifyingGlass,
  faChevronLeft,
  faChevronRight,  
} from '@fortawesome/free-solid-svg-icons'

library.add( 
  faCheckSquare, 
  faCoffee, 
  faCartShopping, 
  faMagnifyingGlass, 
  faChevronLeft, 
  faChevronRight
)

ReactDOM.render(
  <React.StrictMode>
    <RenderProvider>
    <App />
    </RenderProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
