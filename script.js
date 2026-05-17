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
    button.classList.toggle('open');
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

document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const heroContainer = document.querySelector('.hero-container');

    navLinks.forEach(link => {
        link.addEventListener('click', async function(e) {
            e.preventDefault();

            const page = this.getAttribute('data-page');

            if (!page) return;

            try {
                // Показываем загрузку (по желанию)
                heroContainer.style.opacity = '0.4';

                const response = await fetch(`contents/${page}-content.html`);
                const html = await response.text();

                // Заменяем содержимое hero-container
                heroContainer.innerHTML = html;

                // Плавное появление
                setTimeout(() => {
                    heroContainer.style.transition = 'opacity 0.4s';
                    heroContainer.style.opacity = '1';
                }, 50);

            } catch (error) {
                console.error('Ошибка загрузки:', error);
                heroContainer.innerHTML = `
                    <div class="container">
                        <h2 style="color:red; text-align:center;">Ошибка загрузки контента</h2>
                    </div>`;
            }
        });
    });
});





const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Создаём частицы (пепел/снег/пиксели)
let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,  // размер
    speedY: Math.random() * 0.5 + 0.2, // скорость падения
    speedX: Math.random() * 0.4 - 0.2, // дрейф в стороны
    opacity: Math.random() * 0.6 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    // Рисуем пиксель (квадрат как в Minecraft)
    ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
    ctx.fillRect(p.x, p.y, p.size, p.size);

    // Двигаем вниз
    p.y += p.speedY;
    p.x += p.speedX;

    // Если вышел за экран — возвращаем наверх
    if (p.y > canvas.height) {
      p.y = -5;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();