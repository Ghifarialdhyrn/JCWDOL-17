// Create a program to create transaction
// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data

class Products {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction extends Products {
  total: number;
  qty: number;
  constructor(name: string, price: number, total: number, qty: number) {
    super(name, price);
    this.total = total;
    this.qty = qty;
  }

  addToCart() {
    this.total += this.price;
    this.qty++;
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    return this.total;
  }
}

const product1 = new Products("Baju", 100000);

const transaction = new Transaction(product1.name, product1.price, 0, 0);

transaction.addToCart();
transaction.addToCart();
transaction.addToCart();
transaction.addToCart();
console.log(
  "Jumlah barang di keranjang: " +
    transaction.qty +
    "\nBarang: " +
    transaction.name +
    "\nTotal belanja: Rp. " +
    transaction.showTotal()
);
console.log("Total Pembayaran: Rp. " + transaction.checkout());
