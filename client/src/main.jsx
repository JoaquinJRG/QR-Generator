import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { InputValueProvider } from './context/InputValue.jsx'
import { ColorProvider } from './context/Color.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <InputValueProvider>
    <ColorProvider>
      <App />
    </ColorProvider>
  </InputValueProvider>
)
