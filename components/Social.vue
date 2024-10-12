<template>
    <div class="social">
        <div class="social__block">
            <div class="social__message">
                <p>Следите за нами в соц сетях!</p>
            </div>

            <div class="social__wrapper">
                <div class="social__wrapper__item">
                    <img src="/youtube.svg" alt="youtube" />
                </div>
                <div class="social__wrapper__item">
                    <img src="/vkontakte.svg" alt="vk" />
                </div>
                <div class="social__wrapper__item">
                    <img src="/telegram.svg" alt="telegram" />
                </div>
            </div>
        </div>

        <div class="social__image-background"></div>
    </div>
</template>

<style lang="scss">
.social {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    background: linear-gradient(
        252.44deg,
        rgba(199, 243, 219, 0.8) 0%,
        rgba(86, 241, 206, 0) 50%
    );
    box-shadow: 0px 8px 24px 20px rgba(192, 217, 233, 0.6);
    border: 20px solid #c1faed;
    border-radius: 120px;
    margin: 20px 0;
    position: relative;
    @media (max-width: 992px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__block {
        padding: 20px;
        display: flex;
        @media (max-width: 992px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    &__message {
        flex-shrink: 0;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 40px;
        @media (max-width: 992px) {
            padding-left: 10px;
        }
        & p {
            font-family: Montserrat;
            font-size: 40px;
            font-weight: 600;
            line-height: 56px;
            @media (max-width: 1500px) {
                font-size: 30px;
                line-height: 40px;
                font-weight: 600;
            }
        }
    }
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        gap: 40px;
        @media (max-width: 768px) {
            gap: 20px;
        }
        &__item {
            width: 80px;
            height: 80px;
            @media (max-width: 768px) {
                width: 60px;
                height: 60px;
            }
            & img {
                width: 100%;
                object-fit: cover;
            }
        }
    }
    &__image-background {
        background-image: url('/background.png');
        background-size: contain;
        background-position: right bottom;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1;
        @media (max-width: 1320px) {
            z-index: -1;
        }
        @media (max-width: 992px) {
            display: none;
        }
    }
}
</style>
