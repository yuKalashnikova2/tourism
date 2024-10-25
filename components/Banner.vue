<script setup>
import { ref } from 'vue'
const { modalClosed, closeModal, openModal } = useModal()

// const showPopup = ref(false)
</script>
<template>
    <div class="banner">
        <div class="banner__block">
            <h1 class="banner__title">Лечебный отпуск<br />в Турцию</h1>
            <div class="banner__block__subtitle">
                подберём лучшую клинику по вашим критериям
            </div>

            <div class="banner__labels">
                <LabelPrice price="0 руб." text="Предоплаты" color="#4245D7" />
                <LabelPrice
                    price="Онлайн"
                    text="Поддержка"
                    color="#429FD7"
                    small
                />
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
                <!-- <nuxt-link to="#"> -->
                    <Button @click="openModal"
                        >Записаться</Button
                    >
                <!-- </nuxt-link> -->
            </div>
        </div>
        <Modal />
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

    // @media (max-width: 1500px) {
    //     grid-template-columns: 1fr;
    // }
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 768px) {
        background-image: none;
    }
    &__title {
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 80px;
        line-height: 112px;
        font-weight: 600;
        text-align: left;
        letter-spacing: -4px;
        @media (max-width: 768px) {
            font-size: 60px;
            font-weight: 700;
            line-height: 84px;
        }
        @media (max-width: 360px) {
            font-size: 48px;
            font-weight: 700;
            line-height: 67.2px;
        }
        // @media (max-width: 1520px) {
        //     font-size: 60px;
        //     line-height: 80px;
        // }
    }
    &__block {
        max-width: 950px;
        // padding-right: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: 768px) {
            // align-items: center;
            justify-content: center;
        }
        & > * {
            margin-bottom: 40px;
            @media (max-width: 360px) {
                margin-bottom: 0;
            }
        }

        &__subtitle {
            display: block;
            font-weight: 500;
            font-size: 40px;
            line-height: 56px;
            font-family: $font-3;
            letter-spacing: -2px;
            max-width: 518px;
            @media (max-width: 768px) {
                font-size: 20px;
                font-weight: 700;
                line-height: 28px;
                letter-spacing: 0px;
            }
            @media (max-width: 330px) {
                font-size: 20px;
                font-weight: 700;
                line-height: 28px;
            }
            // @media (max-width: 1520px) {
            //     font-size: 30px;
            //     line-height: 38px;
            // }
        }
        @media (max-width: 768px) {
            max-width: 100%;
            padding-right: 0;
        }
    }
    &__form {
        padding: 40px 28px;
        background: #c7f3e8;
        position: relative;
        z-index: -1 !important;
        border-radius: 120px;
        @media (max-width: 768px) {
            padding: 0;
        }
        &__title {
            font-weight: 600;
            font-size: 55px;
            line-height: 78.4px;
            margin-bottom: 20px;

            // @media (max-width: 1520px) {
            //     font-size: 36px;
            //     line-height: 40px;
            // }
            @media (max-width: 768px) {
                font-size: 40px;
                font-weight: 700;
                line-height: 56px;
            }
            @media (max-width: 360px) {
                font-size: 32px;
                font-weight: 700;
                line-height: 44.8px;
            }
        }
        &__subtitle {
            display: block;
            font-weight: 400;
            font-size: 28px;
            line-height: 33.6px;
            margin-bottom: 40px;

            @media (max-width: 768px) {
                font-size: 20px;
                font-weight: 700;
                line-height: 28px;
            }
            @media (max-width: 360px) {
                font-size: 20px;
                font-weight: 700;
                line-height: 28px;
            }
        }
        &__wrapper {
            display: flex;
            flex-direction: column;
            background-color: $white;
            border-radius: 120px;
            padding: 61px 62px 52px 60px;
            height: 100%;
            justify-content: space-between;
            max-width: 100%;
            box-sizing: border-box;
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
                border-radius: 120px;
            }
            @media (max-width: 768px) {
                padding: 0;
                background-repeat: 80px;
            }
        }
    }
    &__labels {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding: 47px 0;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            width: 100%;
            padding: 0 !important;
        }
        @media (max-width: 400px) {
            padding: 0;
        }
    }
}

// .modal {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.7);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 9;
//     &__wrapper {
//         max-width: 680px;
//     }
//     &__border {
//         padding: 20px;
//         &::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             bottom: 0;
//             right: 0;
//             background: linear-gradient(
//                     287.56deg,
//                     rgba(86, 241, 206, 0) 50%,
//                     rgba(86, 241, 206, 0.8) 100%
//                 ),
//                 linear-gradient(
//                     252.44deg,
//                     rgba(66, 159, 215, 0.8) 0%,
//                     rgba(66, 159, 215, 0) 50%
//                 ),
//                 linear-gradient(
//                     180deg,
//                     rgba(215, 66, 188, 0) 50%,
//                     rgba(215, 66, 188, 0.12) 100%
//                 );

//             opacity: 0.6;
//             z-index: -1;
//             border-radius: 80px;
//         }
//         &_opacity {
//             background: #c7f3e8;
//             position: relative;
//             z-index: 0 !important;
//             border-radius: 80px;
//         }
//     }
//     &__inner {
//         box-shadow: 0px 8px 24px 20px #c0d9e999;
//         min-width: 300px;
//         background: linear-gradient(
//             90deg,
//             #ffffff 0%,
//             rgba(255, 255, 255, 0.8) 100%
//         );
//         border-radius: 80px;
//         padding: 60px;
//         padding-bottom: 40px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         position: relative;

//         @media (max-width: 768px) {
//             border-radius: 0px;
//         }
//     }
//     &__title {
//         font-size: 40px;
//         font-weight: 700;
//         line-height: 48px;
//         text-align: center;
//         margin-bottom: 2.5rem;
//         @media (max-width: 768px) {
//             font-size: 28px;
//             font-weight: 500;
//             line-height: 28px;
//         }
//     }
//     &__form {
//         display: flex;
//         flex-direction: column;
//         align-items: center;

//         @media (max-width: 768px) {
//             gap: 20px;
//         }
//         &__inputs {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             width: 100%;
//             gap: 40px;
//             margin-bottom: 40px;
//         }
//         &__input {
//             display: flex;
//             flex-direction: column;
//             gap: 10px;
//             width: 100%;
//             & label {
//                 font-size: 28px;
//                 font-weight: 500;
//                 line-height: 28px;
//             }
//             & input {
//                 width: 100%;
//                 background-color: #dcdcdc;
//                 border-radius: 40px;
//                 font-size: 20px;
//                 font-weight: 500;
//                 line-height: 20px;
//                 padding: 1.25rem;
//                 @media (max-width: 768px) {
//                     font-size: 20px;
//                     font-weight: 700;
//                     line-height: 28px;
//                 }
//             }
//         }
//     }
//     &__show {
//         padding-top: 3rem;
//     }
//     &__btn {
//         width: 100%;
//     }
//     &__agree {
//         margin-top: 4px;
//         & span {
//             font-family: $font-3;
//             color: $gray;
//             font-size: 14px;
//             font-weight: 400;
//             line-height: 16.8px;
//             text-align: center;
//         }
//         &_underline {
//             text-decoration: underline;
//         }
//     }
//     &__thanks {
//         text-align: center;
//         display: flex;
//         flex-direction: column;
//         gap: 40px;
//         &__title {
//             font-size: 60px;
//             font-weight: 700;
//             line-height: 72px;
//         }
//         &__subtitle {
//             font-size: 40px;
//             font-weight: 500;
//             line-height: 48px;
//         }
//         &__follow {
//             font-size: 28px;
//             font-weight: 600;
//             line-height: 39.2px;
//         }
//     }
//     &__social {
//         display: flex;
//         gap: 40px;
//         justify-content: center;
//         &__item {
//             width: 60px;
//             height: 60px;
//             & img {
//                 width: 100%;
//                 height: 100%;
//                 object-fit: cover;
//             }
//         }
//     }
// }
// .v-leave-active {
//     transition: opacity 0.3s ease;
// }

// .v-enter-from,
// .v-leave-to {
//     opacity: 0;
// }
</style>
