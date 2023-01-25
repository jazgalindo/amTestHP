import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import DataLabel from './DataLabel'


describe('DataLabel', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<DataLabel/>)
  })

  it('should render the correct labels according to the parameters', () => {
    render(<DataLabel data='dataTest' content='contentTest'/>)
    screen.getByText('dataTest:')
    screen.getByText('contentTest')
  })

  it('should render the correct labels according to the parameters', () => {
    render(<DataLabel data='dataTest'/>)
    screen.getByText('dataTest:')
    screen.getByText('Desconocido')
  })
})
