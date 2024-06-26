import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { router } from './router';
import store from './store';
import "reflect-metadata";
import {container} from "tsyringe";
import { HTTPClient } from '../src/dataproviders/httpConnection/httpCommon';
import { ReceptionService } from './dataproviders/receptionService';
import { Reception } from './application/useCases/reception';
import { AnnouncementBoardService } from './dataproviders/announcementBoardService';
import { AnnouncementBoard } from './application/useCases/announcementBoard';
import { AnnoucementMapper } from './mappers/annoucementMapper';
import { DealMapper } from './mappers/dealMapper';
import { RealityMapper } from './mappers/realityMapper';
import { CounterAgentMapper } from './mappers/couteragentMapper';
import { baseURL, chatURL } from './settings';
import { Chat } from './application/useCases/chat';
import { ChatService } from './dataproviders/chat/ChatService';
import { MessageMapper } from './mappers/messageMapper';

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
container.register("IAnnoucementMapper", {
    useClass: AnnoucementMapper
});
container.register("ICouterAgentMapper", {
    useClass: CounterAgentMapper
});
container.register("IDealMapper", {
    useClass: DealMapper
});
container.register("IRealityMapper", {
    useClass: RealityMapper
});
container.register("IChat", {
    useClass: Chat
});
container.register("IChatService", {
    useClass: ChatService
});
container.register("IMessageMapper", {
    useClass: MessageMapper
});
container.register("chatURL", {
    useValue: chatURL
});
container.register("baseURL", {
    useValue: baseURL
});
//http://localhost:8181
//http://olegsanders.ru:8181