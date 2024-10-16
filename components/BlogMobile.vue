<template>
    <div class="blog__wrapper">
        <TitleSection class="left">Наш блог</TitleSection>
        <div class="blog__video-container">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.blog__wrapper {
    overflow-x: auto;
    overflow-y: hidden;
}

.blog__video-container {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    height: 100%;
}

.blog__video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
}
.left {
    text-align: left;
}
</style>
