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
    padding: 1.2rem 7.7rem;
    cursor: pointer;
    // @media (max-width: 1800px) {
    //     font-size: 30px;
    //     line-height: 38px;
    //     padding: 1.2rem 3.5rem;
    // }
    // @media (max-width: 1200px) {
    //     font-size: 30px;
    //     line-height: 38px;
    //     padding: 1.2rem 3.5rem;
    // }
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 28px;
        padding: 1.2rem 3.5rem;
    }
    &:hover {
        background-color: #7ed5dd;
    }
}
</style>
