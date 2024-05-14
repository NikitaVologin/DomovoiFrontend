import { injectable, singleton } from "tsyringe";

const _ = require("lodash"); 

// @singleton()
// export class MapperContainer {

//     private mappers: { [id: string] : Mapper; } = {};

//     public constructor() {}

//     public register(name: string, mapper: Mapper): void {
//         this.mappers["name"] = mapper;
//     }

//     public map<R extends Object>(name: string, object: any): R{
//         let mapper = this.mappers["name"];
//         if (mapper === null || mapper === undefined ) {
//             throw new Error("Mapper with name like that does not exist");
//         }
//         let mapObject = mapper.map<R>(object);
//         return mapObject;
//     }
// }

// export interface Mapper {
//     map<T extends Object>(object: any): T;
// } 


@singleton()
export class Mapper {

    // map<Office>(object: any): Office {
    //     let office = new Office(0, 0, 0, false, "", false, false, 0);
    //     let propertyNames = Object.getOwnPropertyNames(object);
    //     let propertyNamesClass = Object.getOwnPropertyNames(office);

    //     if(!_.isEqual(propertyNames, propertyNamesClass)){
    //         throw new Error("The object can`t be map to this type");
    //     }
        
    //     for(let i = 0; i < propertyNamesClass.length; i++) {
    //         if(typeof object[propertyNamesClass[i]] !== "string" 
    //                 && typeof object[propertyNamesClass[i]] !== "number"
    //                 && typeof object[propertyNamesClass[i]] !== "boolean") {
    //             let property = this._mapperContainer.map(propertyNamesClass[i], object[propertyNamesClass[i]]);
    //             (office as any)[propertyNamesClass[i]] = property;
    //         }
    //         else {
    //             (office as any)[propertyNamesClass[i]] = object[propertyNamesClass[i]]
    //         }
    //     }
    //     return office;
    // }

    map<TSource, TDestination>(object: TSource, dest: TDestination): TDestination {
        let propertyNames = Object.getOwnPropertyNames(object);
        let propertyNamesClass = Object.getOwnPropertyNames(dest);

        if(!_.isEqual(propertyNames, propertyNamesClass)){
            throw new Error("The object can`t be map to this type");
        }
        
        for(let i = 0; i < propertyNamesClass.length; i++) {
            if(typeof (dest as any)[propertyNamesClass[i]] !== "string" 
                    && typeof (dest as any)[propertyNamesClass[i]] !== "number"
                    && typeof (dest as any)[propertyNamesClass[i]] !== "boolean") {
                let property = this.map(propertyNamesClass[i], (object as any)[propertyNamesClass[i]]);
                (dest as any)[propertyNamesClass[i]] = property;
            }
            else {
                (dest as any)[propertyNamesClass[i]] = (object as any)[propertyNamesClass[i]]
            }
        }
        return dest;
    }
}