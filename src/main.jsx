import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, compose, } from 'redux'
import { Provider } from 'react-redux'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'
import './index.scss'
import { logger } from './middlewares'
import { store } from './slices'

const root = ReactDOM.createRoot(document.getElementById('root'))

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(logger)
)

const optionsAlert = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
  offset: '30px',
}


root.render(
  <React.StrictMode>

    <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...optionsAlert}>
      <App />
    </AlertProvider>

    </Provider>
  </React.StrictMode>
)
