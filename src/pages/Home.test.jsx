import { cleanup, render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { afterEach, describe, it, test } from 'vitest'
import { store } from '../slices'
import HomePage from './Home'

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>)

describe('HomaPage', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<HomePage />)
  })
})
