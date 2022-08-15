/* eslint-disable no-invalid-this */
// Кастомный инпут для загрузки файлов -- Начало --
// Custom input for uploading files -- Start --
const initCustomInputFile = () => {
  const inputs = document.querySelectorAll('[data-input-file="input"]');
  inputs.forEach(function (input) {
    let label = input.closest('[data-input-file="label"]');
    let delBtn = label.nextElementSibling;
    input.addEventListener('change', function () {
      let countFiles = '';
      if (this.files && this.files.length >= 1) {
        countFiles = this.files.length;
        delBtn.classList.remove('is-hidden');
      }
      if (countFiles) {
        label.querySelector('span').innerText = 'Загружено файлов: ' + countFiles;

      }
      document.addEventListener('click', function (e) {
        if (e.target === delBtn) {
          countFiles = '';
          label.querySelector('span').innerText = 'Прикрепить файл';
          input.value = '';
          input.closest('.custom-input').classList.remove('is-valid');
          delBtn.classList.add('is-hidden');
        }
      });
    });
  });
  let dropAreas = document.querySelectorAll('#drop-area');
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
      // ([...files]).forEach(uploadFile);
		console.log([...files]);
    }
  });
};
export {initCustomInputFile};
// Кастомный инпут для загрузки файлов -- Конец --
// Custom input for uploading files -- End --
