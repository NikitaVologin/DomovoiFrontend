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
import { ReceptionController } from './controllers/receptionController';

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
container.register("baseURL", {
    useValue: "http://localhost:8080"
});

const receptionController = container.resolve(ReceptionController);

receptionController.registration(CounteragentType.Legal.toString(), "", "");