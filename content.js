// Product data - WITH IMAGE SUPPORT
const products = {
  beverages: [
    { id: 'coffee', name: 'Coffee', price: 3.50, category: 'beverages', image: 'images/products/coffee.jpg' },
    { id: 'tea', name: 'Tea', price: 2.50, category: 'beverages', image: 'images/products/tea.jpg' },
    { id: 'juice', name: 'Fresh Juice', price: 4.00, category: 'beverages', image: 'images/products/juice.jpg' },
    { id: 'smoothie', name: 'Smoothie', price: 5.00, category: 'beverages', image: 'images/products/smoothie.jpg' },
  ],
  food: [
    { id: 'sandwich', name: 'Sandwich', price: 7.00, category: 'food', image: 'images/products/sandwich.jpg' },
    { id: 'salad', name: 'Fresh Salad', price: 6.50, category: 'food', image: 'images/products/salad.jpg' },
    { id: 'pasta', name: 'Pasta', price: 8.00, category: 'food', image: 'images/products/pasta.jpg' },
    { id: 'burger', name: 'Burger', price: 7.50, category: 'food', image: 'img/pepperoni-pizza-recipe-photos-tablefortwoblog-7.jpg' },
  ],
  desserts: [
    { id: 'cake', name: 'Cake Slice', price: 4.50, category: 'desserts', image: 'images/products/cake.jpg' },
    { id: 'cookie', name: 'Chocolate Cookie', price: 2.50, category: 'desserts', image: 'images/products/cookie.jpg' },
    { id: 'icecream', name: 'Ice Cream', price: 5.00, category: 'desserts', image: 'images/products/icecream.jpg' },
    { id: 'pie', name: 'Fruit Pie', price: 5.50, category: 'desserts', image: 'images/products/pie.jpg' },
  ]
};

// Order management functions
const orderManager = {
  getOrders() {
    const stored = localStorage.getItem('orders');
    return stored ? JSON.parse(stored) : [];
  },

  saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
  },

  generateOrderNumber() {
    return 'ORD-' + Date.now();
  },

  createOrder(customerName, contactNumber, items, totalAmount, paymentMethod) {
    const orders = this.getOrders();
    const order = {
      orderNumber: this.generateOrderNumber(),
      customerName,
      contactNumber,
      items,
      totalAmount,
      paymentMethod,
      status: 'NEW',
      createdAt: new Date().toLocaleString()
    };
    orders.push(order);
    this.saveOrders(orders);
    return order;
  },

  updateOrderStatus(orderNumber, newStatus) {
    const orders = this.getOrders();
    const order = orders.find(o => o.orderNumber === orderNumber);
    if (order) {
      order.status = newStatus;
      this.saveOrders(orders);
      return true;
    }
    return false;
  },

  getOrderByNumber(orderNumber) {
    const orders = this.getOrders();
    return orders.find(o => o.orderNumber === orderNumber);
  },

  getOrdersByStatus(status) {
    const orders = this.getOrders();
    return orders.filter(o => o.status === status);
  }
};
