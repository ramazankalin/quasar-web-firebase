import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/MainPage.vue') },
      {
        path: 'kahveçeşit',
        component: () => import('src/pages/KahveÇeşitPage.vue'),
      },
      {
        path: 'kahvedetay',
        component: () => import('src/pages/KahveDetayPage.vue'),
      },
      { path: 'signin', component: () => import('src/pages/SignInPage.vue') },
      { path: 'sepetim', component: () => import('src/pages/SepetPage.vue') },
      { path: 'blog', component: () => import('src/pages/BlogPage.vue') },
      {
        path: 'sipariştakip',
        component: () => import('src/pages/SiparişTakipPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
