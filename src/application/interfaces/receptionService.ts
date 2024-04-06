namespace Application {
    let CounterAgent = Domain.CounterAgent;
    export interface ReceptionService {
        registration(mail: string, password: string): Domain.CounterAgent;
        authorize(mail: string, password: string): Domain.CounterAgent;
    }
}