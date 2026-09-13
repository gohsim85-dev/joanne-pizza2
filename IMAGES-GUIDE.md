# How to Add Images to Your Ordering App

## 📁 Folder Structure

Create this folder structure in your project:

```
ordering-app/
├── index.html
├── staff.html
├── style.css
├── script.js
├── content.js
├── README.md
│
└── images/                    ← NEW FOLDER
    ├── logo.png              (Optional: Header logo)
    ├── products/             (Product images)
    │   ├── coffee.jpg
    │   ├── tea.jpg
    │   ├── juice.jpg
    │   ├── smoothie.jpg
    │   ├── sandwich.jpg
    │   ├── salad.jpg
    │   ├── pasta.jpg
    │   ├── burger.jpg
    │   ├── cake.jpg
    │   ├── cookie.jpg
    │   ├── icecream.jpg
    │   └── pie.jpg
    │
    └── banner.jpg            (Optional: Header banner)
```

## 🖼️ What Images You Need

### 1. **Product Images** (Recommended)
   - Size: 200x200px or 300x300px (square)
   - Format: JPG or PNG
   - Folder: `images/products/`
   - Names must match product IDs: `coffee.jpg`, `tea.jpg`, etc.

### 2. **Logo** (Optional)
   - Size: 200x80px
   - Format: PNG (with transparency)
   - Location: `images/logo.png`

### 3. **Banner** (Optional)
   - Size: 1200x300px
   - Format: JPG or PNG
   - Location: `images/banner.jpg`

---

## 📝 How to Modify Your Code

### Step 1: Update `content.js`

Add `image` property to each product:

```javascript
const products = {
  beverages: [
    { 
      id: 'coffee', 
      name: 'Coffee', 
      price: 3.50, 
      category: 'beverages',
      image: 'images/products/coffee.jpg'  // ← ADD THIS
    },
    { 
      id: 'tea', 
      name: 'Tea', 
      price: 2.50, 
      category: 'beverages',
      image: 'images/products/tea.jpg'     // ← ADD THIS
    },
    // ... continue for all products
  ],
  // ... other categories
};
```

### Step 2: Update `index.html`

Change the product card display in the `showCategory()` function:

**BEFORE:**
```javascript
productCard.innerHTML = `
  <h3>${product.name}</h3>
  <div class="price">${formatCurrency(product.price)}</div>
  <input type="number" id="qty-${product.id}" value="0" min="0" max="100">
  <button class="btn-primary btn-sm" onclick="addToCart('${product.id}', '${product.name}', ${product.price})">
    Add to Cart
  </button>
`;
```

**AFTER:**
```javascript
productCard.innerHTML = `
  <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 5px; margin-bottom: 10px;">
  <h3>${product.name}</h3>
  <div class="price">${formatCurrency(product.price)}</div>
  <input type="number" id="qty-${product.id}" value="0" min="0" max="100">
  <button class="btn-primary btn-sm" onclick="addToCart('${product.id}', '${product.name}', ${product.price})">
    Add to Cart
  </button>
`;
```

### Step 3: Add Logo to Header (Optional)

In `index.html`, change the header:

**BEFORE:**
```html
<header>
  <div class="container">
    <div class="header-content">
      <h1>🍽️ Order Management System</h1>
      <p style="margin: 0; color: #ecf0f1; font-size: 14px;">Customer Portal</p>
    </div>
  </div>
</header>
```

**AFTER:**
```html
<header>
  <div class="container">
    <div class="header-content">
      <div style="display: flex; align-items: center; gap: 15px;">
        <img src="images/logo.png" alt="Logo" style="height: 60px;">
        <div>
          <h1 style="margin: 0;">🍽️ Order Management System</h1>
          <p style="margin: 0; color: #ecf0f1; font-size: 14px;">Customer Portal</p>
        </div>
      </div>
    </div>
  </div>
</header>
```

---

## 🎨 CSS for Product Images

Add this to `style.css`:

```css
.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}
```

---

## 🖥️ Final Result

With images added, your product cards will look like:

```
┌──────────────────┐
│                  │
│   [PRODUCT IMG]  │  ← Image here
│                  │
├──────────────────┤
│   Coffee         │  ← Product name
│   $3.50          │  ← Price
│   [0] ┌─────────┐│  ← Quantity & button
└──────────────────┘
```

---

## 💡 Where to Get Free Images

Use free image sites:
- **Unsplash.com** - High quality, free photos
- **Pexels.com** - Free stock photos
- **Pixabay.com** - Free images and vectors
- **Freepik.com** - Free vectors and illustrations

Search for: "coffee cup", "sandwich", "ice cream", etc.

---

## ⚠️ Important Notes

1. **Image paths are relative** - If images don't show, check the path
2. **All files in same folder** - Keep `images/` folder next to HTML files
3. **Image names must match** - Coffee product needs `coffee.jpg` in `images/products/`
4. **File size matters** - Keep images under 500KB each
5. **No server needed** - Images will work when opening HTML locally

---

## 🚀 Step-by-Step Setup

1. ✅ Create `images/` folder in your project
2. ✅ Create `images/products/` subfolder
3. ✅ Add product images (name them: coffee.jpg, tea.jpg, etc.)
4. ✅ Update `content.js` with image paths
5. ✅ Update `index.html` product display code
6. ✅ Open `index.html` in browser - images should appear!

---

## 🔧 Troubleshooting

**Images not showing?**
- Check file paths match exactly
- Check image file names are correct
- Check all files are in same folder
- Try absolute paths: `file:///C:/path/to/images/coffee.jpg`

**Images look small/pixelated?**
- Use larger images (at least 200x200px)
- Use JPG for photos, PNG for graphics

**Images load slowly?**
- Compress images using: tinypng.com
- Use smaller file sizes (< 100KB each)

