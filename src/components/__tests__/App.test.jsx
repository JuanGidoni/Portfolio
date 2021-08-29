import { render } from '@testing-library/react';
import App from '../App';

test('renders App', () => {
  const AppRender = render(<App />);
  expect(AppRender).toBeTruthy();
});
