import { injectable, singleton } from "tsyringe";
import { isEqual } from "lodash";

export interface IMapper {
    map<TSource, TDestination>(object: TSource, dest: TDestination): TDestination;
}

export class Mapper implements IMapper{

    map<TSource, TDestination>(object: TSource, dest: TDestination): TDestination {
        let propertyNames = Object.getOwnPropertyNames(object);
        let propertyNamesClass = Object.getOwnPropertyNames(dest);

        // if(!isEqual(propertyNames, propertyNamesClass)){
        //     throw new Error("The object can`t be map to this type");
        // }
        
        for(let i = 0; i < propertyNamesClass.length; i++) {
			if ((object as any)[propertyNamesClass[i]] === undefined) continue;
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