// Shared utility functions

// Format currency
function formatCurrency(amount) {
  return '$' + parseFloat(amount).toFixed(2);
}

// Get all products
function getAllProducts() {
  let allProducts = [];
  for (let category in products) {
    allProducts = allProducts.concat(products[category]);
  }
  return allProducts;
}

// Get product by ID
function getProductById(productId) {
  const allProducts = getAllProducts();
  return allProducts.find(p => p.id === productId);
}

// Calculate total
function calculateTotal(items) {
  return items.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + (product.price * item.quantity);
  }, 0);
}

// Display alert notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background-color: ${
      type === 'success' ? '#27ae60' :
      type === 'error' ? '#e74c3c' :
      type === 'warning' ? '#f39c12' : '#3498db'
    };
    color: white;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-weight: 500;
    animation: slideIn 0.3s ease;
    max-width: 400px;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;

  if (!document.querySelector('style[data-notification-style]')) {
    style.setAttribute('data-notification-style', 'true');
    document.head.appendChild(style);
  }

  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString();
}
