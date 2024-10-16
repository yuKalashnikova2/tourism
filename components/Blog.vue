<script setup>
import { ref } from 'vue'
const windowWidth = ref('')

onMounted(() => {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth
    })
})
</script>
<template>
    <div class="blog" id="blog" v-if="windowWidth >= 768">
        <TitleSection>Наш блог</TitleSection>
        <div class="blog__wrapper">
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
    <BlogMobile v-else>
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
    </BlogMobile>
</template>

<style lang="scss" scoped>
.blog {
    &__wrapper {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        @media (max-width: 992px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
