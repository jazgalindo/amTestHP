import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import FavoriteButton from './FavoriteButton'


describe('FavoriteButton', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<FavoriteButton/>)
  })
})
