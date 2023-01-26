import { cleanup, } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { render } from '../utils/test-utils'
import CharacterAddModal from './CharacterAddModal'


describe('CharacterAddModal', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<CharacterAddModal/>)
  })
})
