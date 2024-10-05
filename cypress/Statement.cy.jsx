import React from 'react'
import Statement from '../src/Components/Statement'

describe('<Statement />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Statement />)
  })
})