<script setup>
const props = defineProps({
    icon: String,
    subtitle: String,
    name: String,
    href: String,
})
</script>

<template>
    <div class="contacts__phone">
        <div class="contacts__phone__icon">
            <img :src="icon" :alt="name" />
        </div>
        <div class="contacts__phone__wrapper">
            <span class="contacts__phone__subtitle">{{ subtitle }}</span>

            <a :href="href" class="contacts__phone__name">{{ name }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contacts__phone {
    display: flex;
    align-items: center;
    gap: 12px;

    &__wrapper {
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: center;
        @media (max-width: 992px) {
            flex-direction: column;
            align-items: baseline;
        }
    }

    &__icon {
        width: 40px;
        // height: 40px;
        flex-shrink: 0;
        & img {
            width: 100%;
            object-fit: cover;
        }
    }
    &__subtitle {
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 20px;
            font-weight: 700;
            line-height: 20px;
        }
    }
    &__name {
        font-size: 28px;
        font-weight: 500;
        line-height: 39.2px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
        }
    }
}
</style>
