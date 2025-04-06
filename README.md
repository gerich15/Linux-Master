# 🐧 Linux Master

![GitHub last commit](https://img.shields.io/github/last-commit/yourname/linux-master?color=00ff00&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-brightgreen)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)

**Терминально-стилизованный образовательный ресурс** о Linux для русскоязычных пользователей.  
Сайт с анимациями в стиле CLI, интерактивными элементами и актуальной информацией о дистрибутивах.

[![Demo](https://imgur.com/your-screenshot-link.png)](https://your-site-url.com)

## 🌟 Особенности

- 🖥️ **Терминальный интерфейс** с анимацией печатающегося текста
- 📚 Каталог дистрибутивов с характеристиками
- 🛠️ Раздел для разработчиков с примерами скриптов
- 💻 Рекомендации по Linux-совместимому оборудованию
- 📱 Полностью адаптивный дизайн

## 🚀 Быстрый старт

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourname/linux-master.git
```
2. Откройте в браузере:
```bash
cd linux-master && xdg-open index.html
```

## 🧩 Структура проекта

```
linux-master/
├── css/
│   ├── main.css          # Основные стили
│   └── animations.css    # Анимации терминала
├── js/
│   ├── main.js           # Логика сайта
│   └── terminal.js       # Эффекты CLI
├── img/                  # Логотипы дистрибутивов
├── index.html            # Главная страница
└── README.md             # Этот файл
```

## 🛠 Технологии

- **HTML5** + **CSS3** с Flexbox/Grid
- **JavaScript** (ES6) для интерактивности
- **Font Awesome** для иконок
- **Google Fonts** (Courier New для терминала)

## 📌 Пример кода (анимация терминала)

```javascript
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}
```

## 📚 Ресурсы

- [Официальная документация Linux](https://www.kernel.org/doc/html/latest/)
- [Markdown-разметка](https://www.markdownguide.org/)

## 👥 Авторы

- [Ваше Имя](https://github.com/yourname)  
  [![Telegram](https://img.shields.io/badge/-Telegram-0088cc?logo=telegram)](https://t.me/yourprofile)

## 📜 Лицензия

MIT © 2023 [Linux Master](https://github.com/yourname/linux-master)
