import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import CharacterDetails from './CharacterDetails'

describe('CharacterDetails', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<CharacterDetails />)
  })

  it('should render the correct labels according to the parameters', () => {
    render(
      <CharacterDetails
        alive={true}
        hogwartsStudent={true}
        hogwartsStaff={false}
        handleClickFavorite={() => {}}
        favorite={true}
      />
    )
    screen.getByText('VIVO')
    screen.getByText('ESTUDIANTE')
  })
})
