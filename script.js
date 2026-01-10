function setLanguage(lang) {
    const frElements = document.querySelectorAll('.lang-fr');
    const enElements = document.querySelectorAll('.lang-en');

    if (lang === 'fr') {
        frElements.forEach(el => el.style.display = 'inline-block');
        enElements.forEach(el => el.style.display = 'none');
    } else {
        frElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'inline-block');
    }
}

function toggleDetails(id) {
    const el = document.getElementById(id);
    if (el) {
        // Alterne l'affichage entre 'none' et 'block'
        if (el.style.display === 'block' || el.classList.contains('active')) {
            el.style.display = 'none';
            el.classList.remove('active');
        } else {
            el.style.display = 'block';
            el.classList.add('active');
        }
    }
}

// Initialisation au chargement
window.onload = () => {
    setLanguage('fr');
};