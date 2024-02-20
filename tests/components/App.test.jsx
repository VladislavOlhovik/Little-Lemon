import { render, screen } from '@testing-library/react';
import App from "../../src/App";
import {withContext} from '../utils'

const AppWithContext = withContext(App)

describe('App', () => {
  it('renders headline', () => {
    render(<AppWithContext />);
    const headline = screen.getByText(/Little Lemo/);
    expect(headline).toBeInTheDocument();
  });
});