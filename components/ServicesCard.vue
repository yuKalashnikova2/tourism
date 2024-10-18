<script setup>
const props = defineProps({
    title: String,
    desc: String,
    borderColor: String,
    backgroundImage: String,
})
</script>
<template>
    <div
        class="services-card_border-opacity_br"
        :class="`services-card_border-opacity-${borderColor}`"
    >
        <div class="services-card_border services-card_border-opacity">
            <div
                class="services-card"
                :style="{ backgroundImage: `url(${props.backgroundImage})` }"
            >
                <div class="services-card__title">{{ title }}</div>
                <div class="services-card__desc">{{ desc }}</div>
                <Button class="services-card__button">Узнать</Button>
            </div>
        </div>

        <!-- </div> -->
    </div>
</template>

<style lang="scss" scoped>
.services-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border-radius: 120px;
    position: relative !important;
    width: 100%;
    // top: 100;
    z-index: 10 !important;
    color: $white;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    padding: 40px 20px 60px 40px;
    height: 365px;
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
        border-radius: 120px;
        background-color: rgba(32, 32, 32, 0.56);
    }
    @media (max-width: 1500px) {
        // height: 302px;
    }
    @media (max-width: 992px) {
        padding: 90px 23px 50px 15px;
    }
    @media (max-width: 768px) {
        margin: 0;
    }
    &__title {
        font-weight: 600;
        font-size: 38px;
        line-height: 40px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
        margin-bottom: 8px;
    }
    &__desc {
        font-weight: 400;
        font-size: 28px;
        line-height: 33.6px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    &__button {
        background-color: $white;
        color: $gray;
        font-size: 28px;
        margin-top: auto;
        padding-bottom: 10px;
    }
    &_border {
        min-width: 405px;
        border-radius: 120px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 20px 0px #bcbcbc;
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
                    rgba(86, 241, 206, 0.8) 0%,
                    rgba(66, 159, 215, 0) 50%
                ),
                linear-gradient(
                    180deg,
                    rgba(215, 66, 188, 0) 50%,
                    rgba(215, 66, 188, 0.12) 100%
                );
            opacity: 0.4;
            z-index: -1;
            border-radius: 120px;
        }

        @media (max-width: 1550px) {
            min-width: 100%;
        }
        &-opacity_br {
            border-radius: 120px;
        }
        &-opacity-1 {
            background: #c7caf3;
            position: relative;
            z-index: -1 !important;
        }
        &-opacity-2 {
            background: #c7f3db;
            position: relative;
            z-index: -1 !important;
        }
        &-opacity-3 {
            background: #c7f1f3;
            position: relative;
            z-index: -1 !important;
        }
        &-opacity-4 {
            background: #ecc7f3;
            position: relative;
            z-index: -1 !important;
        }
    }
}
</style>
