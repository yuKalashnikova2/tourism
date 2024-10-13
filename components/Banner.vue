<script setup>
import { ref, watch } from 'vue'

const modalClosed = ref(false)
const isThanks = ref(false)

// form
const name = ref('')
const email = ref('')
const phone = ref('')

const closeModal = (e) => {
    if (e.target.classList.contains('modal')) {
        modalClosed.value = !modalClosed.value
    }
    if (!modalClosed.value) {
        document.body.classList.add('overflow-hidden')
    }
}
const submitForm = () => {
    isThanks.value = true
}
watch(modalClosed, (newmodalClosed) => {
    console.log(`modalClosed is ${newmodalClosed}`)
    if (newmodalClosed === true) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})
</script>
<template>
    <div class="banner">
        <div class="banner__block">
            <h1 class="banner__title">Лечебный отпуск в Турцию</h1>
            <span>подберём лучшую клинику</span>
            <span> по вашим критериям</span>

            <div class="banner__labels">
                <LabelPrice price="0 руб." text="Предоплаты" color="#4245D7" />
                <LabelPrice price="Онлайн" text="Поддержка" color="#429FD7" />
                <LabelPrice price="100%" text="Гарантия" color="#67CFB8" />
            </div>
        </div>

        <div class="banner__form">
            <div class="banner__form__wrapper">
                <div class="banner__form__title">
                    Запишись на бесплатную консультацию до конца осени!
                </div>
                <span class="banner__form__subtitle"
                    >мы подберём лучшее решение и ответим на все вопросы!</span
                >
                <Button @click="modalClosed = !modalClosed">Записаться</Button>
            </div>
        </div>

        <div class="modal" v-if="modalClosed" @click="closeModal">
            <Transition>
                <div class="modal__wrapper">
                    <div class="modal__inner">
                        <div v-if="!isThanks">
                            <h3 class="modal__title">
                                Заявка на бесплатную консультацию
                            </h3>
                            <form
                                class="modal__form"
                                @submit.prevent="submitForm"
                            >
                                <div class="modal__form__input">
                                    <label for="name">Как вас зовут?</label>
                                    <input
                                        type="text"
                                        placeholder="Ваше имя"
                                        id="name"
                                        v-model="name"
                                    />
                                </div>
                                <div class="modal__form__input">
                                    <label for="email">Ваш email</label>
                                    <input
                                        type="text"
                                        placeholder="example@domain.com"
                                        id="email"
                                        v-model="email"
                                    />
                                </div>
                                <div class="modal__form__input">
                                    <label for="phone">Телефон</label>
                                    <input
                                        type="text"
                                        placeholder="+7 900 900 99-55"
                                        id="phone"
                                        v-model="phone"
                                    />
                                </div>
                                <div>
                                    <Button type="submit">Записаться</Button>
                                </div>
                            </form>
                        </div>

                        <div class="modal__thanks" v-if="isThanks">
                            <h3 class="modal__thanks__title">Спасибо!</h3>
                            <span class="modal__thanks__subtitle"
                                >Мы свяжемся с вами в ближайшее время!</span
                            >
                            <span class="modal__thanks__follow"
                                >Следите за нами в соц сетях!</span
                            >

                            <div class="modal__social">
                                <nuxt-link
                                    to="https://www.youtube.com/@zdorovyeiturizm"
                                >
                                    <div class="modal__social__item">
                                        <img src="/youtube.svg" alt="youtube" />
                                    </div>
                                </nuxt-link>

                                <nuxt-link
                                    to="https://vk.com/zdorovekrasotaiturizm"
                                >
                                    <div class="modal__social__item">
                                        <img src="/vkontakte.svg" alt="vk" />
                                    </div>
                                </nuxt-link>

                                <nuxt-link
                                    to="https://t.me/zdorovekrasotaiturizm"
                                >
                                    <div class="modal__social__item">
                                        <img
                                            src="/telegram.svg"
                                            alt="telegram"
                                        />
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss">
.banner {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    position: relative;
    width: 100%;
    z-index: 1;
    background-image: url('/banner.png');
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
    &__title {
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 80px;
        line-height: 112px;
        font-weight: 600;
        text-align: left;
        @media (max-width: 1520px) {
            font-size: 60px;
            line-height: 80px;
        }
    }
    &__block {
        max-width: 950px;
        padding-right: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        & > * {
            margin-bottom: 40px;
        }
        & span {
            font-weight: 500;
            font-size: 40px;
            line-height: 56px;
            @media (max-width: 1520px) {
                font-size: 30px;
                line-height: 38px;
            }
        }
        @media (max-width: 768px) {
            max-width: 100%;
        }
    }
    &__form {
        padding: 40px 28px;
        background: linear-gradient(
                287.56deg,
                rgba(86, 241, 206, 0) 50%,
                rgba(86, 241, 206, 0.8) 100%
            ),
            linear-gradient(
                252.44deg,
                rgba(66, 159, 215, 0.8) 0%,
                rgba(66, 159, 215, 0) 50%
            );
        border-radius: 120px;
        @media (max-width: 768px) {
            padding: 20px;
        }
        &__title {
            font-weight: 600;
            font-size: 56px;
            line-height: 74.4px;
            margin-bottom: 20px;
            @media (max-width: 1520px) {
                font-size: 36px;
                line-height: 40px;
            }
            @media (max-width: 768px) {
                font-size: 36px;
                line-height: 40px;
            }
        }
        &__subtitle {
            display: block;
            font-weight: 400;
            font-size: 28px;
            line-height: 33px;
            margin-bottom: 40px;
        }
        &__wrapper {
            display: flex;
            flex-direction: column;
            background-color: $white;
            border-radius: 120px;
            padding: 60px 60px 60px 40px;
        }
    }
    &__labels {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding: 24px 0;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    &__wrapper {
        max-width: 680px;
    }
    &__inner {
        border: 20px solid #c7f3e8;
        box-shadow: 0px 8px 24px 20px #c0d9e999;
        min-width: 300px;
        background-color: #fff;
        border-radius: 60px;
        padding: 3.75rem;
        // font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        position: relative;
        @media (max-width: 1500px) {
            padding: 1.75rem;
        }
        @media (max-width: 768px) {
            border: 1px solid #c7f3e8;
            border-radius: 0px;
        }
    }
    &__title {
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        text-align: center;
        margin-bottom: 2.5rem;
        @media (max-width: 1500px) {
            font-size: 30px;
            line-height: 38px;
            margin-bottom: 1.5rem;
        }
    }
    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        @media (max-width: 1500px) {
            gap: 20px;
        }
        &__input {
            display: flex;
            flex-direction: column;

            gap: 10px;
            width: 100%;
            & label {
                font-size: 28px;
                font-weight: 500;
                line-height: 28px;
                @media (max-width: 1500px) {
                    font-size: 20px;
                    line-height: 20px;
                }
            }
            & input {
                width: 100%;
                background-color: #dcdcdc;
                border-radius: 40px;
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
                padding: 1.25rem;
                @media (max-width: 1500px) {
                    font-size: 16px;
                    line-height: 16px;
                    width: 90%;
                }
            }
        }
    }
    &__show {
        padding-top: 3rem;
    }
    &__thanks {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 40px;
        &__title {
            font-size: 60px;
            font-weight: 700;
            line-height: 72px;
        }
        &__subtitle {
            font-size: 40px;
            font-weight: 500;
            line-height: 48px;
        }
        &__follow {
            font-size: 28px;
            font-weight: 600;
            line-height: 39.2px;
        }
    }
    &__social {
        display: flex;
        gap: 40px;
        justify-content: center;
        &__item {
            width: 60px;
            height: 60px;
            & img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
// .button {
//     background-color: #42b883;
//     color: #fff;
//     border-radius: 8px;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 7px;
//     &:hover {
//         opacity: 0.8;
//     }
//     & img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }
//     &__closed {
//         position: absolute;
//         top: 5px;
//         right: 5px;
//         width: 30px;
//         height: 30px;
//     }
//     &__show {
//         width: 150px;
//         font-size: 1.3rem;
//     }
// }
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

// .image-container {
//     position: relative;
//     width: 100%;
//     overflow: hidden;

//     @media (max-width: 1520px) {
//         height: 1100px;
//     }
// }

// .image-container img {
//     width: 100%;
//     height: auto;
//     object-fit: cover;
//     @media (max-width: 768px) {
//         height: 500px;
//     }
// }
// .text-overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: 1;
//     background-color: rgba(255, 255, 255, 0.6);
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//     justify-content: center;
//     align-items: center;
//     @media (max-width: 1520px) {
//         grid-template-columns: 1fr;
//     }
//     @media (max-width: 768px) {
//         padding-top: 2rem;
//         padding-bottom: 2rem;
//     }

// }
</style>
