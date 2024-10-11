<script setup>
import { computed } from '#imports'
const props = defineProps({
    price: String,
    text: String,
    color: String,
})

const labelColor = computed(() => {
    return props.color
})
</script>

<template>
    <div class="label" :style="{ backgroundColor: labelColor }">
        <span class="label__price">{{ price }}</span>
        <span class="label__text">{{ text }}</span>
    </div>
</template>

<style lang="scss" scoped>
.label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $white;
    border-radius: 60px;
    padding: 35px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 15px;
    }
    &__price {
        font-weight: 700;
        font-size: 51px;
        line-height: 84px;

        @media (max-width: 1520px) {
            font-size: 40px;
            line-height: 56px;
        }

        @media (max-width: 768px) {
            font-size: 24px;
            line-height: 28px;
        }
    }
    &__text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }
}
</style>
