<template>
    <button class="button">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    background-color: $button-color;
    color: $white;
    border-radius: 40px;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    // padding: 20px;
    padding: 1.2rem 7.7rem;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 28px;
        font-weight: 700;
        line-height: 33.6px;
    }
    &:hover {
        background: rgba(255, 255, 255, 1);
        color: $gray;
    }
}
</style>
