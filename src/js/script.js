////////////////////////////////////////////////// CAROUSEL ////////////////////////////////////////////////////////////////////////////////////

// Sélectionne les éléments du slider
const items = document.querySelectorAll('.carousel__item--detail__vehicule');
const navItems = document.querySelectorAll('.carousel__nav-item');

// Fonction pour activer une image
function setActiveSlide(index) {
    // Reset : enlève les classes actives
    items.forEach(item => item.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));

    // Ajoute la classe active sur le bon élément
    items[index].classList.add('active');
    navItems[index].classList.add('active');
}

// Ajoute les événements sur chaque miniature
navItems.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        setActiveSlide(index);
    });
});

// Active la première image au chargement
setActiveSlide(0);

////////////////////////////////////////////////// MODAL ////////////////////////////////////////////////////////////////////////////////////
// Sélectionne tous les boutons
const buttons = document.querySelectorAll(".option-buttons__btn");

// Sélectionne toutes les modals
const modals = document.querySelectorAll(".modal");

// Ouvre la bonne modal
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.modal;
        const modal = document.getElementById(targetId);
        modal.style.display = "block";
    });
});

// Ferme quand on clique sur la croix
modals.forEach(modal => {
    modal.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none";
    });
});
