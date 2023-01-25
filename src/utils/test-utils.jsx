import { Provider } from 'react-redux'
import { store } from '../slices'
import { render as rtlRender } from '@testing-library/react'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { OPTIONS_ALERT } from './constans'

export const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...OPTIONS_ALERT}>
        {component}
      </AlertProvider>
    </Provider>
  )
