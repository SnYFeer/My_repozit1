// Находим кнопку и само меню
const button = document.querySelector('.three_line-svg');
const navMenu = document.querySelector('.left-nav');

// Добавляем обработчик клика на кнопку
button.addEventListener('click', function(event) {
    // Отменяем стандартное поведение ссылки (переход наверх страницы)
    event.preventDefault();
    
    // Переключаем класс 'open'
    // Если он есть — убираем (закрываем), если нет — добавляем (открываем)
    navMenu.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', () => {

    // === Переход для пунктов меню ===
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            smoothTransition(targetUrl);
        });
    });

    // === Переход для кнопок Войти и Регистрация ===
    const authButtons = document.querySelectorAll('.btn-login, .btn-regestration');
    authButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetUrl = this.getAttribute('data-url');
            if (targetUrl) {
                smoothTransition(targetUrl);
            }
        });
    });

    // === Функция плавного перехода ===
    function smoothTransition(url) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0;
            z-index: 9999;
            transition: opacity 0.5s ease;
        `;
        
        document.body.appendChild(overlay);

        // Запускаем затемнение
        setTimeout(() => {
            overlay.style.opacity = '0.95';
        }, 10);

        // Переходим на новую страницу
        setTimeout(() => {
            window.location.href = url;
        }, 520);
    }

    // Восстановление прозрачности при загрузке страницы
    document.body.style.transition = 'opacity 0.4s';
    document.body.style.opacity = '1';
});