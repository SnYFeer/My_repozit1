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