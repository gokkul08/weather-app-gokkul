import React from 'react'
import { render, fireEvent } from '../test-utils'
import { Home } from '../../pages/index'

global.fetch = jest.fn(() => Promise.resolve());

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

it('Expect fetch request to get weather data', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { getByText } = render(<Home />);
  
    fireEvent.click(getByText('Get Weather'));
    expect(fetch).toHaveBeenCalled();
  });