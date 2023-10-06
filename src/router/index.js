import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'home-page',
		component: () => import('../views/HomePage'),
	},
	{
		path: '/about',
		name: 'about-view',
		component: () => import('../views/AboutView'),
	},
	{
		path: '/blog-categories',
		name: 'blog-categories-view',
		component: () => import('../views/BlogCategoriesView.vue'),
	},
	{
		path: '/blogs',
		name: 'blogs-view',
		component: () => import('../views/BlogsView.vue'),
	},
	{
		path: '/faq',
		name: 'faq-view',
		component: () => import('../views/FAQView'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
