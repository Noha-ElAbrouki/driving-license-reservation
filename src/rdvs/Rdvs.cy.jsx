import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rdvs from './Rdvs';

describe('<Rdvs />', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');

    cy.mount(
      <Router>
        <Rdvs />
      </Router>
    );
  });
  it('desplays the rdvs page', () => {
    cy.contains('Auto ecole 1');
    cy.contains('Buto ecole 2');
    cy.contains('Euto ecole 3');
    cy.contains('Duto ecole 4');
    cy.contains('Cuto ecole 6');

    cy.compareSnapshot();
  });
});
