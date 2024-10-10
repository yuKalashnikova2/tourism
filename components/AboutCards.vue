<script setup>
const props = defineProps({
    title: String,
    desc: String,
})
</script>
<template>
    <div class="about-card">
        <div class="about-card__image">
            <img src="/about-icon.svg" alt="about" />
        </div>
        <div>
            <div class="about-card__title">{{ title }}</div>
            <span class="about-card__desc">{{ desc }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.about-card {
    display: flex;
    align-items: center;
    gap: 20px;
    &__image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 1px 2px 12px 0px #7388a966;
        padding: 18px 13px;
        & img {
            width: 100%;
        }
    }
    &__title {
        font-family: $font-2;
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 30px;
            line-height: 38px;
        }
    }
    &__desc {
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 16px;
            line-height: 24px;
        }
    }
}
</style>
