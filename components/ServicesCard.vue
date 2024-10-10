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
        class="services-card_border"
        :class="`services-card_border-${borderColor}`"
    >
        <div
            class="services-card"
            :style="{ backgroundImage: `url(${props.backgroundImage})` }"
        >
            <div class="services-card__title">{{ title }}</div>
            <div class="services-card__desc">{{ desc }}</div>
            <Button class="services-card__button">Узнать</Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.services-card {
    max-width: 405px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border-radius: 120px;
    position: relative;
    width: 100%;
    z-index: 2;
    color: $white;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    padding: 40px 20px 60px 40px;
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
    &__title {
        font-weight: 600;
        font-size: 43px;
        line-height: 56px;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
    }
    &__desc {
        font-weight: 400;
        font-size: 28px;
        line-height: 33.6px;
        margin-bottom: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &__button {
        background-color: $white;
        color: $gray;
        font-size: 28px;
        margin-top: auto;
        padding-bottom: 10px;
        &:hover {
            color: $white;
            background-color: $gray;
        }
    }
    &_border {
        border-radius: 120px;
        overflow: hidden;
    }
    &_border-4 {
        background: linear-gradient(180deg, #d742bc00 0%, #d742bc1f 12%);
    }
    &_border-3 {
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
    }
    &_border-2 {
        background: #c7f3db;
    }
    &_border-1 {
        background-color: #c7caf3;
    }
}
</style>
