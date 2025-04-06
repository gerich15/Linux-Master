// Анимация счетчиков статистики
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-value');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }

        function updateCount() {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Элементы
    const modal = document.getElementById('registerModal');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtn = document.querySelector('.close-btn');
    const loginLink = document.getElementById('loginLink');

    // Открытие модального окна
    registerBtn.addEventListener('click', function () {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Блокируем скролл
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Закрытие при клике вне окна
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Переход к авторизации
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'none';
        // Здесь можно добавить открытие окна авторизации
        alert('Форма входа будет здесь');
    });

    // Обработка формы
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Валидация
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        // Здесь будет отправка формы
        alert('Регистрация успешна!');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
});

document.querySelectorAll('.dev-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.dev-tab.active').classList.remove('active');
        tab.classList.add('active');
        // Здесь код переключения контента
    });
});