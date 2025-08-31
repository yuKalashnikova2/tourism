<script setup>
import { ref } from "vue";
const windowWidth = ref("");

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>
<template>
  <div>
    <TitleSection>Наш блог</TitleSection>
    <div class="blog" id="blog" v-if="windowWidth >= 1460">
      <div class="blog__wrapper-d">
        <BlogVideoCard
          video="https://vkvideo.ru/video_ext.php?oid=-226278677&id=456239049&hd=2&autoplay=1&mute=1"
        />
        <BlogVideoCard
          video="https://vkvideo.ru/video_ext.php?oid=-226278677&id=456239040&hd=2&autoplay=1&mute=1"
        />
        <BlogVideoCard
          video="https://vkvideo.ru/video_ext.php?oid=-226278677&id=456239033&hd=2&autoplay=1&mute=1"
        />
        <BlogVideoCard
          video="https://vkvideo.ru/video_ext.php?oid=-226278677&id=456239033&hd=2&autoplay=1&mute=1"
        />
      </div>
    </div>
    <BlogMobile v-else />
  </div>
</template>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  &__wrapper-d {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>
