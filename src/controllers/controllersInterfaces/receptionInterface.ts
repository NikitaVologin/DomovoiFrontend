import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel"

export interface IReception {
    registration(userType: string, mail: string, password: string): Promise<CounteragentViewModel>
    authorize(mail: string, password: string): Promise<CounteragentViewModel>
}
