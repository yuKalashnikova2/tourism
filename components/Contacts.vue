<template>
    <div class="contacts__border_opacity">
        <div class="contacts__border">
            <div class="contacts" id="contacts">
                <div class="contacts__message">
                    <h3 class="contacts__title">
                        Остались вопросы? Напишите нам!
                    </h3>
                    <div class="contacts__subtitle"
                        >Получите все ответы прямо сейчас!</div
                    >
                </div>

                <div class="try">
                    <div class="contacts__form">
                    <!-- <div class="contacts__phone"> -->
                        <!-- <div class="contacts__phone__wrapper">
                            <div class="contacts__phone__icon">
                                <img src="/phone.svg" alt="phone" />
                            </div>
                        <div>
                           
                                <span class="contacts__phone__subtitle">Телефон:</span>
                            </div>
                        <a href="tel:+79254994561" class="contacts__phone__name"
                            >+7 925 499 45 61</a
                        >
                           
                    
                        </div>
                       -->
                    <!-- </div> -->
                    <div class="contacts__phone">
                        <div class="contacts__phone__wrapper">
                            <div class="contacts__phone__icon">
                            <img src="/phone.svg" alt="phone" />
                        </div>

                        <span class="contacts__phone__subtitle">Телефон:</span>
                        </div>
                 
                        <a href="tel:+79254994561" class="contacts__phone__name"
                            >+7 925 499 45 61</a>
                    </div>
                    <div class="contacts__phone">
                        <div class="contacts__phone__wrapper">
                            <div class="contacts__phone__icon">
                            <img src="/email.svg" alt="email" />
                        </div>

                        <span class="contacts__phone__subtitle">Email:</span>
                        </div>
                 
                        <a href="mailto:zdorovye.turizm@bk.ru" class="contacts__phone__name"
                            >zdorovye.turizm@bk.ru</a>
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

    &__border {
        padding: 20px;
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
        &_opacity {
            background: #C1FAED;
;
            position: relative;
            z-index: 0 !important;
            border-radius: 120px;
        }
    }
    @media (max-width: 992px) {
        display: flex;
        padding: 50px;
    }
    @media (max-width: 605px) {
        padding: 45px;
    }
    &__title {
        font-size: 60px;
        font-weight: 600;
        line-height: 60px;
        margin-bottom: 19px;
        @media (max-width: 768px) {
            font-size: 28px;
            font-weight: 700;
            line-height: 39.2px;
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
            font-weight: 700;
            line-height: 28px;
        }
    }
    &__form {
        margin-top: 50px;
        display: flex;
        align-items: center;
        gap: 40px;
        @media (max-width: 1150px) {
            flex-direction: column;
            justify-content: left;
            align-items: baseline;
        }
    }
    &__phone {
        display: flex;
        align-items: center;
        gap: 12px;
        &__wrapper {
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: center;
        }
        @media (max-width: 535px) {
            flex-direction: column;
            align-items: baseline;
        }

        &__icon {
            // width: 40px;
            // height: 40px;
            flex-shrink: 0;
            & img {
                width: 100%;
                object-fit: cover;
            }
            // @media (max-width: 605px) {
            //     display: none;
            // }
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
            @media (max-width: 768px) {
                font-size: 20px;
                font-weight: 700;
                line-height: 28px;
            }
        }
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 31px;
        gap: 28px;
        max-width: 1047px;
        // @media (max-width: 1200px) {
        //     margin-top: 35px;
        // }
        @media (max-width: 768px) {
            gap: 13px;
        }
        // @media (max-width: 605px) {
        //     justify-content: center;
        // }
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
                // position: absolute;
        // right: 0;
        // bottom: 0;
        // z-index: -1;
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
.try {
    
}
</style>
