<script setup>
import { computed } from 'vue'
const props = defineProps({
    title: String,
    title2: String,
    desc: String,
    color: String,
})
const styleBackground = computed(() => {
    if (props.color === '#4245D7') {
        return 'stages-card__desc_background-purple'
    } else if (props.color === '#67CFB8') {
        return 'stages-card__desc_background-green'
    } else if (props.color === '#429FD7') {
        return 'stages-card__desc_background-blue'
    } else if (props.color === '#D742BC') {
        return 'stages-card__desc_background-pink'
    }
})
</script>
<template>
    <div class="stages-card">
        <div class="stages-card__title" :style="{ backgroundColor: color }">
            <h3>{{ title }}<br>{{ title2 }}</h3>
        </div>
        <div class="stages-card__desc" :class="styleBackground">
            <div>{{ desc }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.stages-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin: 20px 30px;
    border-radius: 60px;
    box-shadow: 2px 8px 16px 0px rgba(188, 188, 188, 1);

    &__title {
        color: $white;
        padding: 20px;
        border-top-right-radius: 60px;
        border-top-left-radius: 60px;
        width: 100%;
        text-align: center;
        & h3 {
            font-weight: 700;
            font-size: 40px;
            line-height: 56px;
            margin: 0;
            @media (max-width: 768px) {
                font-size: 28px;
                font-weight: 700;
                line-height: 39.2px;
            }
        }
    }
    &__desc {
        height: 100%;
        font-weight: 400;
        font-size: 26px;
        line-height: 39px;
        letter-spacing: 2%;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
        padding: 20px 20px 20px 40px;
        @media (max-width: 768px) {
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
        }
        &_background-purple {
            background: linear-gradient(
                252.44deg,
                rgba(199, 202, 243, 0.8) 0%,
                rgba(199, 202, 243, 0) 50%
            );
        }
        &_background-green {
            background: linear-gradient(
                252.44deg,
                rgba(199, 243, 219, 0.8) 0%,
                rgba(86, 241, 206, 0) 50%
            );
        }
        &_background-blue {
            background: linear-gradient(
                252.44deg,
                rgba(199, 241, 243, 0.8) 0%,
                rgba(66, 159, 215, 0) 50%
            );
        }
        &_background-pink {
            background: linear-gradient(
                252.44deg,
                rgba(236, 199, 243, 0.8) 0%,
                rgba(215, 66, 188, 0) 50%
            );
        }
    }
}
</style>
