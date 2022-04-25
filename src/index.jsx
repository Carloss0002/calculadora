import React from 'react';
import ReactDom from 'react-dom'
import App from './app'
import './index.css'

ReactDom.render(
   <div>
     <h1>Calculadora</h1>
     <App></App>
  </div>,
  document.getElementById('root')
)