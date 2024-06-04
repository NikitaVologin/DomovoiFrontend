import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel"

export interface IReception {
    registration(userType: string, mail: string, password: string): Promise<CounteragentViewModel>
    authorize(mail: string, password: string): Promise<CounteragentViewModel>
    getUserInformation(id: string): Promise<CounteragentViewModel> 
    changeUserInformation(idOldUser: string, newUserInformation: CounteragentViewModel, new_password?: string): Promise<void> 
    checkOut(): Promise<void> 
}