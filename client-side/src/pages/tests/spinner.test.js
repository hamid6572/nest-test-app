import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Details } from '..'
import Spinner from '../Spinner'

describe('<Spinner />', () => {
  test('render spinner input', () => {
    render(
      <BrowserRouter>
        <Spinner />
      </BrowserRouter>
    )
    const inputEl = screen.getByTestId('three-dots-loading')
    expect(inputEl).toBeInTheDocument()
  })
})
