import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Details } from '..'
import Subdetails from '../Subdetails'

describe('<Subdetails />', () => {
  test('pass valid title to test title input field', () => {
    render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    )
    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
  })

  test('render back  button', async () => {
    render(
      <BrowserRouter>
        <Subdetails />
      </BrowserRouter>
    )
    const button = screen.getByRole('button', { name: 'Back' })
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(button).toHaveAttribute('type', 'button')
  })

  // test('pass invalid email to test input value', () => {
  //   render(
  //     <BrowserRouter>
  //       <Authentication />
  //     </BrowserRouter>
  //   )

  //   expect(screen.getByTestId('error-msg')).toBeInTheDocument()
  //   expect(screen.queryByTestId('error-msg').textContent).toEqual('Please enter a valid email.')
  // })
})
