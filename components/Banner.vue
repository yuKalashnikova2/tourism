<script setup>
import { ref } from 'vue'
const { openModal } = useModal()

</script>
<template>
    <div class="banner">
        <div class="banner__block">
            <h1 class="banner__title">Лечебный отпуск<br />в Турцию</h1>
            <div class="banner__block__subtitle">
                подберём лучшую клинику по вашим критериям
            </div>

            <div class="banner__labels desktop">
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
        <div class="banner__labels mobiles">
            <LabelPrice price="0 руб." text="Предоплаты" color="#4245D7" />
            <LabelPrice price="Онлайн" text="Поддержка" color="#429FD7" small />
            <LabelPrice price="100%" text="Гарантия" color="#67CFB8" />
        </div>
        <div class="banner__form">
            <div class="banner__form__wrapper">
                <div class="banner__form__title">
                    Запишись на бесплатную консультацию до конца осени!
                </div>
                <span class="banner__form__subtitle"
                    >мы подберём лучшее решение и ответим на все вопросы!</span
                >
                <!-- <nuxt-link to="#overlay_button"> -->
                <Button @click="openModal('banner')">Записаться</Button>
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
    @media (max-width: 1440px) {
        grid-template-columns: 1fr;
        background-position: right top;
    }
    @media (max-width: 500px) {
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
            font-size: 48px;
            font-weight: 600;
            line-height: 67.2px;
        }
        @media (max-width: 500px) {
            font-size: 32px;
            font-weight: 600;
            line-height: 44.8px;
            letter-spacing: 0;
        }
    }
    &__block {
        max-width: 950px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media (max-width: 768px) {
            justify-content: center;
        }
        & > * {
            margin-bottom: 40px;
            @media (max-width: 768px) {
                margin-bottom: 12px;
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
            @media (max-width: 500px) {
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
            }
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
            padding: 32px 28px;
        }
        @media (max-width: 500px) {
            padding: 0;
        }
        &__title {
            font-weight: 600;
            font-size: 55px;
            line-height: 78.4px;
            margin-bottom: 20px;

            @media (max-width: 1440px) {
                margin-bottom: 40px;
            }
            @media (max-width: 768px) {
                font-size: 40px;
                line-height: 56px;
                margin-bottom: 12px;
            }
            @media (max-width: 500px) {
                font-size: 28px;
                line-height: 39.2px;
            }
        }
        &__subtitle {
            display: block;
            font-weight: 400;
            font-size: 28px;
            line-height: 33.6px;
            margin-bottom: 40px;
            font-family: $font-3;
            @media (max-width: 768px) {
                font-size: 20px;
                font-weight: 400;
                line-height: 24px;
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
            padding: 60px 60px 40px 60px;
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
                padding: 32px;
                // background-repeat: 80px;
            }
            @media (max-width: 500px) {
                padding: 0;
            }
        }
    }
    &__labels {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding: 47px 0;
        @media (max-width: 1440px) {
            max-width: 100%;
            padding: 24px 0;
        }
        @media (max-width: 500px) {
            grid-template-columns: 1fr;
            padding: 0 !important;
        }
        &.desktop {
            @media (max-width: 1440px) {
                display: none;
            }
        }
        &.mobiles {
            @media (min-width: 1441px) {
                display: none;
            }
        }
    }
}
</style>
