<template>
    <div class="contacts__border_opacity">
        <div class="contacts__border">
            <div class="contacts" id="contacts">
                <div class="contacts__message">
                    <h3 class="contacts__title">
                        Остались вопросы? Напишите нам!
                    </h3>
                    <div class="contacts__subtitle">
                        Получите все ответы прямо сейчас!
                    </div>
                </div>

                <!-- <div class="try"> -->
                <div class="contacts__form">
                    <ContactsCard
                        icon="/phone.svg"
                        subtitle="Телефон:"
                        name="+7 925 499 45 61"
                        href="tel:+79254994561"
                    />
                    <ContactsCard
                        icon="/email.svg"
                        subtitle="Email:"
                        name="zdorovye.turizm@bk.ru"
                        href="mailto:zdorovye.turizm@bk.ru"
                    />
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
                    <!-- </div> -->
                </div>

                <div class="contacts__image-background"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contacts {
    display: flex;
    flex-direction: column;
    padding-top: 41px;
    padding-left: 41px;
    padding-right: 41px;
    padding-bottom: 20px;
    box-shadow: 0px 8px 24px 20px rgba(192, 217, 233, 0.6);
    border-radius: 120px;
    position: relative;
    z-index: 10;
    background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0.8) 100%
    );
    @media (max-width: 768px) {
    }
    @media (max-width: 400px) {
        padding-top: 0px;
        padding-left: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        background: none;
        box-shadow: none;
    }

    &__border {
        padding: 20px;
        @media (max-width: 400px) {
            padding: 0px;
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
            border-radius: 120px;
            @media (max-width: 400px) {
                background: none;
            }
        }
        &_opacity {
            background: #c1faed;
            position: relative;
            z-index: 0 !important;
            border-radius: 120px;
            @media (max-width: 400px) {
                background: $white;
            }
        }
    }
    @media (max-width: 992px) {
    }

    &__title {
        font-size: 60px;
        font-weight: 600;
        line-height: 60px;
        margin-bottom: 19px;
        @media (max-width: 768px) {
            font-size: 32px;
            font-weight: 600;
            line-height: 32px;
        }
        @media (max-width: 400px) {
            font-size: 28px;
            font-weight: 600;
            line-height: 28px;
            margin-bottom: 12px;
        }
    }
    &__subtitle {
        font-family: $font-3;
        font-size: 28px;
        font-weight: 400;
        line-height: 33.6px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
        }
        @media (max-width: 400px) {
            font-size: 16px;
            font-weight: 400;
            line-height: 19.2px;
        }
    }
    &__form {
        margin-top: 50px;
        display: flex;
        align-items: center;
        gap: 40px;
        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: left;
            align-items: baseline;
            gap: 26px;
        }
        @media (max-width: 400px) {
            margin-top: 20px;
            gap: 12px;
        }
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 31px;
        gap: 28px;
        max-width: 1047px;
        @media (max-width: 400px) {
            justify-content: none;
        }
        &__item {
            width: 60px;
            height: 60px;
            cursor: pointer;
            @media (max-width: 768px) {
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
            background-image: url('/logofull-back.png');
        }
        @media (max-width: 400px) {
            background-image: none;
        }
    }
}
</style>
