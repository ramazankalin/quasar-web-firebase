<template>
  <div>
    <div class="box1">
      <h6 style="text-align: center">Üye Girişi</h6>
      <div
        class="q-gutter-y-md column"
        style="
          margin-left: 50px;
          font-family: 'Verona-Regular', sans-serif;
          width: 500px;
        "
      >
        <q-input
          style="width: 500px"
          square
          outlined
          v-model="email"
          placeholder="E-Posta"
        ></q-input>
        <q-input
          style="width: 500px"
          square
          outlined
          v-model="password"
          placeholder="Şifre"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
          <template v-slot:hint> Field hint </template>
        </q-input>
      </div>

      <div>
        <router-link to="/sepetim">
          <button
            style="width: 500px"
            class="Girisyap"
            @mouseover="changeColor2(true)"
            @mouseout="changeColor2(false)"
            :style="{ backgroundColor: buttonColor }"
          >
            <h
              style="
                color: aliceblue;
                font-family: 'Verona-Regular', sans-serif;
              "
              >Giriş Yap</h
            >
          </button>
        </router-link>
      </div>
      <q-btn
        flat
        style="
          background-color: white;
          text-decoration-line: underline;
          margin-left: 400px;
          text-transform: capitalize;
          font-family: 'Verona-Regular', sans-serif;
        "
        >Şifremi unuttum</q-btn
      >
    </div>
    <div
      class="box2"
      style="
        background-color: white;
        font-family: 'Verona-Regular', sans-serif;
        margin-top: 20px;
      "
    >
      <h6 style="text-align: center; width: 500px">Hızlı Üyelik</h6>
      <div class="q-gutter-y-md column" style="margin-left: auto">
        <q-input
          square
          outlined
          v-model="ad"
          placeholder="Adınız"
          style="width: 500px"
        ></q-input>
        <q-input
          style="width: 500px"
          square
          outlined
          v-model="soyad"
          placeholder="Soyadınız"
        ></q-input>
        <q-input
          style="width: 500px"
          square
          outlined
          v-model="hizliEmail"
          placeholder="e-posta"
        >
          <template v-slot:hint> Field hint </template>
        </q-input>
        <q-input
          style="width: 500px"
          square
          outlined
          v-model="hizliSifre"
          placeholder="Şifre"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
          <template v-slot:hint> Field hint </template>
        </q-input>
        <q-input style="width: 500px" square outlined prefix="+90">
          <template v-slot:before>
            <div
              class="q-pa-md"
              style="
                margin-left: -15px;
                padding-right: 0%;
                height: 70px;
                width: 100px;
              "
            >
              <q-btn-dropdown
                split
                background-color="white"
                no-caps
                icon="flag"
                icon-color="red"
                @click="onMainClick"
              >
                <q-list>
                  <q-item
                    clickable
                    v-close-popup
                    style="background-color: white"
                  >
                    <q-item-section avatar>
                      <q-img
                        src="https://kilavuzgorsel.com.tr/wp-content/uploads/2019/11/4.jpg?v=1634813345"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Azerbaijan +994</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    style="background-color: white"
                  >
                    <q-item-section avatar>
                      <q-img
                        src="https://blog.obilet.com/wp-content/uploads/2022/12/Ispanya-Bayrak-1024x683.jpeg"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Spain +34</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </template>
        </q-input>

        <div class="q-pa-md">
          <router-link to="/sepetim">
            <q-option-group
              style="width: 500px"
              :options="options"
              type="checkbox"
              v-model="group"
              checked-icon="square"
            />
            <button
              class="uyeol"
              style="margin-left: 0%; width: 500px"
              @click="signup"
              @mouseover="changeColor(true)"
              @mouseout="changeColor(false)"
              :style="{ backgroundColor: buttonColor }"
            >
              <h style="color: aliceblue">Üye Ol</h>
            </button>
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
.box1 {
  width: 600px;
  height: 400px;
  margin-right: 30px;
  display: inline-block;
  vertical-align: top;
  margin-left: 100px;
  font-family: 'Verona-Regular', sans-serif;
  background-color: white;
  margin-top: 20px;
}
.box2 {
  width: 600px;
  height: 550px;
  margin-top: 200px;
  display: inline-block;
  vertical-align: top;
  margin-left: auto;
  font-family: 'Verona-Regular', sans-serif;
}
.Girisyap {
  padding: 20px;
  cursor: pointer;
  margin-left: 50px;
  width: 500px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  background-color: #cbab60;
  font-family: 'Verona-Regular', sans-serif;
}
.Girisyap:hover {
  background-color: black;
}
.uyeol {
  padding: 20px;
  cursor: pointer;
  margin-left: 50px;
  width: 500px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  background-color: #cbab60;
  font-family: 'Verona-Regular', sans-serif;
}
.uyeol:hover {
  background-color: black;
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

<script>
import { ref } from 'vue';
import { useMyStore } from 'src/stores/ex-store';

export default {
  setup() {
    const ad = ref('');
    const soyad = ref('');
    const hizliEmail = ref('');
    const hizliSifre = ref('');
    const options = ref([
      {
        label:
          'Kampanya, duyuru, bilgilendirmelerden e-posta ile haberdar olmak istiyorum',
        value: 'bat',
      },
      {
        label:
          'Kampanya, duyuru, bilgilendirmelerden sms ile haberdar olmak istiyorum.',
        value: 'friend',
      },
      {
        label:
          'Üyelik koşullarını ve kişisel verilerimin korunmasını kabul ediyorum.',
        value: 'upload',
      },
    ]);
    const buttonColor = ref('#cbab60');
    const hoverColor = ref('black');

    const myStore = useMyStore();
    const hata = ref(null);

    const signup = async () => {
      try {
        const payload = {
          ad: ad.value,
          soyad: soyad.value,
          hizliEmail: hizliEmail.value,
          hizliSifre: hizliSifre.value,
        };

        // Firestore'a ekleme işlemi
        await myStore.signup(payload);

        // Firebase Firestore'dan dönen değeri kontrol etmek için console.log ekleyebilirsiniz
        console.log("Veri Firestore'a eklendi:", payload);
      } catch (error) {
        console.error('Firebase Firestore Hatası:', error);
        hata.value = error.message;
      }
    };

    const changeColor = (isHovered) => {
      buttonColor.value = isHovered ? hoverColor.value : '#cbab60';
    };

    const changeColor2 = (isHovered) => {
      buttonColor.value = isHovered ? hoverColor.value : '#cbab60';
    };

    const onMainClick = () => {
      // Dropdown click event handler
    };

    return {
      ad,
      soyad,
      hizliEmail,
      hizliSifre,
      options,
      buttonColor,
      hoverColor,
      myStore,
      hata,
      signup,
      changeColor,
      changeColor2,
      onMainClick,
    };
  },
};
</script>
