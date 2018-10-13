import validator from 'validator';

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();

  // nome
  const nomeInput = document.getElementById('nome-js').value;
  const nomeVal = validator.isAlpha(nomeInput);
  //cognome
  const cognomeInput = document.getElementById('cognome-js').value;
  const cognomeVal = validator.isAlpha(cognomeInput);
  //telefono
  let teleInput = document.getElementById('tele-js').value;
  let pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
  let teleVal = pattern.test(teleInput);
  // cell
  let cellInput = document.getElementById('cell-js').value;
  let cellVal = validator.isMobilePhone(cellInput, ['it-IT']);
  //email
  let emailInput = document.getElementById('email-js').value;
  let emailVal = validator.isEmail(emailInput);
  //checkbox
  let checkbox = document.getElementById('cbx').checked;

  //
  if (nomeVal && cognomeVal && emailVal && checkbox && (cellVal || teleVal)) {
    // remove errors
    document.getElementById('nome-js').style.boxShadow = 'none';
    document.getElementById('cognome-js').style.boxShadow = 'none';
    document.getElementById('email-js').style.boxShadow = 'none';
    document.getElementById('cbx').style.boxShadow = 'none';
    //
    document.querySelector('.form__error-msg').innerHTML = '';
    document.querySelector('.form__label').style.color = 'inherit';
    document.querySelector('.form__sucess-msg').innerHTML =
      '<h4>Tutto a posto! Grazie!</h4>';

    document.querySelector('.form__btn').style.padding = 0;

    const phoneError = document.querySelector('.form__inputs__error');
    phoneError.innerHTML = '';

    phoneError.style.margin = '0';
  } else {
    //
    // main error
    document.querySelector('.form__error-msg').innerHTML =
      '<h4>Completare i campi contrassegnati in rosso</h4>';

    document.querySelector('.form__btn').style.padding = 0;

    document.querySelector('.form__label').style.color = 'red';

    // conditionals
    if (nomeInput.length < 2 && !nomeVal) {
      document.getElementById('nome-js').style.boxShadow =
        '0 0 0 0.2rem rgba(213, 0, 0, 0.25)';
    }

    if (cognomeInput.length < 3 && !cognomeVal) {
      document.getElementById('cognome-js').style.boxShadow =
        '0 0 0 0.2rem rgba(213, 0, 0, 0.25)';
    }

    if (!teleVal || !cellVal) {
      const phoneError = document.querySelector('.form__inputs__error');

      phoneError.innerHTML =
        'Almeno uno dei due campi telefono deve essere compilato obbligatoriamente';

      phoneError.style.margin = '-7px';
    }

    if (!emailVal) {
      document.getElementById('email-js').style.boxShadow =
        '0 0 0 0.2rem rgba(213, 0, 0, 0.25)';
    }

    if (!checkbox) {
      document.getElementById('cbx').style.boxShadow =
        '0 0 0 0.2rem rgba(213, 0, 0, 0.25)';
    }
  }
});
