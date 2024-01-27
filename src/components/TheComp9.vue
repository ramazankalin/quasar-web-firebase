<template>
  <div
    class="q-pa-md"
    style="font-family: 'Verona-Regular', sans-serif; margin-top: -30px"
  >
    <q-carousel
      v-model="slide"
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="black"
      padding
      arrows
      height="600px"
      class="bg-white-9"
    >
      <q-carousel-slide :name="1">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            style="
              width: 1600px;
              margin-left: auto;
              margin-right: auto;
              font-family: 'Verona-Regular', sans-serif;
            "
            src="https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99,format=auto/2571/uploads/sayfatasarim/sayfa1/dunya-kahveleri-ee81.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            style="
              width: 1600px;
              margin-left: auto;
              margin-right: auto;
              font-family: 'Verona-Regular', sans-serif;
            "
            src="https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99,format=auto/2571/uploads/sayfatasarim/sayfa1/dunya-kahveleri-eafd.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            style="
              width: 1600px;
              margin-left: auto;
              margin-right: auto;
              font-family: 'Verona-Regular', sans-serif;
            "
            src="https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99,format=auto/2571/uploads/sayfatasarim/sayfa1/dunya-kahveleri-d250.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            style="
              width: 1600px;
              margin-left: auto;
              margin-right: auto;
              font-family: 'Verona-Regular', sans-serif;
            "
            src="https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99,format=auto/2571/uploads/sayfatasarim/sayfa1/kahveler-artukbeyden-hatiri-sizden-1bcd.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            style="
              width: 1600px;
              margin-left: auto;
              margin-right: auto;
              font-family: 'Verona-Regular', sans-serif;
            "
            src="https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99,format=auto/2571/uploads/sayfatasarim/sayfa1/dunya-kahveleri-500f.jpg"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <div
    class="q-pa-md example-row-flex-order"
    style="
      text-align: center;
      margin-top: 40px;
      margin-left: auto;
      margin-right: auto;
      font-family: 'Verona-Regular', sans-serif;
    "
  >
    <div class="row">
      <div class="col order-second">
        <img
          src="https://static.ticimax.cloud/cdn-cgi/image/width=23,quality=99,format=auto/2571/customcss/images/g22.png"
        />
        %100 GÜVENLİ<br />ÖDEME SİSTEMİ
      </div>
      <div class="col order-third">
        <img
          src="https://static.ticimax.cloud/cdn-cgi/image/width=27,quality=99,format=auto/2571/customcss/images/g44.png"
        />
        CANLI DESTEK <br />0850 888 78 00
      </div>
      <div class="col order-first">
        <img
          src="https://static.ticimax.cloud/cdn-cgi/image/width=43,quality=99,format=auto/2571/customcss/images/g11.png"
        />
        500 TL ÜZERİ <br />ÜCRETSİZ KARGO
      </div>
      <div button class="col order-fourth">
        <img
          src="https://static.ticimax.cloud/cdn-cgi/image/width=43,quality=99,format=auto/2571/customcss/images/g11.png"
        />
        TÜM TÜRKİYE'YE <br />
        KARGO
      </div>
      <div class="col order-last">
        <img
          src="https://static.ticimax.cloud/cdn-cgi/image/width=23,quality=99,format=auto/2571/customcss/images/g22.png"
        />
        BİR ASRIN ÜZERİNDE<br />TİCARİ TECRÜBEMİZLE
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
.q-card {
  margin-inline-start: 100px;
  margin-top: 50px;
  margin-inline-end: 30px;
  margin-left: 80px;
}

.custom-button-2 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;

  margin-block-end: 100px;
  margin-right: 10%;
}
.custom-button-3 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;
  margin-block-end: 100px;
  margin-right: 10%;
}
.custom-button-4 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;
  margin-block-end: 100px;
  margin-right: 10%;
}
.custom-button-5 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cbab60;
  transition: background-color 0.3s, color 0.3s;
  margin-block-end: 100px;
  margin-right: 10%;
}

.button-text {
  margin-top: 8px;
  color: #cbab60;
}

.custom-button-2:hover {
  background-color: #cbab60;
}

.custom-button-2:hover .button-text {
  color: white;
}
.card-no-border {
  border: none;
  box-shadow: 0 0 0;
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
const slide = ref(1);
</script>
