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