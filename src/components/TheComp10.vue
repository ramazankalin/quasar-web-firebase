<template>
  <div
    class="q-pa-md"
    style="
      text-align: center;
      margin-top: 30px;
      font-family: 'Verona-Regular', sans-serif;
    "
  >
    <h
      style="
        font-size: 25px;
        text-decoration-line: underline;
        font-family: 'Times New Roman', Times, serif;
      "
      >Dünya Kahveleri</h
    >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="none"
      padding
      arrows
      height="600px"
      width="200px"
      class="bg-white-9"
      autoplay
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          style="margin-left: 60px"
        >
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg"
            />
            <p>Costa Rica(Filtre Kahve)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg"
            />
            <p>Ethiopia(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg"
            />
            <p>Guatemala(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg"
            />
            <p>Blend(Filtre Kahve )<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          style="margin-left: 60px"
        >
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg"
            />
            <p>Ethiopia(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg"
            />
            <p>Guatemala(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg"
            />
            <p>Blend(Filtre Kahve )<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg"
            />
            <p>Costa Rica(Filtre Kahve)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          style="margin-left: 60px"
        >
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg"
            />
            <p>Guatemala(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg"
            />
            <p>Blend(Filtre Kahve )<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg"
            />
            <p>Costa Rica(Filtre Kahve)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg"
            />
            <p>Ethiopia(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          style="margin-left: 60px"
        >
          <q-card class="card-no-border">
            <q-img
              style="width: 200px; text-align: center"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/blend-filtre-kahve-250-gr--46e0-.jpg"
            />
            <p>Blend(Filtre Kahve )<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/costa-rica-filtre-kahve-250-gr-478-67.jpg"
            />
            <p>Costa Rica(Filtre Kahve)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/ethiopia-filtre-kahve-cekirdegi-250-gr-4549-b.jpg"
            />
            <p>Ethiopia(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
          <q-card class="card-no-border">
            <q-img
              style="width: 200px"
              class="rounded-borders col-3"
              src="https://static.ticimax.cloud/cdn-cgi/image/width=182,quality=85,format=auto/2571/uploads/urunresimleri/buyuk/guatemala-filtre-kahve-cekirdegi-250-g-d6-a34.jpg"
            />
            <p>Guatemala(Filtre Kahve Çekirdeği)<br />250 Gr <br />₺205,00</p>
            <ul>
              <q-btn
                style="
                  background-color: bisque;
                  text-decoration-color: #cbab60;
                  width: 150px;
                  margin-left: auto;
                "
                class="custom-button-2"
              >
                <p class="button-text">Sepete Ekle</p>
              </q-btn>
            </ul>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
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
