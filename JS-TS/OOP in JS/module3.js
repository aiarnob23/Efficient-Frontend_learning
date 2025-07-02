// --------------getter and setter example----------------
class Product {
  set setPrice(value) {
    this.price = value;
  }

  get getPrice() {
    return this.price;
  }
}

let p1 = new Product();
p1.setPrice = 69;
console.log(p1.getPrice);
