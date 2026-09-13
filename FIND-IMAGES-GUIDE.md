# How to Find Images in Your Content

## 🔍 WHERE IMAGES ARE DEFINED

### **1. In content.js file**

Open `content.js` with a text editor and look for the `products` object:

```javascript
const products = {
  beverages: [
    { 
      id: 'coffee', 
      name: 'Coffee', 
      price: 3.50, 
      category: 'beverages',
      image: 'images/products/coffee.jpg'    ← IMAGE IS HERE
    },
    { 
      id: 'tea', 
      name: 'Tea', 
      price: 2.50, 
      category: 'beverages',
      image: 'images/products/tea.jpg'       ← IMAGE IS HERE
    },
    // ... more products
  ]
}
```

**Each product has:**
- `id` - Product identifier
- `name` - Product name
- `price` - Product price
- `category` - Category name
- **`image`** - Path to image file ← THIS ONE!

---

## 🖼️ ALL PRODUCT IMAGES IN content.js

Here's a complete list of all images in your content:

### **BEVERAGES Category**
| Product | Image Path |
|---------|-----------|
| Coffee | `images/products/coffee.jpg` |
| Tea | `images/products/tea.jpg` |
| Fresh Juice | `images/products/juice.jpg` |
| Smoothie | `images/products/smoothie.jpg` |

### **FOOD Category**
| Product | Image Path |
|---------|-----------|
| Sandwich | `images/products/sandwich.jpg` |
| Fresh Salad | `images/products/salad.jpg` |
| Pasta | `images/products/pasta.jpg` |
| Burger | `images/products/burger.jpg` |

### **DESSERTS Category**
| Product | Image Path |
|---------|-----------|
| Cake Slice | `images/products/cake.jpg` |
| Chocolate Cookie | `images/products/cookie.jpg` |
| Ice Cream | `images/products/icecream.jpg` |
| Fruit Pie | `images/products/pie.jpg` |

---

## 📝 COMPLETE content.js EXAMPLE

Here's how images look in your full content.js:

```javascript
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
    { id: 'burger', name: 'Burger', price: 7.50, category: 'food', image: 'images/products/burger.jpg' },
  ],
  desserts: [
    { id: 'cake', name: 'Cake Slice', price: 4.50, category: 'desserts', image: 'images/products/cake.jpg' },
    { id: 'cookie', name: 'Chocolate Cookie', price: 2.50, category: 'desserts', image: 'images/products/cookie.jpg' },
    { id: 'icecream', name: 'Ice Cream', price: 5.00, category: 'desserts', image: 'images/products/icecream.jpg' },
    { id: 'pie', name: 'Fruit Pie', price: 5.50, category: 'desserts', image: 'images/products/pie.jpg' },
  ]
};
```

---

## 🔎 HOW IMAGES ARE USED IN index.html

In `index.html`, the `showCategory()` function displays product images:

```javascript
// This code finds the image in products and displays it
const imageHtml = product.image ? 
  `<img src="${product.image}" alt="${product.name}" ...>` 
  : '';

productCard.innerHTML = `
  ${imageHtml}  ← Image displays here
  <h3>${product.name}</h3>
  <div class="price">${formatCurrency(product.price)}</div>
  ...
`;
```

**How it works:**
1. `product.image` = the image path from content.js
2. `<img src="${product.image}">` = displays the image
3. If image path is wrong → image won't show

---

## ✅ HOW TO CHECK IF IMAGES ARE CORRECT

### **Method 1: Open Browser Console (Best)**

1. Open `index.html` in browser
2. Press `F12` (or right-click → Inspect)
3. Go to **Console** tab
4. Paste this code:

```javascript
// Show all product images
for (let category in products) {
  console.log(`\n=== ${category.toUpperCase()} ===`);
  products[category].forEach(product => {
    console.log(`${product.name}: ${product.image}`);
  });
}
```

**You'll see:**
```
=== BEVERAGES ===
Coffee: images/products/coffee.jpg
Tea: images/products/tea.jpg
Fresh Juice: images/products/juice.jpg
Smoothie: images/products/smoothie.jpg

=== FOOD ===
Sandwich: images/products/sandwich.jpg
Fresh Salad: images/products/salad.jpg
Pasta: images/products/pasta.jpg
Burger: images/products/burger.jpg

=== DESSERTS ===
Cake Slice: images/products/cake.jpg
Chocolate Cookie: images/products/cookie.jpg
Ice Cream: images/products/icecream.jpg
Fruit Pie: images/products/pie.jpg
```

---

### **Method 2: Check Network Tab**

1. Open `index.html` in browser
2. Press `F12` → Go to **Network** tab
3. Look for image requests:
   - ✅ **Status 200** = Image loaded successfully
   - ❌ **Status 404** = Image file not found
   - ❌ **Failed** = Wrong path

---

### **Method 3: Manually Check in Code**

Open `content.js` in text editor and search for:
- `image:` - Find all image declarations
- `images/products/` - Find all image paths

---

## 🐛 TROUBLESHOOTING

### **Images Not Showing?**

**Check 1: Is folder structure correct?**
```
✅ CORRECT:
ordering-app/
├── index.html
├── content.js
└── images/
    └── products/
        └── coffee.jpg

❌ WRONG:
ordering-app/
├── index.html
├── content.js
└── Images/              ← Capital I
    └── Products/        ← Capital P
        └── coffee.jpg
```

**Check 2: Are file names correct?**
```
✅ CORRECT (lowercase):
coffee.jpg
tea.jpg
sandwich.jpg

❌ WRONG (different names):
Coffee.jpg
TEA.jpg
Sandwich.jpg
```

**Check 3: Path in content.js matches files?**

In content.js:
```javascript
image: 'images/products/coffee.jpg'
```

Actual file must be at:
```
images/products/coffee.jpg
```

---

## 📊 QUICK REFERENCE TABLE

| What to Find | Where to Look | Example |
|------|-------|---------|
| Image paths | `content.js` | `'images/products/coffee.jpg'` |
| How image displays | `index.html` showCategory() | `<img src="${product.image}">` |
| Image folder structure | Your project folder | `images/products/` |
| Which product uses which image | Console log (Method 1) | Run code in F12 console |
| If image loaded successfully | Network tab (Method 2) | Status 200 = OK, 404 = Missing |

---

## 💻 COPY-PASTE DEBUG CODE

Save this as a file or paste in browser console to check all images:

```javascript
// ==============================================
// IMAGE CHECKER - Paste in Browser Console
// ==============================================

console.log('%c🖼️  IMAGE CHECKER', 'color: blue; font-size: 16px; font-weight: bold');
console.log('%c=========================================', 'color: gray');

let totalImages = 0;

for (let category in products) {
  console.log(`\n📁 ${category.toUpperCase()}`);
  console.log('─'.repeat(40));
  
  products[category].forEach(product => {
    totalImages++;
    const imageStatus = product.image ? '✅' : '❌';
    console.log(`${imageStatus} ${product.name.padEnd(20)} → ${product.image}`);
  });
}

console.log('\n' + '='.repeat(40));
console.log(`%c📊 Total Images: ${totalImages}`, 'color: green; font-weight: bold');
console.log('%c✅ All images are defined!', 'color: green; font-weight: bold');
```

---

## 🎯 SUMMARY

**Images in content.js:**
- ✅ 12 product images total
- ✅ All in `images/products/` folder
- ✅ Named to match product IDs
- ✅ All paths use lowercase

**To add images:**
1. Create `images/products/` folder
2. Add 12 image files with correct names
3. Images automatically display in your app!

**To check images:**
1. Open browser console (F12)
2. Paste debug code above
3. See all image paths

**Common mistake:**
```
❌ Wrong:  Images/Products/Coffee.jpg
✅ Correct: images/products/coffee.jpg
```
