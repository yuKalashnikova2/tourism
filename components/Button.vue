<script setup>
const props = defineProps({
    small: Boolean,
})
</script>

<template>
    <button :class="['button', small ? 'button_small' : '']">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    font-family: $font-1;
    background: linear-gradient(
            287.56deg,
            rgba(86, 241, 206, 0) 50%,
            rgba(86, 241, 206, 0.4) 100%
        ),
        linear-gradient(
            252.44deg,
            rgba(86, 241, 206, 0.4) 0%,
            rgba(86, 241, 206, 0) 50%
        ),
        linear-gradient(
            180deg,
            rgba(215, 66, 188, 0) 50%,
            rgba(215, 66, 188, 0.06) 100%
        ),
        linear-gradient(0deg, #67c7cf, #67c7cf);

    color: $white;
    border-radius: 40px;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    padding: 1.2rem 7.7rem;
    cursor: pointer;
    &_small {
        color: $gray;
        font-size: 28px;
        font-weight: 700;
        line-height: 33.6px;
        padding: 1.2rem 2.7rem;
        background: $white;
        &:hover {
            cursor: pointer;
            background: linear-gradient(
                    287.56deg,
                    rgba(86, 241, 206, 0) 50%,
                    rgba(66, 159, 215, 0.6) 100%
                ),
                linear-gradient(
                    252.44deg,
                    rgba(66, 159, 215, 0.6) 0%,
                    rgba(86, 241, 206, 0) 50%
                ),
                linear-gradient(
                    180deg,
                    rgba(215, 66, 188, 0) 50%,
                    rgba(215, 66, 188, 0.12) 100%
                ),
                linear-gradient(0deg, #67c7cf, #67c7cf) !important;
            color: $white;
        }
          @media (max-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        padding: 1.2rem 2.7rem;
    }
    }
    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 38.4px;
        padding: 1.2rem 2.7rem;
    }
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        padding: 0.75rem 2.7rem;
    }
    &:hover {
        background: linear-gradient(
                287.56deg,
                rgba(86, 241, 206, 0) 50%,
                rgba(66, 159, 215, 0.6) 100%
            ),
            linear-gradient(
                252.44deg,
                rgba(66, 159, 215, 0.6) 0%,
                rgba(86, 241, 206, 0) 50%
            ),
            linear-gradient(
                180deg,
                rgba(215, 66, 188, 0) 50%,
                rgba(215, 66, 188, 0.24) 100%
            ),
            linear-gradient(0deg, #67c7cf, #67c7cf);
    }
    @media (max-width: 768px) {
    }
}
</style>
