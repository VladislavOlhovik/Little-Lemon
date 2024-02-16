import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from "../../src/App";

const AppWithContext = () => {
  return(
    <HashRouter>
      <App />
    </HashRouter>
  )
}

describe('App', () => {
  it('renders headline', () => {
    render(<AppWithContext />);
    const headline = screen.getByText(/Little Lemo/);
    expect(headline).toBeInTheDocument();
  });
});