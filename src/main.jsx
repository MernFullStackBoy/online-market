import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AddToCartProvider } from './components/context/Context.jsx'
import { CartProvider } from 'react-use-cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <AddToCartProvider>
        <App />
      </AddToCartProvider>
    </CartProvider>
  </React.StrictMode>,
)
