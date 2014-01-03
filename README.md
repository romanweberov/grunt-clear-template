# MarkupClearTemplate

#Возможности
* imagemin - сжатие изображений;
* autoprefixer - препроцессор;
* connect - сервер для статики;
* copy - копирование файлов;
* watch - Мониторинг изменений файлов, с запуском препроцессоров.

#Установка
1. Создаем папку для шаблона в ~/.grunt-init/TEMPLATE-NAME (MacOS)
2. Копируем файлы шаблона в папку
3. Создаем папку для проекта /Users/rweberov/PROJECT-NAME
4. `cd /Users/rweberov/PROJECT-NAME`
5. Копируем файлы шаблона в папку проекта, устанавливаем свою версию гранта и плагинов в проект, запускаем грант `grunt-init TEMPLATE-NAME && npm install grunt-contrib-copy grunt-contrib-imagemin grunt-contrib-connect grunt-contrib-watch grunt-autoprefixer grunt && grunt`
6. При установке запросит название проекта для `<title>`

В проекте работаем в папке `source`.
После изменения файлов, они обрабатываются и складываются в папку `view`.
Контент из `view` доступен по адресу `localhost:3000`.

## Признательность

 * jQuery
 * HTML5 Shiv
 * CSS Browser Selector
 * Grunt
 * Grunt-init
