<script setup>
import { computed } from '#imports'
const props = defineProps({
    price: String,
    text: String,
    color: String,
    small: Boolean
})

const labelColor = computed(() => {
    return props.color
})
</script>

<template>
    <div class="label" :style="{ backgroundColor: labelColor }">
        <span class="label__price"
        :class="[small ? 'label__price_small-size' : '']">{{ price }}</span>
        <span class="label__text">{{ text }}</span>
    </div>
</template>

<style lang="scss" scoped>
.label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1px;
    color: $white;
    border-radius: 60px;
    padding-top: 25px;
    padding-right: 35px;
    padding-bottom: 45px;
    padding-left: 35px;
    max-width: 263px;
    white-space: nowrap;
    box-shadow: 2px 2px 20px 12px rgba(192, 217, 233, 0.6);
    @media (max-width: 1440px) {
            max-width: 100%;
            padding-top: 25px;
            padding-right: 45px;
            padding-bottom: 45px;
            padding-left: 25px; 
        }
    @media (max-width: 768px) {
        max-width: 100%;
        // padding: 15px;
    }
    @media (max-width: 400px) {
        max-width: 100%;
        padding: 12px;
    }
    &__price {
        font-size: 60px;
        font-weight: 700;
        line-height: 84px;

        &_small-size {
            font-size: 52px;
            font-weight: 700;
            line-height: 72.8px;
            @media (max-width: 768px) {
            font-size: 24px;
            line-height: 28px;
        }
        }
        @media (max-width: 768px) {
                font-size: 40px;
                font-weight: 700;
                line-height: 56px;
        }
        @media (max-width: 400px) {
font-size: 20px;
font-weight: 700;
line-height: 20px;
        }
    }
    &__text {
        font-size: 28px;
        font-weight: 700;
        line-height: 39.2px;
        @media(max-width: 768px) {
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
        }
        @media (max-width: 400px) {
font-size: 16px;
font-weight: 700;
line-height: 16px;


        }
    }
}
</style>
