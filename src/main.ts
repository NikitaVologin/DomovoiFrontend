import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { router } from './router';
import store from './store';
import "reflect-metadata";
import {container} from "tsyringe";
import { HTTPClient } from './httpConnection/httpCommon';
import { ReceptionService } from './dataproviders/receptionService';
import { Reception } from './application/useCases/reception';
import { AnnouncementBoardService } from './dataproviders/announcementBoardService';
import { AnnouncementBoard } from './application/useCases/announcementBoard';

createApp(App).provide("$store", store).use(router).use(store).mount('#app');

container.register("IHTTPClient", {
  useClass: HTTPClient
});
container.register("IReceptionService", {
    useClass: ReceptionService
});
container.register("IReception", {
    useClass: Reception
});
container.register("IAnnouncementBoardService", {
    useClass: AnnouncementBoardService
});
container.register("IAnnouncementBoard", {
    useClass: AnnouncementBoard
});
container.register("baseURL", {
    useValue: "http://localhost:8181"
});
//http://localhost:8181
//http://olegsanders.ru:8181