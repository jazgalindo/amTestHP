import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import FavoriteIcon from './FavoriteIcon'


describe('FavoriteIcon', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<FavoriteIcon/>)
  })

})
