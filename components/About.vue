<template>
    <div class="about" id="about">
        <TitleSection>Почему мы?</TitleSection>

        <div class="mt-20">
            <p class="services__text">
                Мы занимаемся организацией лечения от А до Я — сделаем ваше
                лечение в Турции комфортным, чтобы вы могли не беспокоиться за
                качество услуг!
            </p>
        </div>
        <div class="mobile mobile_margin">
            <h3 class="about__name">Консультант — Эйюп Ахмет Уйгун</h3>
            <p class="about__desc">
                Опытный специалист в сфере организации оздоровительного туризма.
                Владеет турецким, английским, русским языками, жил в Турции.
            </p>
        </div>
        <div class="about__wrapper">
            <div class="about__image_color">
                <div class="about__image">
                    <img src="/photo.jpeg" alt="" />
                </div>
            </div>

            <div class="about__text">
                <div class="desktop">
                    <h3 class="about__name">Консультант — Эйюп Ахмет Уйгун</h3>
                    <p class="about__desc">
                        Опытный специалист в сфере организации оздоровительного
                        туризма. Владеет турецким, английским, русским языками,
                        жил в Турции.
                    </p>
                </div>

                <div class="about__cards">
                    <AboutCards
                        title="0% предоплаты"
                        desc="оплата только после оказанных медицинских услуг"
                    />
                    <AboutCards
                        title="Бесплатная консультация"
                        desc="профессиональные рекомендации и план лечения"
                    />
                    <AboutCards
                        title="24/7 Помощь и гарантия"
                        desc="поддержка на всех этапах лечения в Турции"
                    />
                    <AboutCards
                        title="Поддержка после приезда"
                        desc="круглосуточную помощь  после успешного лечения"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about {
    & .mobile {
        @media (min-width: 1441px) {
            display: none;
        }
        &_margin {
            margin-top: 40px;
            @media (max-width: 768px) {
                margin-top: 28px;
            }
        }
    }
    &__wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 40px;
        padding-top: 40px;
        align-items: stretch;
        height: 100%;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        @media (max-width: 1000px) {
            padding-top: 20px;
        }
        @media (max-width: 913px) {
            grid-template-columns: 1fr;
        }
    }
    &__image {
        height: 100%;
        border-radius: 120px;
        overflow: hidden;
        flex-shrink: 0;
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
                    rgba(215, 66, 188, 0.24) 100%
                ),
                linear-gradient(
                    0deg,
                    rgba(103, 207, 184, 0.6),
                    rgba(103, 207, 184, 0.6)
                );

            opacity: 0.6;
            z-index: -1;
            border-radius: 120px;
        }
        &_color {
            background: #67cfb899;
            position: relative;
            z-index: 0 !important;

            padding: 20px;
            border-radius: 120px;
            @media (max-width: 500px) {
                padding: 8px;
            }
        }
        @media (max-width: 1280px) {
            min-width: 422px;
        }
        @media (max-width: 768px) {
            min-width: 344px;
        }
        // @media (max-width: 768px) {
        //     width: 300px;
        //     height: 300px;
        // }
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__cards {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding-top: 40px;
        @media (max-width: 992px) {
            gap: 12px;
        }
        @media (max-width: 500px) {
            padding-top: 0px;
        }
    }
    &__text {
        & .desktop {
            @media (max-width: 1440px) {
                display: none;
            }
        }
    }
    &__name {
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        text-align: left;
        margin-bottom: 16px;
        @media (max-width: 768px) {
            font-size: 28px;
            line-height: 28px;
        }
        @media (max-width: 500px) {
            font-size: 20px;
            line-height: 20px;
        }
    }
    &__desc {
        font-size: 28px;
        font-style: italic;
        font-weight: 400;
        line-height: 33.6px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 20px;
            line-height: 24px;
        }
        @media (max-width: 500px) {
            font-size: 16px;
            line-height: 19.2px;
        }
    }
}
</style>
