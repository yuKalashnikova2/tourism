<template>
    <h2 class="title-section">
        <slot />
    </h2>
</template>

<style lang="scss" scoped>
.title-section {
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
    }
    @media (max-width: 500px) {
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
    }
}
</style>
