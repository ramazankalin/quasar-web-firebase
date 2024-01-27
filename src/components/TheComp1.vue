<template>
  <q-toolbar class="q-pa-md" style="background-color: white; margin-top: auto">
    <q-link style="cursor: pointer">
      <router-link to="/"
        ><q-avatar style="width: 130px; height: 106px">
          <img
            src="https://static.ticimax.cloud/2571/uploads/editoruploads/resimlerim/100x100.jpg"
          /> </q-avatar
      ></router-link>
    </q-link>
    <q-link class="custom-button"
      >Kahve
      <q-menu>
        <q-list
          style="
            background-color: #cbab60;
            color: white;
            width: 470px;
            height: 250px;
          "
        >
          <router-link
            to="/kahveçeşit"
            style="color: white; text-decoration: none"
            ><q-item
              v-for="item in kahveItems"
              :key="item"
              clickable
              v-close-popup
              >{{ item }}</q-item
            ></router-link
          >
        </q-list>
      </q-menu>
    </q-link>

    <q-link class="custom-button">Lokum Çeşitleri</q-link>

    <q-link class="custom-button">Organik Ürünler</q-link>

    <q-link class="custom-button">Çay</q-link>

    <router-link to="/blog" style="color: black; text-decoration: none"
      ><q-link class="custom-button">Blog</q-link></router-link
    >

    <q-link class="custom-button">Franchise Başvuru</q-link>

    <q-link class="custom-button">KVKK</q-link>

    <router-link to="/sipariştakip" style="color: black; text-decoration: none"
      ><q-link class="custom-button">Sipariş Takip</q-link></router-link
    >

    <q-input
      v-model="ph"
      placeholder="Arama"
      :dense="dense"
      style="margin-left: auto"
    />

    <router-link to="/signin" style="color: black; text-decoration: none"
      ><q-link class="custom-button">ÜYE GİRİŞİ</q-link></router-link
    >

    <q-link class="custom-button">ÜYE OL</q-link>

    <router-link to="/sepetim" style="text-decoration: none"
      ><q-link class="custom-button">SEPETİM </q-link></router-link
    >
  </q-toolbar>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>
<style>
.custom-button {
  transition: color 0.3s;
  text-transform: capitalize;
  font: 13px;
  font-weight: bolder;
  cursor: pointer;
  padding: 15px;
  font-family: 'Verona-Regular', sans-serif;
  color: black;
}
.custom-button:hover {
  color: #cbab60;
}
.q-item {
  font-family: 'Verona-Regular', sans-serif;
}
.q-item:hover {
  text-decoration: underline;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
const ph = ref('');
const dense = ref(false);
const kahveItems = ref([
  'Kahve Çeşitleri',
  'Dibek Kahveleri',
  'Yöresel Filtre Kahve',
  'Hazır Kahve & Setler',
]);
</script>
