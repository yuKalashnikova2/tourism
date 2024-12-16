<script setup>
const props = defineProps({
    backgroundImage: String
})
</script>

<template>
    <div class="form__services"
    :style="{ backgroundImage: `url(${props.backgroundImage})` }">
        <div class="form__services__title">
            Запишись на бесплатную консультацию до конца осени!
        </div>
        <span class="form__services__subtitle mt-20"
            >мы подберём лучшее решение и ответим на все вопросы!</span
        >

        <Button class="form__services__btn" @click="openModal('banner')"
            >Записаться</Button
        >
        <div class="form__services__labels mobiles">
            <LabelPrice
                small
                colorGray
                whiteShadow
                withAuto

                price="0 руб."
                text="Предоплаты"
                color="rgba(255, 255, 255, 0.8)
"
            />
            <LabelPrice
                small
                colorGray
                whiteShadow
                withAuto
                price="Онлайн"
                text="Поддержка"
                color="rgba(255, 255, 255, 0.8)"
            />
            <LabelPrice
                small
                colorGray
                withAuto
                price="100%"
                text="Гарантия"
                color="rgba(255, 255, 255, 0.8)"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.form__services {
    // background-image: url('../public/sc.jpeg');
    border-radius: 60px;
    color: $white;
    padding: 60px 60px 40px 60px;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    position: relative;
    z-index: 10;
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
        border-radius: 60px;
        background: linear-gradient(
            0deg,
            rgba(32, 32, 32, 0.56),
            rgba(32, 32, 32, 0.56)
        );

        pointer-events: none;
    }
    &__title {
        font-family: Montserrat;
        font-size: 56px;
        font-weight: 600;
        line-height: 78.4px;
    }
    &__subtitle {
        font-family: Manrope;
        font-size: 32px;
        font-weight: 400;
        line-height: 38.4px;
        margin-top: 20px;
    }
    &__btn {
        width: 100%;
        margin-top: 60px;
        margin-bottom: 40px;
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
    }
}
</style>
