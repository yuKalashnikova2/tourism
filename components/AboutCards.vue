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
    @media (max-width: 400px) {
            gap: 16px;
        }
    &__image {
        border-radius: 50%;
    box-shadow: 1px 2px 12px #7388a966;
    height: 60px;
    padding: 18px 13px;
    width: 60px;
    flex-shrink: 0;
        & img {
            width: 100%;
        }
        @media (max-width: 400px) {
            width: 40px;
            height: 40px;
        }   
    }
    &__title {
        font-family: $font-2;
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 28px;
            line-height: 28px;
        }
        @media (max-width: 400px) {
            font-size: 20px;
            line-height: 20px;
        }
    }
    &__desc {
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 20px;
            line-height: 20px;
        }
        @media (max-width: 400px) {
            font-size: 16px;
            line-height: 16px;
        }
    }
}
</style>
