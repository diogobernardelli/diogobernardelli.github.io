import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    sidebar: {
      title: 'Top 50 Reddit Posts',
      submitted: 'submitted',
      comments: 'comments',
      dismiss_single: 'Dismiss Post',
      dismiss_all: 'Dismiss All',
    },
    content: {
      author: 'Posted by',
      image_fullsize: 'view image full-size',
    },
  },
  pt: {
    sidebar: {
      title: 'Top 50 Postagens do Reddit',
      submitted: 'submetido',
      comments: 'comentários',
      dismiss_single: 'Excluir postagem',
      dismiss_all: 'Excluir todos',
    },
    content: {
      author: 'Postado por',
      image_fullsize: 'ver imagem em tamanho completo',
    },
  },
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
