function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const strengthCheckboxes = document.querySelectorAll('input[type="checkbox"][name="strength"]:checked');
    
    let charset = '';
    
    if (strengthCheckboxes.length !== 1) {
        alert('Please select one strength checkbox.');
        return;
    }
    
    strengthCheckboxes.forEach(checkbox => {
        switch (checkbox.value) {
            case 'strong':
                charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                break;
            case 'weak':
                charset += 'abcdefghijklmnopqrstuvwxyz0123456789';
                break;
            case 'average':
                charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                break;
            case 'funny':
                charset += '!@#$%^&*()_+-={}[]:;"\'<>,.?/';
                break;
        }
    });
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    document.getElementById('password').value = password;
}

