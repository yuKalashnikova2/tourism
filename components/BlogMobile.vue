<template>
    <div class="blog__wrapper">
        <!-- <TitleSection class="left">Наш блог</TitleSection> -->
        <div class="blog__video-container">
            <!-- <slot /> -->
            <BlogVideoCard
            video="https://www.youtube.com/embed/KRRKdk9Jf_s?autoplay=1&mute=1"
        />
        <BlogVideoCard
            video="https://youtube.com/embed/-J48C26AM3I?autoplay=1&mute=1"
        />
        <BlogVideoCard
            video="https://youtube.com/embed/RjtwFyucTR4?autoplay=1&mute=1"
        />
        <BlogVideoCard
            video="https://youtube.com/embed/LxINvpQbYo4?autoplay=1&mute=1"
        />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog__wrapper {
    // display: flex;
    // flex-direction: column;
    // gap: 40px;
    overflow-x: auto;
    overflow-y: hidden;

    @media(max-width: 768px) {
        gap: 20px;
    }
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
