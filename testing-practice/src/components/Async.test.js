import Async from './Async'
import { screen, render} from '@testing-library/react'

describe('Async Component', () => {
  test('renders post if request succeeds', async () => {
    render(<Async />)

    const listItemElements = await screen.findAllByRole('listitem') //returns promise;
    expect(listItemElements).not.toHaveLength(0);
  })
})