<template>
  <div>
    <div
      style="
        width: 700px;
        font-family: 'Verona-Regular', sans-serif;
        text-align: end;
        text-decoration: underline;
        font-weight: bold;
        margin-top: auto;
        font-size: 20px;
      "
    >
      Kahve Çeşitleri Blog
    </div>
    <div class="column" style="height: 800px; max-height: 100%">
      <div class="col-9" style="width: 1200px">
        <q-btn
          style="
            width: 800px;
            height: 500px;
            border: none;
            background-color: white;
            margin-left: auto;
            align-items: center;
          "
          ><img
            src="https://static.ticimax.cloud/2571/Uploads/Blog/Ceviz-Faydalari-Nelerdir-a79b.png"
        /></q-btn>
      </div>
      <div class="col-5">
        <h6>Kategoriler</h6>
        <q-link style="cursor: pointer; color: grey">
          <li>kahve çeşitleri</li>
          <br
        /></q-link>
        <q-link style="cursor: pointer; color: grey"
          ><li>Bayram Şekeri</li>
          <br
        /></q-link>
        <q-link style="cursor: pointer; color: grey"
          ><li>kuruyemiş çeşitleri</li>
          <br
        /></q-link>
        <q-link style="cursor: pointer; color: grey"><li>Kolonya</li> </q-link>
        <h6>Son Blog Yazıları</h6>
        <q-link
          ><img
            src="https://static.ticimax.cloud/2571/Uploads/Blog/Ceviz-Faydalari-Nelerdir-a79b.png"
            style="width: 300px; height: 300px"
        /></q-link>
        <q-link style="cursor: pointer; color: grey">
          <li>Ceviz Faydaları Nelerdir?</li>
          <br
        /></q-link>
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
.col-9 {
  text-align: center;
}
.col-9 :hover {
  background-color: gray;
}
.col-5 {
  text-decoration: underline;
  font-family: 'Verona-Regular', sans-serif;
  height: 500px;
  margin-top: -80px;
  margin-left: -250px;
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
