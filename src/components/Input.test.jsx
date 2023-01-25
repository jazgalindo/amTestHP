import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, test } from 'vitest'
import Input from './Input'


describe('Input', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Input/>)
  })

  it('should render the correct labels according to the parameters', () => {
    render(<Input label='LabelTest'/>)
    screen.getByText('LabelTest')
  })

  test('The input field and its props', () => {
    render(<Input name='name' type='text' />)
    const input = document.querySelector(
      'input'
    );
    
    expect(input).toBeTruthy()
      expect(input?.textContent).toBe('')

    if (input) {
      input.textContent = 'HELLO'
      expect(input.textContent).toBe('HELLO')
      expect(input.type).toBe('text')
      expect(input.name).toBe('name')
      fireEvent.change(input, {
        target: {
          value: 'hola mundo'
        }
      })
      expect(input.value).toBe('hola mundo')
    }
  });

})
