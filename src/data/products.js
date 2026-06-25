const products = [

  // Vegetables
  { id: 1, name: "Tomato", price: 40, category: "Vegetables", image: "/images/products/tomato.jpg" },
  { id: 2, name: "Potato", price: 35, category: "Vegetables", image: "/images/products/potato.jpg" },
  { id: 3, name: "Onion", price: 50, category: "Vegetables", image: "/images/products/onion.jpg" },
  { id: 4, name: "Carrot", price: 60, category: "Vegetables", image: "/images/products/carrot.jpg" },
  { id: 5, name: "Beans", price: 70, category: "Vegetables", image: "/images/products/beans.jpg" },
  { id: 6, name: "Brinjal", price: 55, category: "Vegetables", image: "/images/products/brinjal.jpg" },
  { id: 7, name: "Cabbage", price: 30, category: "Vegetables", image: "/images/products/cabbage.jpg" },
  { id: 8, name: "Cauliflower", price: 45, category: "Vegetables", image: "/images/products/cauliflower.jpg" },
  { id: 9, name: "Drumstick", price: 80, category: "Vegetables", image: "/images/products/drumstick.jpg" },
  { id: 10, name: "Ladies Finger", price: 65, category: "Vegetables", image: "/images/products/ladiesfinger.jpg" },

  // Fruits
  { id: 11, name: "Apple", price: 120, category: "Fruits", image: "/images/products/apple.jpg" },
  { id: 12, name: "Banana", price: 60, category: "Fruits", image: "/images/products/banana.jpg" },
  { id: 13, name: "Orange", price: 90, category: "Fruits", image: "/images/products/orange.jpg" },
  { id: 14, name: "Mango", price: 150, category: "Fruits", image: "/images/products/mango.jpg" },
  { id: 15, name: "Pomegranate", price: 180, category: "Fruits", image: "/images/products/pomegranate.jpg" },
  { id: 16, name: "Grapes", price: 110, category: "Fruits", image: "/images/products/grapes.jpg" },
  { id: 17, name: "Papaya", price: 70, category: "Fruits", image: "/images/products/papaya.jpg" },
  { id: 18, name: "Guava", price: 80, category: "Fruits", image: "/images/products/guava.jpg" },
  { id: 19, name: "Watermelon", price: 50, category: "Fruits", image: "/images/products/watermelon.jpg" },
  { id: 20, name: "Pineapple", price: 90, category: "Fruits", image: "/images/products/pineapple.jpg" },

  // Dairy
  { id: 21, name: "Milk", price: 55, category: "Dairy", image: "/images/products/milk.jpg" },
  { id: 22, name: "Curd", price: 40, category: "Dairy", image: "/images/products/curd.jpg" },
  { id: 23, name: "Butter", price: 120, category: "Dairy", image: "/images/products/butter.jpg" },
  { id: 24, name: "Cheese", price: 180, category: "Dairy", image: "/images/products/cheese.jpg" },
  { id: 25, name: "Paneer", price: 90, category: "Dairy", image: "/images/products/paneer.jpg" },
  { id: 26, name: "Ghee", price: 550, category: "Dairy", image: "/images/products/ghee.jpg" },
  { id: 27, name: "Lassi", price: 35, category: "Dairy", image: "/images/products/lassi.jpg" },
  { id: 28, name: "Buttermilk", price: 20, category: "Dairy", image: "/images/products/buttermilk.jpg" },
  { id: 29, name: "Fresh Cream", price: 85, category: "Dairy", image: "/images/products/cream.jpg" },
  { id: 30, name: "Yogurt", price: 45, category: "Dairy", image: "/images/products/yogurt.jpg" },

  // Snacks
  { id: 31, name: "Lays Chips", price: 20, category: "Snacks", image: "/images/products/lays.jpg" },
  { id: 32, name: "Bingo", price: 20, category: "Snacks", image: "/images/products/bingo.jpg" },
  { id: 33, name: "Oreo", price: 40, category: "Snacks", image: "/images/products/oreo.jpg" },
  { id: 34, name: "Good Day", price: 30, category: "Snacks", image: "/images/products/goodday.jpg" },
  { id: 35, name: "Hide & Seek", price: 35, category: "Snacks", image: "/images/products/hideseek.jpg" },
  { id: 36, name: "Marie Gold", price: 25, category: "Snacks", image: "/images/products/mariegold.jpg" },
  { id: 37, name: "Kurkure", price: 20, category: "Snacks", image: "/images/products/kurkure.jpg" },
  { id: 38, name: "Mad Angles", price: 25, category: "Snacks", image: "/images/products/madangles.jpg" },
  { id: 39, name: "Popcorn", price: 50, category: "Snacks", image: "/images/products/popcorn.jpg" },
  { id: 40, name: "Nachos", price: 80, category: "Snacks", image: "/images/products/nachos.jpg" },

  // Beverages
  { id: 41, name: "Coca Cola", price: 40, category: "Beverages", image: "/images/products/coke.jpg" },
  { id: 42, name: "Pepsi", price: 40, category: "Beverages", image: "/images/products/pepsi.jpg" },
  { id: 43, name: "Sprite", price: 40, category: "Beverages", image: "/images/products/sprite.jpg" },
  { id: 44, name: "Maaza", price: 45, category: "Beverages", image: "/images/products/maaza.jpg" },
  { id: 45, name: "Frooti", price: 20, category: "Beverages", image: "/images/products/frooti.jpg" },
  { id: 46, name: "7UP", price: 40, category: "Beverages", image: "/images/products/7up.jpg" },
  { id: 47, name: "Mountain Dew", price: 45, category: "Beverages", image: "/images/products/dew.jpg" },
  { id: 48, name: "Red Bull", price: 125, category: "Beverages", image: "/images/products/redbull.jpg" },
  { id: 49, name: "Tropicana Juice", price: 110, category: "Beverages", image: "/images/products/tropicana.jpg" },
  { id: 50, name: "Appy Fizz", price: 25, category: "Beverages", image: "/images/products/appyfizz.jpg" },


  // Rice & Grains
{ id: 51, name: "Aashirvaad Atta", price: 450, category: "Rice & Grains", image: "/images/products/atta.jpg" },
{ id: 52, name: "India Gate Rice", price: 899, category: "Rice & Grains", image: "/images/products/rice.jpg" },
{ id: 53, name: "Ragi Flour", price: 120, category: "Rice & Grains", image: "/images/products/ragi.jpg" },
{ id: 54, name: "Toor Dal", price: 160, category: "Rice & Grains", image: "/images/products/toordal.jpg" },
{ id: 55, name: "Moong Dal", price: 140, category: "Rice & Grains", image: "/images/products/moongdal.jpg" },

// Oil & Masala
{ id: 56, name: "Sunflower Oil", price: 180, category: "Oil & Masala", image: "/images/products/oil.jpg" },
{ id: 57, name: "Turmeric Powder", price: 45, category: "Oil & Masala", image: "/images/products/turmeric.jpg" },
{ id: 58, name: "Chilli Powder", price: 60, category: "Oil & Masala", image: "/images/products/chilli.jpg" },
{ id: 59, name: "Coriander Powder", price: 50, category: "Oil & Masala", image: "/images/products/coriander.jpg" },
{ id: 60, name: "Garam Masala", price: 85, category: "Oil & Masala", image: "/images/products/garammasala.jpg" },

// Bakery
{ id: 61, name: "Bread", price: 40, category: "Bakery", image: "/images/products/bread.jpg" },
{ id: 62, name: "Cake", price: 250, category: "Bakery", image: "/images/products/cake.jpg" },
{ id: 63, name: "Muffin", price: 35, category: "Bakery", image: "/images/products/muffin.jpg" },
{ id: 64, name: "Croissant", price: 60, category: "Bakery", image: "/images/products/croissant.jpg" },
{ id: 65, name: "Cookies", price: 90, category: "Bakery", image: "/images/products/cookies.jpg" },

// Household
{ id: 66, name: "Surf Excel", price: 120, category: "Household", image: "/images/products/surfexcel.jpg" },
{ id: 67, name: "Harpic", price: 95, category: "Household", image: "/images/products/harpic.jpg" },
{ id: 68, name: "Lizol", price: 140, category: "Household", image: "/images/products/lizol.jpg" },
{ id: 69, name: "Scotch Brite", price: 40, category: "Household", image: "/images/products/scotchbrite.jpg" },
{ id: 70, name: "Vim Liquid", price: 110, category: "Household", image: "/images/products/vim.jpg" },

// Personal Care
{ id: 71, name: "Dove Soap", price: 55, category: "Personal Care", image: "/images/products/dove.jpg" },
{ id: 72, name: "Clinic Plus Shampoo", price: 120, category: "Personal Care", image: "/images/products/shampoo.jpg" },
{ id: 73, name: "Colgate Toothpaste", price: 85, category: "Personal Care", image: "/images/products/colgate.jpg" },
{ id: 74, name: "Nivea Face Wash", price: 150, category: "Personal Care", image: "/images/products/facewash.jpg" },
{ id: 75, name: "Ponds Powder", price: 95, category: "Personal Care", image: "/images/products/ponds.jpg" },
];

export default products;