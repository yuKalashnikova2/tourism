<template>
    <div class="contacts" id="contacts">
        <div class="contacts__message">
            <h5 class="contacts__title">Остались вопросы? Напишите нам!</h5>
            <span class="contacts__subtitle"
                >Получите все ответы прямо сейчас!</span
            >
        </div>
        <div class="contacts__form">
            <div class="contacts__phone">
                <a href="tel:+79254994561">
                    <div class="contacts__phone__icon">
                        <img src="/phone.svg" alt="phone" />
                    </div>
                </a>

                <span class="contacts__phone__subtitle">Телефон:</span>
                <span class="contacts__phone__name">+7 925 499 45 61</span>
            </div>
            <div class="contacts__phone">
                <div class="contacts__phone__icon">
                    <img src="/email.svg" alt="email" />
                </div>

                <span class="contacts__phone__subtitle">Email:</span>
                <span class="contacts__phone__name">zdorovye.turizm@bk.ru</span>
            </div>
        </div>
        <div class="contacts__wrapper">
            <nuxt-link to="https://wa.me/79254994561">
                <div class="contacts__wrapper__item">
                    <img src="/whats.svg" alt="whats" />
                </div>
            </nuxt-link>

            <nuxt-link to="https://www.youtube.com/@zdorovyeiturizm">
                <div class="contacts__wrapper__item">
                    <img src="/youtube.svg" alt="youtube" />
                </div>
            </nuxt-link>

            <nuxt-link to="https://vk.com/zdorovekrasotaiturizm">
                <div class="contacts__wrapper__item">
                    <img src="/vkontakte.svg" alt="vk" />
                </div>
            </nuxt-link>

            <nuxt-link to="https://t.me/zdorovekrasotaiturizm">
                <div class="contacts__wrapper__item">
                    <img src="/telegram.svg" alt="telegram" />
                </div>
            </nuxt-link>
        </div>

        <div class="contacts__image-background"></div>
    </div>
</template>

<style lang="scss" scoped>
.contacts {
    display: flex;
    flex-direction: column;
    padding: 60px;
    box-shadow: 0px 8px 24px 20px rgba(192, 217, 233, 0.6);
    border: 20px solid #c1faed;
    border-radius: 120px;
    position: relative;
    @media (max-width: 992px) {
        display: flex;
        padding: 50px;
    }
    @media (max-width: 605px) {
        padding: 30px;
    }
    &__title {
        font-size: 60px;
        font-weight: 600;
        line-height: 60px;
        text-align: left;
        margin-bottom: 20px;
        @media (max-width: 500px) {
            font-size: 40px;
            line-height: 40px;
            font-weight: 500;
        }
    }
    &__subtitle {
        font-size: 28px;
        font-weight: 400;
        line-height: 33.6px;
        text-align: left;
    }
    &__form {
        margin-top: 40px;
        display: flex;
        align-items: center;
        gap: 40px;
        @media (max-width: 992px) {
            flex-direction: column;
            justify-content: left;
            align-items: baseline;
        }
    }
    &__phone {
        display: flex;
        align-items: center;
        gap: 12px;
        @media (max-width: 1200px) {
            flex-direction: column;
            align-items: baseline;
        }

        &__icon {
            width: 40px;
            height: 40px;
            & img {
                width: 100%;
                object-fit: cover;
            }
            @media (max-width: 605px) {
                display: none;
            }
        }
        &__subtitle {
            font-size: 28px;
            font-weight: 700;
            line-height: 28px;
            text-align: left;
        }
        &__name {
            font-size: 28px;
            font-weight: 500;
            line-height: 39.2px;
            text-align: left;
            @media (max-width: 500px) {
                font-size: 20px;
                line-height: 25px;
            }
        }
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        gap: 28px;
        @media (max-width: 1200px) {
            margin-top: 35px;
        }
        @media (max-width: 768px) {
            gap: 15px;
        }
        @media (max-width: 605px) {
            justify-content: center;
        }
        &__item {
            width: 60px;
            height: 60px;
            cursor: pointer;
            @media (max-width: 768px) {
                width: 40px;
                height: 40px;
            }
            & img {
                width: 100%;
                object-fit: cover;
            }
        }
    }
    &__image-background {
        background-image: url('/logo-back.png');
        background-size: contain;
        background-position: right bottom;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;
        @media (max-width: 992px) {
            display: none;
        }
    }
}
</style>
