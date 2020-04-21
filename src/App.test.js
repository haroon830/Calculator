import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './App';

test('renders learn react link', () => {
  ReactDOM.render(<Calculator />);
  document.getElementById('root');
});