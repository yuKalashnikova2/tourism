<script setup>
import { ref } from 'vue'
const questions = ref([
    {
        id: 1,
        title: 'Почему выбирают лечиться в Турции?',
        info: 'Лечение в Турции привлекает высоким качеством медицинских услуг и доступными ценами. Здесь вы найдете широкий спектр процедур, комфортные условия и русскоязычный персонал. А также сможете совместить лечение и отдых на красивых курортах.',
        expanded: false,
    },
    {
        id: 2,
        title: 'Сколько стоит лечение в Турции?',
        info: 'Стоимость медицинских услуг в Турции очень индивидуальна и зависит от конкретной процедуры, клиники и дополнительных услуг. Чтобы получить точную информацию о ценах, вы можете записаться на бесплатную консультацию.',
        expanded: false,
    },
    {
        id: 3,
        title: 'Какие документы нужны для лечения?',
        info: 'Для получения медицинских услуг в Турции вам понадобится только загранпаспорт. Дополнительные документы могут потребоваться на этапе консультации.',
        expanded: false,
    },
    {
        id: 4,
        title: 'Сколько времени занимает реабилитация после операций?',
        info: 'Время восстановления после операции варьируется в зависимости от процедуры и индивидуальных факторов. Обычно реабилитация занимает от 1 до 4 недель. Примерные сроки реабилитации вы можете узнать на бесплатной консультации с врачом и консультантом.',
        expanded: false,
    }
])
</script>
<template>
    <div class="question">
        <TitleSection>Популярные вопросы</TitleSection>
        <div class="question__wrapper">
        <Question
            v-for="question in questions"
            :key="question.id"
            :title="question.title"
            :info="question.info"
            :expanded="question.expanded"
            @update:expanded="question.expanded = $event"
        />
    </div>
    </div>
 
</template>

<style scoped lang="scss">
.question__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 40px;
}

</style>
