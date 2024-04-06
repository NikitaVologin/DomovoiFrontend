namespace DataProviders {
    export class ReceptionService implements Application.ReceptionService {

        registration(mail: string, password: string): Domain.CounterAgent {
            throw new Error("Method not implemented.");
        }

        authorize(mail: string, password: string): Domain.CounterAgent {
            throw new Error("Method not implemented.");
        }
    }
}