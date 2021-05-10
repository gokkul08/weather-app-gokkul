import React from 'react'
import { render } from '../test-utils'
import { About } from '../../pages/about'

describe('About page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<About />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})