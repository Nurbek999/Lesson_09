'use strict';
const cart = {

        items: [],
        totalPrice: 0,
        count: 0,
        getTotalPrice() {
        return this.totalPrice;
},

add(productName, productPrice, productCount = 1){
    const items = {
    'productName': productName,
    'productPrice': productPrice,
    'productCount': productCount
    };
    this.items.push(items);
    this.calculateItemPrice();
    this.increaseCount(productCount);
},

 increaseCount(productCount) {
    this.count += productCount;
},

 calculateItemPrice() {
     this.totalPrice = this.items.reduce((total, item) => total + (item.productPrice * item.productCount), 0)
},

 clear() {
     this.items = [];
     this.totalPrice = 0;
     this.count = 0;
},

 print() {
    console.log(`${JSON.stringify(this.items)}\n Total: ${this.totalPrice}`);
},
}

cart.add('Apple', 150, 3);
cart.add('Bread', 50, 1);
cart.add('Water', 30, 8);
cart.print();
