import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import LabelForm from './LabelForm'


describe('LabelForm', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<LabelForm/>)
  })

  it('should render label', () => {
    render(<LabelForm label='test'/>)
    screen.getByText('test')
  })
})
