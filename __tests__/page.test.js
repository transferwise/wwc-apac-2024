import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
 
describe('Page', () => {
  it('renders the buttons', () => {
    render(<Page />)
 
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => expect(button).toBeInTheDocument())
  })
})