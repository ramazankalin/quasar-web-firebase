<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Verona-Regular', sans-serif;
    "
  >
    <q-img
      style="max-width: 430px; max-height: 570px; margin-top: 90px"
      src="https://static.ticimax.cloud/cdn-cgi/image/width=570,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-turk-kahvesi-100gr-b82f-7.jpg"
    ></q-img>
    <div
      style="
        width: 560px;
        height: 240px;
        margin-left: 100px;
        margin-top: -350px;
        font-weight: bold;
        font-size: medium;
      "
    >
      <span
        >Artukbey Türk Kahvesi 100gr<br />
        Stok Kodu:(ART00105010001)<br />
        <q-link class="link-stil-2">Marka : ARTUKBEY</q-link>
        <br />
        <p style="color: #cbab60; font-size: x-large">₺35,00</p>

        <p style="font-size: small">
          Bu ürünün yanında bunları da tavsiye ediyoruz.
        </p></span
      >
      <div>
        <router-link to="/kahveçeşit"
          ><q-img
            src="https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/artukbey-damla-sakizli-turk-kahvesi-10-15a-48.jpg"
            style="width: 80px; height: 105px"
          >
          </q-img
          ><q-img
            style="width: 80px; height: 105px"
            src="https://static.ticimax.cloud/cdn-cgi/image/width=270,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/special-menengic-dibek-kahvesi-250gr-5c-8b6.jpg"
          ></q-img>
        </router-link>
      </div>
      <div style="display: flex">
        <div style="border: solid 1px #cbab60; display: flex">
          <q-btn @click="updateModel(false)" label="-" flat />
          <q-input
            v-model.number="model"
            type="number"
            filled
            style="text-align: center; margin-top: 5px"
          />
          <q-btn @click="updateModel(true)" label="+" flat />
        </div>
        <div>
          <router-link to="/signin">
            <q-btn
              style="
                width: 350px;
                height: 70px;
                background-color: #cbab60;
                color: white;
                margin-left: 50px;
              "
              ><p style="text-align: center">Sepete Ekle</p></q-btn
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
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
.link-stil-2 {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.gönder {
  background-color: white;
  color: black;
}
.gönder:hover {
  background-color: black;
  color: white;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 350px;
  font-family: 'Verona-Regular', sans-serif;
}
.col-4 {
  color: white;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.q-link-3 {
  text-decoration: none;
  cursor: pointer;
  font-family: 'Verona-Regular', sans-serif;
}
.q-link-3:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
const model = ref(1);

const updateModel = (isIncrement: boolean) => {
  model.value = isIncrement ? model.value + 1 : model.value - 1;
};
</script>
