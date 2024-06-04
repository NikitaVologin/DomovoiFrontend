import { injectable, inject } from "tsyringe";
import { IReception } from "../controllers/controllersInterfaces/receptionInterface";
import { CounteragentViewModel } from "../viewModel/CounteragentViewModel";

@injectable()
export class ReceptionController {

    public constructor(@inject("IReception") private _reception: IReception) { }

    /**
     * Регистрация нового пользователя в системе. Возврашает объект, отвечающий за данные пользователя.
     *
     * @param {string} userType - Тип пользователя.
     * @param {string} mail - Электронная почта.
     * @param {string} password - Пароль.
     */
    async registration(userType: string, mail: string, password: string): Promise<CounteragentViewModel> {
        return await this._reception.registration(userType, mail, password);
    }
    
    /**
     * Авторизация пользователя в системе. Возврашает объект, отвечающий за данные пользователя.
     *
     * @param {string} mail - Электронная почта.
     * @param {string} password - Пароль.
     */
    async authorize(mail: string, password: string): Promise<CounteragentViewModel> {
        return await this._reception.authorize(mail, password);
    }

    /**
     * Получить информацию о пользователе. Возвращает объект, содержащий данные пользователя для отображения. 
     *
     * @param {string} id - Идентификационный ключ пользователя.
     */
    async getUserInformation(id: string): Promise<CounteragentViewModel> {
        return await this._reception.getUserInformation(id);
    }

    /**
     * Получить информацию о пользователе. Возвращает объект, содержащий данные пользователя для отображения. 
     *
     * @param {string} id - Идентификационный ключ пользователя.
     * @param {CounteragentViewModel} newUserInformation - Объект, содержащий изменённые данные пользователя.
     * @param {string} newPassword? - Изменённый пароль.
     */
    async changeUserInformation(idOldUser: string, newUserInformation: CounteragentViewModel, newPassword?: string): Promise<void> {
        return await this._reception.changeUserInformation(idOldUser, newUserInformation, newPassword);
    }
    
     /**
     * Выход пользователя из системы.
     *
     * @param {string} id - Идентификационный ключ пользователя.
     */
    async checkOut(): Promise<void> {
        return await this._reception.checkOut();
    }
}