import {modals} from '../modals/init-modals';
import FormsValidate from './form-validate';
const formWrappers = document.querySelectorAll('[data-validate]');

const data = {};
const resetForm = (form) => {
  setTimeout(() => {
    window.clearForm(form);
  }, 1000);
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  resetForm(e.target);
};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();
};

// Валидация и отправка формы подписки -- Начало --
const subscribeFormValidationSuccessCallback = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  for (let [name, value] of formData) {
    data[name] = value;
  }
  console.log(data);

  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке


  // let response = await fetch ('', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'multipart/form-data' },
  //   body: formData
  // });

  // let result = await response.json();
  // console.log(result);

  resetForm(e.target);
  modals.open('success');
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const subscribeFormValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};
// Валидация и отправка формы подписки -- Конец --

// Валидация и отправка формы Свяжитесь с нами -- Начало --
const contactUsFormValidationSuccessCallback = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  for (let [name, value] of formData) {
    data[name] = value;
  }
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке

  // let response = await fetch ('', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'multipart/form-data' },
  //   body: formData
  // });
  // let result = await response.json();
  // console.log(result);

  resetForm(e.target);
  modals.open('success');
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const contactUsFormValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};
// Валидация и отправка формы Свяжитесь с нами -- Конец --

// Валидация и отправка формы поиска вакансий -- Начало --
const searchVacanciesFormValidationSuccessCallback = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  for (let [name, value] of formData) {
    data[name] = value;
  }
  console.log(data);
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке

  // let response = await fetch ('', {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'multipart/form-data' },
  //   body: formData
  // });

  // let result = await response.json();
  // console.log(result);

  resetForm(e.target);
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const searchVacanciesFormValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};
// Валидация и отправка формы поиска вакансий -- Конец --

// Валидация и отправка формы отправки резюме -- Начало --
const vacanciesFormValidationSuccessCallback = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  for (let [name, value] of formData) {
    data[name] = value;
  }
  console.log(data);
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке

  // let response = await fetch ('', {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'multipart/form-data' },
  //   body: formData
  // });

  // let result = await response.json();
  // console.log(result);

  resetForm(e.target);
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const vacanciesFormValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};
// Валидация и отправка формы отправки резюме -- Конец --

// Валидация и отправка формы поиска форм сотрудничества -- Начало --
const cooperationFormValidationSuccessCallback = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  for (let [name, value] of formData) {
    data[name] = value;
  }
  console.log(data);
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке

  // let response = await fetch ('', {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'multipart/form-data' },
  //   body: formData
  // });

  // let result = await response.json();
  // console.log(result);

  resetForm(e.target);
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const cooperationFormValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};
// Валидация и отправка формы поиска форм сотрудничества -- Конец --

// Валидация и отправка формы для поставщиков -- Начало --
const topicalFormValidationSuccessCallback = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  for (let [name, value] of formData) {
    data[name] = value;
  }
  console.log(data);
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке

  // let response = await fetch ('', {
  //   method: ' POST',
  //   headers: { 'Content-Type': 'multipart/form-data' },
  //   body: formData
  // });

  // let result = await response.json();
  // console.log(result);

  resetForm(e.target);
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const topicalFormValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};
// Валидация и отправка формы для поставщиков -- Конец --

const callbacks = {
  base: {
    // Колбек при успешной валидации формы при попытке её отправки
    validationSuccessCallback: baseValidationSuccessCallback,
    // Колбек при не успешной валидации формы при попытке её отправки, не связан с запросами на сервер
    validationErrorCallback: baseValidationErrorCallback,
  },
  contactUsForm: {
    validationSuccessCallback:
      contactUsFormValidationSuccessCallback,
    validationErrorCallback: contactUsFormValidationErrorCallback,
  },
  subscribeForm: {
    validationSuccessCallback:
    subscribeFormValidationSuccessCallback,
    validationErrorCallback: subscribeFormValidationErrorCallback,
  },
  searchVacanciesForm: {
    validationSuccessCallback:
    searchVacanciesFormValidationSuccessCallback,
    validationErrorCallback: searchVacanciesFormValidationErrorCallback,
  },
  vacancyForm: {
    validationSuccessCallback:
    vacanciesFormValidationSuccessCallback,
    validationErrorCallback: vacanciesFormValidationErrorCallback,
  },
  cooperationForm: {
    validationSuccessCallback:
    cooperationFormValidationSuccessCallback,
    validationErrorCallback: cooperationFormValidationErrorCallback,
  },
  topicalForm: {
    validationSuccessCallback:
    topicalFormValidationSuccessCallback,
    validationErrorCallback: topicalFormValidationErrorCallback,
  },
};

const setCustomPhoneInputsEvent = () => {
  if (document.querySelectorAll('[data-validate-type="phone"] input').length) {
    document.querySelector('html').addEventListener('input', ({target}) => {
      if (target.closest('[data-validate-type="phone"]')) {
        target.closest('[data-validate-type="phone"]').querySelector('input').dispatchEvent(new Event('input'));
      }
    });
  }
};

const initFormValidate = () => {
  if (formWrappers.length) {
    setCustomPhoneInputsEvent();
    formWrappers.forEach((wrapper) => {
      let callback = wrapper.dataset.callback;

      if (!callback) {
        callback = 'base';
      }

      const formValidate = new FormsValidate(wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

export {initFormValidate};
