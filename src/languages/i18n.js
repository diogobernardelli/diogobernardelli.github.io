import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello world',
    },
  },
  pt: {
    message: {
      hello: 'Olá Mundo!',
    },
  },
};

const i18n = new VueI18n({
  locale: 'pt',
  messages,
});

export default i18n;
