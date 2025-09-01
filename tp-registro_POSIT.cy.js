describe('Registro positivo', ()=> {

it('Datos Correctos', () => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
cy.get('[data-cy="input-nombres"]').type('Maria')
cy.get('[data-cy="input-apellido"]').type('Perez')
cy.get('[data-cy="input-telefono"]').type('1145634682') 
cy.get('[data-cy="input-dni"]').type('41982751') 
cy.get('input[data-cy="select-provincia"]').type('Corrientes');
    cy.contains('Corrientes').click()
cy.get('input[data-cy="select-localidad"]').type('Alvear');
    cy.contains('Alvear').click()
cy.contains('dd').type('22');
cy.contains('mm').type('06'); 
cy.contains('aaaa').type('1998');
cy.get('[data-cy="input-email"]').type('mariap1@gmail.com')
cy.get('[data-cy="input-confirmar-email"]').type('mariap1@gmail.com')
cy.get('[data-cy="input-password"]').eq(0).type('Maria123..')
cy.get('[data-cy="input-repetir-password"]').type('Maria123..')
 // Enviar formulario
    cy.get('[data-cy="btn-registrarse"]').click();

    })
 })