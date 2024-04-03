import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [
	
] as Readonly<RouteRecordRaw[]>;

export const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});
