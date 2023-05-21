import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

describe('<Home />', () => {
  test('render title input', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const inputEl = screen.getByTestId('id')
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toHaveAttribute('type', 'number')
  })

  test('pass valid title to test title input field', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
  })

  test('render send submit button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const button = screen.getByTestId('sendbutton')
    expect(button).toBeInTheDocument()
    userEvent.click(button)
    expect(button).toHaveAttribute('type', 'submit')
  })

  test('render posts button', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const button = screen.getByRole('button', { name: 'Push Posts' })
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(button).toHaveAttribute('type', 'button')
  })
})
