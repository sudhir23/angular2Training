/**
 * Created by skandada on 3/14/2017.
 */
import {Component} from "@angular/core";
import {InventoryService} from "../../services/InventoryService.service";
import {IInventoryItem} from "../../shapes/IInventoryItem";


@Component({
    selector:'inventory-list',
    templateUrl:'app/components/InventoryList/InventoryList.component.html',
    styleUrls:['app/components/InventoryList/InventoryList.component.css']
})
export class InventoryList {
    currentItem:IInventoryItem;

    context:string = 'Inventory stock';
    constructor(private inventoryService:InventoryService) {

    }

    getItems():IInventoryItem[] {
        return this.inventoryService.getItems();
    }

    setCurrentItem(item:IInventoryItem) {
        this.currentItem = item;
    }
}