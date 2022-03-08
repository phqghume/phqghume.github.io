let app = Vue.createApp({
  data() {
    return {
      image: "./img/long (1).jpg",
    }
  },
  methods: {
    changeImage() {
      let number = Math.round(Math.random()*58) || 58;
      this.image = "./img/long (" + number + (number > 48 ? ").gif" : ").jpg");
    }
  }
});

app.mount("#app");