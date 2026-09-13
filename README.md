# Order Management System

A complete customer ordering web app with staff management portal.

## Files

- **index.html** - Customer page for browsing products, ordering, and tracking
- **staff.html** - Staff page for managing orders (PIN protected)
- **style.css** - Shared CSS styles for both pages
- **script.js** - Shared JavaScript utilities
- **content.js** - Product data and order management functions

## How to Use

### Customer Page (index.html)
1. Open `index.html` in your web browser
2. Browse products by category (Beverages, Food, Desserts)
3. Add items to cart with quantities
4. Fill in checkout information (Name, Phone, Payment Method)
5. Place order - you'll get an order number
6. Switch to "Track Order" tab to check order status

### Staff Page (staff.html)
1. Open `staff.html` in your web browser
2. Enter PIN: **1234**
3. You'll see the Kanban board with order stages:
   - 🆕 **NEW** - Customer just placed order
   - 👨‍🍳 **PREPARING** - Staff is preparing
   - ✅ **READY** - Ready for customer pickup
   - ✔️ **COMPLETED** - Order completed

4. Click buttons to move orders through stages
5. Changes are real-time - customer tracking page shows updates immediately
6. Click "Logout" to return to login screen

## Data Storage

- Orders are stored in browser's localStorage
- Both pages access the same order data
- Data persists even if you close and reopen the browser
- To clear all orders, open browser developer tools and run:
  ```javascript
  localStorage.clear()
  ```

## Testing Flow

1. **Place Order**
   - Open index.html → Browse → Add items → Checkout → Place Order
   - Note the Order Number

2. **Track Progress**
   - Open index.html → Track Order tab → Enter Order Number
   - Check status (should show "NEW")

3. **Update Status**
   - Open staff.html → Login (PIN: 1234)
   - Find the order in "New Orders" column
   - Click "Start Preparing" → order moves to "Preparing"

4. **See Real-time Update**
   - Go back to index.html tracking tab
   - Refresh or re-enter order number
   - Status should show "PREPARING"

5. **Complete Order**
   - Back to staff.html
   - Click "Mark Ready" → order moves to "Ready for Pickup"
   - Click "Complete" → order moves to "Completed"
   - Check customer page - status updates automatically

## Features

✅ **Customer Features:**
- Browse products by category
- Add to cart with quantities
- Checkout with customer info and payment method
- Real-time order tracking
- Order history with status updates

✅ **Staff Features:**
- PIN-protected access (1234)
- Kanban board view of orders
- Drag orders through workflow stages
- Real-time order updates
- Auto-refresh every 5 seconds
- Logout functionality

✅ **System Features:**
- Single data source - both pages share orders
- LocalStorage persistence
- Responsive mobile design
- Clean, easy-to-use interface
- Real-time status synchronization

## Staff PIN

**Default PIN: 1234**

To change PIN, edit `staff.html` and find this line:
```javascript
const STAFF_PIN = '1234';
```

Change `1234` to your desired PIN (must be 4 digits).

## Mobile Support

The app is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## No Installation Required

Simply open the HTML files in your browser - no server or installation needed!
