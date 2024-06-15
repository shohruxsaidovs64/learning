<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const {locale, t} = useI18n()
const locales = ['en', 'ru', 'uz']


const handleChangeLanguage = () => {
  localStorage.setItem('locale', locale.value)
}

</script>

<template>

  <h1>{{$t('hello')}}</h1>

  <h2>{{$t('myPhone', {phone: "9989878787878"})}}</h2>

  {{$t('productCount', {count: 4})}}

  <select @change="handleChangeLanguage" v-model="locale">
    <option v-for="locale in locales" :key="locale">{{locale}}</option>
  </select>
</template>
