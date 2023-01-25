import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import Avatar from './Avatar'

describe('Avatar', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Avatar/>)
  })

  it('should render img', () => {
    render(<Avatar />)
    screen.getByRole('img')
  })
})
