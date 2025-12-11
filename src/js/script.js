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
        // On supporte deux modes :
        // - Desktop : ancienne logique (display:block)
        // - Mobile : ajout d'une classe `open` pour jouer l'animation translateY
        const isMobile = window.matchMedia('(max-width: 1179px)').matches;
        if (isMobile) {
            // Ensure modal is present then add open class to trigger animation
            modal.style.display = 'block';
            // Force reflow to ensure transition from translateY(100%) -> 0
            // (helps on some mobiles)
            void modal.offsetWidth;
            modal.classList.add('open');
        } else {
            modal.style.display = "block";
        }
    });
});

// Ferme quand on clique sur la croix
modals.forEach(modal => {
    const closeBtn = modal.querySelector(".close");
    if (!closeBtn) return;
    closeBtn.addEventListener("click", () => {
        const isMobile = window.matchMedia('(max-width: 1179px)').matches;
        if (isMobile && modal.classList.contains('open')) {
            // remove open to trigger slide-down animation, then hide after transition
            modal.classList.remove('open');
            const onTransitionEnd = (e) => {
                if (e.propertyName !== 'transform') return;
                modal.style.display = 'none';
                modal.removeEventListener('transitionend', onTransitionEnd);
            };
            modal.addEventListener('transitionend', onTransitionEnd);
        } else {
            modal.style.display = 'none';
        }
    });
});
