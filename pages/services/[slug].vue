<template>
    <div>
      <h1>Страница услуги: {{ slug }}</h1>
      <p>Вы находитесь на странице услуги: {{ slug }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute(); 
  const slug = route.params.slug;
  </script>