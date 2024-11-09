import { ref, watch } from 'vue'
import axios from 'axios'

export const useModal = () => {
    const isThanks = useState('isThanks', () => false)

    const modalClosed = useState('modalClosed', () => false)

    const openModal = (buttonType) => {
        modalClosed.value = true
        window.location.hash = 'overlay_button'
        document.body.classList.add('overflow-hidden')
        if (window.ym) {
            if (buttonType === 'banner') {
                window.ym(97898876, 'reachGoal', 'banner_button')
            } else if (buttonType === 'card') {
                window.ym(97898876, 'reachGoal', 'uznat_button')
            }
        }
    }
    const closeModal = (e) => {
        if (
            e.target.classList.contains('modal') ||
            e.target.classList.contains('modal__closed')
        ) {
            modalClosed.value = false
            document.body.classList.remove('overflow-hidden')
            history.replaceState(null, null, ' ')
        }
    }
    const errorName = ref(false)
    const errorEmail = ref(false)
    const errorPhone = ref(false)
    const validateName = (name) => {
        return name.trim() !== ''
    }
    const validateEmail = (email) => {
        const emailRegPattern =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        return emailRegPattern.test(email)
    }

    const validatePhone = (phone) => {
        const phonePattern = /^\+7\d{10}$/
        return phonePattern.test(phone)
    }

    const submitForm = async (name, email, phone) => {
        const isNameValid = validateName(name)
        const isEmailValid = validateEmail(email)
        const isPhoneValid = validatePhone(phone)
        if (!isNameValid) {
            errorName.value = true
            return
        }
        if (!isEmailValid) {
            errorEmail.value = true
            return
        }
        if (!isPhoneValid) {
            errorPhone.value = true
            return
        }
        try {
            const response = await axios.post(
                'https://api.zdorovyeiturizm.ru',
                {
                    name,
                    email,
                    phone,
                }
            )
            isThanks.value = true
            window.location.hash = 'overlay_button'
            if (window.ym) {
                window.ym(97898876, 'reachGoal', 'overlay_button')
                console.log('Отправелены метрики ОТПРАВКА')
            }
        } catch (e) {
            console.error('Ошибка при отправке:', e.message)
            throw new Error(`Ошибка: ${e.message}`)
        }
    }

    watch(modalClosed, (newModalClosed) => {
        if (newModalClosed) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    })

    return {
        modalClosed,
        isThanks,
        closeModal,
        openModal,
        submitForm,
        errorName,
        errorEmail,
        errorPhone,
    }
}
