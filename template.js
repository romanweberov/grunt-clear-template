'use strict';
exports.description = 'Чистый шаблон для новой верстки';
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  // Запрос заголовка для <title>
  init.process({}, [
    {
      name: 'title',
      message: 'Заголовок',
      default: 'Markup',
    }
  ], function(err, props){

    // Добавляем пустые папки
    var join = require("path").join;
    grunt.file.mkdir( join(init.destpath(), 'source/i') );
    grunt.file.mkdir( join(init.destpath(), 'source/psd') );

    // Копируем файлы
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    done();
  });
};