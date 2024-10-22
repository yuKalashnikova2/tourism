<template>
    <button class="button">
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
    // padding: 20px;
    padding: 1.2rem 7.7rem;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 28px;
        font-weight: 700;
        line-height: 33.6px;
        padding: 1.2rem 2.7rem;
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
        // color: $gray;
    }
}
</style>
