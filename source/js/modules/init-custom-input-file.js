/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-invalid-this */
// Кастомный инпут для загрузки файлов -- Начало --
// Custom input for uploading files -- Start --
const initCustomInputFile = () => {
  const inputs = document.querySelectorAll('[data-input-file="input"]');
  inputs.forEach(function (input) {
    let inputLabel = input.closest('[data-input-file="label"]');
    let delBtn = inputLabel.nextElementSibling;
    input.addEventListener('change', function () {
      let countFiles = '';
      checkFilesSize(this.files, 25);
      if (this.files.length >= 1) {
        countFiles = this.files.length;
        delBtn.classList.remove('is-hidden');
      }
      if (countFiles) {
        inputLabel.querySelector('span').innerText = 'Загружено файлов: ' + countFiles;
      }
      document.addEventListener('click', function (e) {
        if (e.target === delBtn) {
          clearInputTypeFile(countFiles, inputLabel, input, delBtn);
        }
      });

      function checkFilesSize(files, sizeLimit) {
        let totalSize = 0;
        for (let i = 0; i < files.length; i++) {
          totalSize += files[i].size;
          if (totalSize > +sizeLimit * 1024 * 1024) {
            clearInputTypeFile(countFiles, inputLabel, input, delBtn);
            alert(`Не более ${sizeLimit} Mb!`);
            // return;
          }
        }
      }
      function clearInputTypeFile(counter, label, inputFile, btn) {
        counter = '';
        label.querySelector('span').innerText = 'Прикрепить файл';
        inputFile.value = '';
        inputFile.closest('.custom-input').classList.remove('is-valid');
        btn.classList.add('is-hidden');
      }
    });
    let dropAreas = document.querySelectorAll('#drop-area');
    if (dropAreas.length) {
      dropAreas.forEach((dropArea) => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
          dropArea.addEventListener(eventName, preventDefaults, false);
        });
        function preventDefaults(e) {
          e.preventDefault();
          e.stopPropagation();
        }
        ['dragenter', 'dragover'].forEach((eventName) => {
          dropArea.addEventListener(eventName, highlight, false);
        })
        ;['dragleave', 'drop'].forEach((eventName) => {
          dropArea.addEventListener(eventName, unhighlight, false);
        });
        function highlight() {
          dropArea.classList.add('highlight');
        }
        function unhighlight() {
          dropArea.classList.remove('highlight');
        }
        dropArea.addEventListener('drop', handleDrop, false);
        function handleDrop(e) {
          let dt = e.dataTransfer;
          let files = dt.files;
          handleFiles(files);
        }
        function handleFiles(files) {
          ([...files]).forEach(uploadFile);
          ([...files]).forEach(previewFile);
        }
        function uploadFile(file) {
          // let url = 'URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ';
          // let formData = new FormData();
          // formData.append('file', file);
          // console.log(...formData);
          // fetch(url, {
          //   method: 'POST',
          //   body: formData,
          // })
          //     .then(() => {
          //       /* Готово. Информируем пользователя */
          //       console.log(file);
          //     })
          //     .catch(() => {
          //       /* Ошибка. Информируем пользователя */
          //     });
        }
        function previewFile(file) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = function () {
            console.log('file loaded');
            // img.src = reader.result;
          };
        }
      });
    }
  });
};
export {initCustomInputFile};
// Кастомный инпут для загрузки файлов -- Конец --
// Custom input for uploading files -- End --
