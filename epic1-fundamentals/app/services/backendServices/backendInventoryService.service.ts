/**
 * Created by skandada on 3/14/2017.
 */
import {Injectable} from "@angular/core";
import {IInventoryItem} from "../../shapes/IInventoryItem";


@Injectable()
export class BackendInventoryService {
    getItems():IInventoryItem[] {

        let items: IInventoryItem[] =  [
            {guid:'item1',name:'Table', price:30.00},
            {guid:'item2',name:'Car', price:3000.00},
            {guid:'item3',name:'Bike', price:300.00}];

        return items;
    }
}
