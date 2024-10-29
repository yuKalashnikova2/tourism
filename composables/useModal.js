import { watch } from 'vue'
import axios from 'axios'

export const useModal = () => {

  const isThanks = useState('isThanks', () => false);

  const modalClosed = useState('modalClosed', () => false);

  const openModal = () => {
    modalClosed.value = true
    window.location.hash = 'overlay_button'
    document.body.classList.add('overflow-hidden')
    if (window.ym) {
                window.ym(97898876,'reachGoal','banner_button')
                window.ym(97898876,'reachGoal','uznat_button')
                console.log('Отправелены метрики ЗАПИСЬ')
              }
  }
  const closeModal = (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal__closed')) {
        modalClosed.value = false
        document.body.classList.remove('overflow-hidden')
        history.replaceState(null, null, ' ')
    }
  }

  const submitForm = async (name, email, phone) => {
    // const form = document.querySelector('form');
    // if (!form.checkValidity()) {
    //   form.reportValidity();
    //   return;
    // }
    try {
      const response = await axios.post('https://api.zdorovyeiturizm.ru', {
        name,
        email,
        phone,
      });
      isThanks.value = true;
      if (window.ym) {
        window.ym(97898876,'reachGoal','overlay_button')
        console.log('Отправелены метрики ОТПРАВКА')
      }
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

  return { modalClosed, isThanks, closeModal,openModal, submitForm };
};
