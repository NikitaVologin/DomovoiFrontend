import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LandingView from '../views/LandingView.vue';
import SearchView from '../views/SearchView.vue';
import ProfileView from '../views/ProfileView.vue';
import AnnouncementEditView from '../views/AnnouncementEditView.vue';
import AnnouncementView from '../views/AnnouncementView.vue';

const routes = [
	{
		path: '/',
		name: 'landing',
		component: LandingView,
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
	{
		path: '/editAnnouncement',
		name: 'editAnnouncementNew',
		redirect: { path: '/editAnnouncement/0' }
	},
	{
		path: '/announcement/:id',
		name: 'announcement',
		component: AnnouncementView
	},
] as Readonly<RouteRecordRaw[]>;

export const router = createRouter({
	history: createWebHistory('/'),
	routes
});
