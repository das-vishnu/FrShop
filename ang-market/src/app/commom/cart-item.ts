import { Product } from "./product";

export class CartItem {

    id:number;
    name:string;
    unitPrice:number;
    quantity:number;
    totalPr:number;
    count:number;
    constructor(product:Product){
        this.id=product.id;
        this.name=product.name;
        this.unitPrice=product.price;
        this.quantity=1;
        this.totalPr=product.price;
        this.count=1;
    }
}
