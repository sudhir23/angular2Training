import {Injectable} from "@angular/core";
import {IInventoryItem} from "../shapes/IInventoryItem";
import {BackendInventoryService} from "./backendServices/backendInventoryService.service";
/**
 * Created by skandada on 3/14/2017.
 */

@Injectable()
class InventoryService {
    currentItem: IInventoryItem;
    constructor(private backendInventoryService: BackendInventoryService) {

    }
    getItems():IInventoryItem[] {
        return this.backendInventoryService.getItems();
    }

    getCurrentItem():IInventoryItem {
        return this.currentItem;
    }

    setCurrentItem(item: IInventoryItem):void {
        console.log('current item:'+JSON.stringify(item));
        this.currentItem = item;
    }
}

export {
    InventoryService
}