import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import SearchView from '../views/SearchView.vue';
import ProfileView from '../views/ProfileView.vue';
import AnnouncementEditView from '../views/AnnouncementEditView.vue';

const routes = [
	{
		path: '/',
		name: 'landing',
		redirect: () => { return { name: 'search' } }
	},
	{
		path: '/search',
		name: 'search',
		component: SearchView
	},
	{
		path: '/profile',
		name: 'profile',
		component: ProfileView
	},
	{
		path: '/editAnnouncement/:id',
		name: 'editAnnouncement',
		component: AnnouncementEditView
	},
] as Readonly<RouteRecordRaw[]>;

export const router = createRouter({
	history: createWebHistory('/'),
	routes
});
