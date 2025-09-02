describe('Registros negativos', ()=> {

//FORMULARIO VACIO

 it('Campos vacios', () => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="btn-registrarse"]').click();
     });

    
     
// CONTRASEÑAS DIFERENTES

it('Contraseña diferente', () => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
cy.get('[data-cy="input-nombres"]').type('Jose')
cy.get('[data-cy="input-apellido"]').type('Perez')
cy.get('[data-cy="input-telefono"]').type('1145634123') 
cy.get('[data-cy="input-dni"]').type('25982751') 
cy.get('input[data-cy="select-provincia"]').type('Chubut');
    cy.contains('Chubut').click()
cy.get('input[data-cy="select-localidad"]').type('Acceso Norte');
    cy.contains('Acceso Norte').click()
cy.contains('dd').type('02');
cy.contains('mm').type('12'); 
cy.contains('aaaa').type('1988');
cy.get('[data-cy="input-email"]').type('josep@gmail.com')
cy.get('[data-cy="input-confirmar-email"]').type('josep@gmail.com')
cy.get('[data-cy="input-password"]').eq(0).type('Jose1234..') // Contraseña diferente
cy.get('[data-cy="input-repetir-password"]').type('Jose4567..')
 // Enviar formulario
    cy.get('[data-cy="btn-registrarse"]').click();

    })



// NOMBRE CON NUMEROS

it('Nombre con numeros', () => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
cy.get('[data-cy="input-nombres"]').type('3m1l1an0') //Nombre con numeros
cy.get('[data-cy="input-apellido"]').type('Perez')
cy.get('[data-cy="input-telefono"]').type('1145634123') 
cy.get('[data-cy="input-dni"]').type('23982751') 
cy.get('input[data-cy="select-provincia"]').type('Catamarca');
    cy.contains('Catamarca').click()
cy.get('input[data-cy="select-localidad"]').type('Amadores');
    cy.contains('Amadores').click()
cy.contains('dd').type('02');
cy.contains('mm').type('11'); 
cy.contains('aaaa').type('2000');
cy.get('[data-cy="input-email"]').type('emiliano1@gmail.com')
cy.get('[data-cy="input-confirmar-email"]').type('emiliano1@gmail.com')
cy.get('[data-cy="input-password"]').eq(0).type('Emiliano123..') 
cy.get('[data-cy="input-repetir-password"]').type('Emiliano123..')
 // Enviar formulario
    cy.get('[data-cy="btn-registrarse"]').click();

    })




// EMAIL NO VALIDO

it('Email invalido', () => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
cy.get('[data-cy="input-nombres"]').type('Carlos')
cy.get('[data-cy="input-apellido"]').type('Yepez')
cy.get('[data-cy="input-telefono"]').type('1130634123') 
cy.get('[data-cy="input-dni"]').type('28982751') 
cy.get('input[data-cy="select-provincia"]').type('Formosa');
    cy.contains('Formosa').click()
cy.get('input[data-cy="select-localidad"]').type('Clorinda');
    cy.contains('Clorinda').click()
cy.contains('dd').type('30');
cy.contains('mm').type('03'); 
cy.contains('aaaa').type('1992');
cy.get('[data-cy="input-email"]').type('carlitosgmail.com') //Email no valido
cy.get('[data-cy="input-confirmar-email"]').type('carlitos@gmailcom')
cy.get('[data-cy="input-password"]').eq(0).type('Carl1234..') 
cy.get('[data-cy="input-repetir-password"]').type('Carl1234..')
 // Enviar formulario
    cy.get('[data-cy="btn-registrarse"]').click();

    })




 })