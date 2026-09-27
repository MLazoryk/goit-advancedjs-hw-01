const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

// 1. Check localStorage on page load and populate the form
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// 2. Track input changes using event delegation
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Clear storage, object, and form fields
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});