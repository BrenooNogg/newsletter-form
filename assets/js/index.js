const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const inputFields = document.querySelectorAll('.field');
    const nameField = inputFields[0];
    const emailField = inputFields[1];

    const isNameEmpty = nameField.value.trim() === '';
    const isEmailEmpty = emailField.value.trim() === '';

    // Remove mensagens de erro existentes
    const existingErrorMessages = document.querySelectorAll('.error-message');
    existingErrorMessages.forEach((errorMessage) => errorMessage.remove());

    if (isNameEmpty) {
        console.log('Erro: O campo Nome está vazio.');
        const erroName = document.createElement('p');
        erroName.textContent ='Preencha esse campo';
        erroName.className = 'error-message';
        nameField.insertAdjacentElement('afterend', erroName);
    }
    
    if (isEmailEmpty) {
        console.log('Erro: O campo E-mail está vazio.');
        const erroEmail = document.createElement('p');
        erroEmail.textContent ='Preencha esse campo';
        erroEmail.className = 'error-message';
        emailField.insertAdjacentElement('afterend', erroEmail);
    }
    
    if (isNameEmpty || isEmailEmpty) {
        console.log('Erro: Preencha todos os campos.');
    } else {
        console.log('Sucesso: Ambos os campos estão preenchidos.');
    }
});
