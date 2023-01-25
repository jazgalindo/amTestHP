import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, compose, } from 'redux'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'
import './index.scss'
import { logger } from './middlewares'
import { store } from './slices'
import { OPTIONS_ALERT } from './utils/constans'

const root = ReactDOM.createRoot(document.getElementById('root'))

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(logger)
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...OPTIONS_ALERT}>
      <App />
    </AlertProvider>

    </Provider>
  </React.StrictMode>
)
