import "@fortawesome/fontawesome-free";
import "material-design-icons-iconfont";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa" || "mdi",
  },
  theme: {
    themes: {
      dark: {
        background: "#2a3243",
      },
    },
  },
});
