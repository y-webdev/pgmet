import { createRouter, createWebHistory } from 'vue-router'
import { startRouter } from '@/router/startRouter'
import { singleNavItems } from '@/router/singleNavItems'
import { documents } from '@/router/documents'
import { footerNavItems } from '@/router/footerNavItems';
import { contact } from '@/router/contact';

const routes = [startRouter, ...documents.routes, ...singleNavItems, ...footerNavItems, contact];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router
