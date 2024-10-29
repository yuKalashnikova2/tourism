<script setup>
import { ref, watch } from 'vue'
import { useModal } from '../composables/useModal.js'


const { modalClosed, isThanks, closeModal, submitForm } = useModal()

// form
const name = ref('')
const email = ref('')
const phone = ref('')


</script>
<template>
          <div class="modal" v-if="modalClosed" @click="closeModal" id="overlay_button">
            <Transition>
                <div class="modal__wrapper" >
                    <div class="modal__border_opacity">
                        <div class="modal__border">
                            <div class="modal__inner">
                                <div v-if="!isThanks">
                                    <h3 class="modal__title desktop">
                                        Заявка на бесплатную консультацию
                                    </h3>
                                    <div class="mobile">
                                        <h3 class="modal__title">
                                        Заявка на бесплатную консультацию
                                    </h3>
                                    <div @click="closeModal" class="modal__closed"  >
                                        &#10005;
                                    </div>
                                    </div>
                                  
                                    <form class="modal__form" @submit.prevent>
                                        <div class="modal__form__inputs">
                                            <div class="modal__form__input">
                                                <label for="name"
                                                    >Как вас зовут?</label
                                                >
                                                <input
                                                    type="text"
                                                    placeholder="Ваше имя"
                                                    id="name"
                                                    v-model="name"
                                                    required
                                                />
                                            </div>
                                            <div class="modal__form__input">
                                                <label for="email"
                                                    >Ваш email</label
                                                >
                                                <input
                                                    type="email"
                                                    placeholder="example@domain.com"
                                                    id="email"
                                                    v-model="email"
                                                    required
                                                />
                                            </div>
                                            <div class="modal__form__input">
                                                <label for="phone"
                                                    >Телефон</label
                                                >
                                                <input
                                                    type="text"
                                                    placeholder="+7 900 900 99-55"
                                                    id="phone"
                                                    v-model="phone"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            class="modal__btn"
                                            @click="
                                                submitForm(name, email, phone)
                                            "
                                            >Отправить</Button
                                        >
                                        <div class="modal__agree">
                                            <span
                                                >Нажимая на кнопку, я соглашаюсь
                                                на <span
                                                    class="modal__agree_underline"
                                                    >обработку персональных
                                                    данных.</span
                                                ></span
                                            >
                                        </div>
                                    </form>
                                </div>

                                <div class="modal__thanks" v-if="isThanks">
                                    <h3 class="modal__thanks__title">
                                        Спасибо!
                                    </h3>
                                    <span class="modal__thanks__subtitle"
                                        >Мы свяжемся с вами в ближайшее
                                        время!</span
                                    >
                                    <span class="modal__thanks__follow"
                                        >Следите за нами в соц сетях!</span
                                    >

                                    <div class="modal__social">
                                        <nuxt-link
                                            to="https://www.youtube.com/@zdorovyeiturizm"
                                        >
                                            <div class="modal__social__item">
                                                <img
                                                    src="/youtube.svg"
                                                    alt="youtube"
                                                />
                                            </div>
                                        </nuxt-link>

                                        <nuxt-link
                                            to="https://vk.com/zdorovekrasotaiturizm"
                                        >
                                            <div class="modal__social__item">
                                                <img
                                                    src="/vkontakte.svg"
                                                    alt="vk"
                                                />
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
                    </div>
                </div>
            </Transition>
        </div>
</template>

<style lang="scss" scoped>
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
        // max-width: 680px;
        @media(max-width: 768px) {
            width: 100%;
        }
    }
    &__closed {
        position: relative;
        z-index: 100 !important;
        background: linear-gradient(
            287.56deg,
            rgba(86, 241, 206, 0) 50%,
            rgba(86, 241, 206, 0.4) 100%
        ),
        linear-gradient(
            252.44deg,
            rgba(86, 241, 206, 0.4) 0%,
            rgba(86, 241, 206, 0) 50%
        ),
        linear-gradient(
            180deg,
            rgba(215, 66, 188, 0) 50%,
            rgba(215, 66, 188, 0.06) 100%
        ),
        linear-gradient(0deg, #67c7cf, #67c7cf);

    color: $white;
    font-size: 28px;
    cursor: pointer;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
            cursor: pointer;
            background: linear-gradient(
                    287.56deg,
                    rgba(86, 241, 206, 0) 50%,
                    rgba(66, 159, 215, 0.6) 100%
                ),
                linear-gradient(
                    252.44deg,
                    rgba(66, 159, 215, 0.6) 0%,
                    rgba(86, 241, 206, 0) 50%
                ),
                linear-gradient(
                    180deg,
                    rgba(215, 66, 188, 0) 50%,
                    rgba(215, 66, 188, 0.12) 100%
                ),
                linear-gradient(0deg, #67c7cf, #67c7cf) !important;
        }
    }
    &__border {
        padding: 20px;
        @media(max-width: 500px) {
            padding: 0;
           
        }
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(
                    287.56deg,
                    rgba(86, 241, 206, 0) 50%,
                    rgba(86, 241, 206, 0.8) 100%
                ),
                linear-gradient(
                    252.44deg,
                    rgba(66, 159, 215, 0.8) 0%,
                    rgba(66, 159, 215, 0) 50%
                ),
                linear-gradient(
                    180deg,
                    rgba(215, 66, 188, 0) 50%,
                    rgba(215, 66, 188, 0.12) 100%
                );

            opacity: 0.6;
            z-index: -1;
            border-radius: 80px;
            @media(max-width: 768px) {
                background: none;
            }
        }
        &_opacity {
            background: #c7f3e8;
            position: relative;
            z-index: 0 !important;
            border-radius: 80px;
            @media(max-width: 768px) {
                background: $white;
                border-radius: 0px;
            }
        }
    }
    &__inner {
        box-shadow: 0px 8px 24px 20px #c0d9e999;
        min-width: 300px;
        background: linear-gradient(
            90deg,
            #ffffff 0%,
            rgba(255, 255, 255, 0.8) 100%
        );
        border-radius: 80px;
        padding: 60px;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        @media (max-width: 1440px) {
            padding: 40px;

        }
        @media (max-width: 768px) {
            padding: 20px;
            min-width: 100%;
            border-radius: 0px;
            box-shadow: none;
        }
        // @media(max-width: 500px) {
        //     border-radius: 0px;
        //     box-shadow: none;
        // }
    }
    &__title {
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        text-align: center;
        margin-bottom: 2.5rem;
        @media (max-width: 1440px) {
            margin-bottom: 1.5rem;
                font-size: 28px;
                line-height: 39.2px;
        }
        @media (max-width: 768px) {
                margin-bottom:0rem;
                font-size: 28px;
                line-height: 39.2px;
                text-align: start;
        }
        @media (max-width: 500px) {
            font-size: 20px;
            line-height: 28px;
        }
    }
    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 768px) {
            gap: 20px;
        }
        &__inputs {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 40px;
            margin-bottom: 40px;
            @media(max-width: 1440px) {
                gap: 20px;
                margin-bottom: 20px;
            }
            @media(max-width: 768px) {
                gap: 20px;
                margin-bottom: 20px;
            }
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
                @media(max-width: 1440px) {
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
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
                @media (max-width: 768px) {
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
                }
            }
        }
    }
    &__show {
        padding-top: 3rem;
    }
    &__btn {
        width: 100%;
        @media(max-width: 1440px) {
            font-size: 28px;
            line-height: 39.2px;
        }
    }
    &__agree {
        margin-top: 4px;
        & span {
            font-family: $font-3;
            color: $gray;
            font-size: 14px;
            font-weight: 400;
            line-height: 16.8px;
            text-align: center;
        }
        &_underline {
            text-decoration: underline;
        }
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
.mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    @media(min-width: 769px) {
        display: none;
    }
}
.desktop {
    @media(max-width: 768px) {
        display: none;
    }
}
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>