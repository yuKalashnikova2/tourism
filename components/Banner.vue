import { Button } from '#build/components';
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
                <Button>Записаться</Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        background-color: rgba(255,255,255,0.5); 
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
        // padding-bottom: 40px;
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
