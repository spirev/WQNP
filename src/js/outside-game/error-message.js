const errorMessage = document.getElementById('errorMessage');
console.log(errorMessage);

export const changeErrorMessage = (errorText) => {
    errorMessage.style.display = 'flex';
    errorMessage.innerHTML = errorText;
}

export const gameUnsupported = () => {
    errorMessage.style.display = 'flex';
    errorMessage.innerHTML = 'Votre navigateur ne supporte pas les fonctionnalités requises pour cette application :(';
}