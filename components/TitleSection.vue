<template>
    <h3 class="title-section">
        <slot />
    </h3>
</template>

<style lang="scss" scoped>
.title-section {
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    text-align: left;
    @media (max-width: 992px) {
        text-align: center;
    }
    @media (max-width: 768px) {
        font-size: 40px;
        line-height: 50px;
    }
}
</style>