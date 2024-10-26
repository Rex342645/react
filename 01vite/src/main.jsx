import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },"Click me to visit google"
)

createRoot(document.getElementById('root')).render(
 
   reactElement
  
)
