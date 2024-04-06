namespace Application {
    let CounterAgent = Domain.CounterAgent;
    export class Reception {
        
        private readonly _service!: ReceptionService 

        registration(mail: string, password: string): Domain.CounterAgent {
            let user = this._service.registration(mail, password);
            return user;
        }

        authorize(mail: string, password: string): Domain.CounterAgent {
            let user = this._service.authorize(mail, password);
            return user;
        }

        public constructor(service: ReceptionService) {
            this._service = service;
        }
    }
}