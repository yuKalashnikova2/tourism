import { watch } from 'vue'
import axios from 'axios'

export const useModal = () => {
  const modalClosed = useState('modalClosed', () => false);
  const isThanks = useState('isThanks', () => false);

  const closeModal = (e) => {
    if (e.target.classList.contains('modal')) {
      modalClosed.value = !modalClosed.value;
    }
    if (!modalClosed.value) {
      document.body.classList.add('overflow-hidden');
    }
    if (window.location.hash === '#overlay_button') {
      history.replaceState(null, null, ' ');
    }
  };

  const submitForm = async (name, email, phone) => {
    const form = document.querySelector('form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    try {
      const response = await axios.post('https://api.zdorovyeiturizm.ru', {
        name,
        email,
        phone,
      });
      isThanks.value = true;
    } catch (e) {
      console.error('Ошибка при отправке:', e.message);
      throw new Error(`Ошибка: ${e.message}`);
    }
  };

  watch(modalClosed, (newModalClosed) => {
    if (newModalClosed) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });

  return { modalClosed, isThanks, closeModal, submitForm };
};
