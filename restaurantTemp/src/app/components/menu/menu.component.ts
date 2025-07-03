import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  activeCategory = 'All'; // Changed default to 'All'
   isMobileNavOpen = false;
  // Added 'All' as the first category
  categories = ['All', 'Appetizers', 'Grilled', 'Shawarma', 'Pizza', 'Rolls', 'Rice Dishes', 'Drinks'];

  menuItems = [
    // Appetizers
    {
      name: 'Hummus with Pita',
      category: 'Appetizers',
      price: 12,
      description: 'Creamy chickpea dip served with warm pita bread and olive oil drizzle',
      image: 'https://entertainingwithbeth.com/wp-content/uploads/2021/02/homemade-hummus-dip-recipe.jpg',
      tags: ['Vegetarian'],
      featured: true
    },
    {
      name: 'Falafel Plate',
      category: 'Appetizers',
      price: 14,
      description: 'Crispy fried chickpea balls served with tahini sauce and fresh vegetables',
      image: 'https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2023/11/falafel-platter-3.jpg',
      tags: ['Vegetarian', 'Gluten-Free']
    },
    {
      name: 'Baba Ganoush',
      category: 'Appetizers',
      price: 11,
      description: 'Smoky roasted eggplant dip with garlic, tahini, and lemon juice',
      image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/03/Baba-Ganoush-main.jpg',
      tags: ['Vegetarian', 'Gluten-Free']
    },
    {
      name: 'Kibbeh',
      category: 'Appetizers',
      price: 16,
      description: 'Traditional Lebanese fried bulgur and meat croquettes with yogurt sauce',
      image: 'https://www.simplyleb.com/wp-content/uploads/Kibbi-26.jpg'
    },

    // Grilled
    {
      name: 'Mixed Grill Platter',
      category: 'Grilled',
      price: 32,
      description: 'Combination of lamb kofta, chicken shish, and beef kabab with rice and salad',
      image: 'https://cleavermeatsltd.co.uk/images/products/271/small/1727106152-097762500.webp',
      featured: true
    },
    {
      name: 'Lamb Kofta',
      category: 'Grilled',
      price: 24,
      description: 'Seasoned ground lamb skewers grilled to perfection with herbs and spices',
      image: 'https://www.spoonforkbacon.com/wp-content/uploads/2020/05/Lamb_kofta-recipe-card.jpg'
    },
    {
      name: 'Chicken Shish Tawook',
      category: 'Grilled',
      price: 22,
      description: 'Marinated chicken breast cubes grilled with vegetables and garlic sauce',
      image: 'https://www.anediblemosaic.com/wp-content/uploads//2021/07/shish-taouk-chicken-recipe-featured-image.jpg'
    },
    {
      name: 'Beef Kabab',
      category: 'Grilled',
      price: 26,
      description: 'Tender beef chunks marinated in Arabic spices and grilled over charcoal',
      image: 'https://data.thefeedfeed.com/static/2022/08/09/166008890862f2f24c26a64.jpg'
    },
    {
      name: 'Grilled Fish',
      category: 'Grilled',
      price: 28,
      description: 'Fresh sea bass marinated with herbs and grilled with lemon and olive oil',
      image: 'https://static01.nyt.com/images/2021/08/18/dining/20Porgyrex1/12Porgyrex2-jumbo.jpg'
    },

    // Shawarma
    {
      name: 'Chicken Shawarma',
      category: 'Shawarma',
      price: 18,
      description: 'Slow-roasted marinated chicken with garlic sauce in fresh pita bread',
      image: 'https://nutrient-matters.com/wp-content/uploads/2025/03/IMG_5274-580x1024.jpg',
      featured: true
    },
    {
      name: 'Lamb Shawarma',
      category: 'Shawarma',
      price: 20,
      description: 'Tender lamb slices with tahini sauce, onions, and pickles in pita',
      image: 'https://silkroadrecipes.com/wp-content/uploads/2022/01/Lamb-Shawarma-Shredded-square.jpg'
    },
    {
      name: 'Mixed Shawarma',
      category: 'Shawarma',
      price: 22,
      description: 'Combination of chicken and lamb shawarma with mixed sauces',
      image: 'https://shawarmaz.com/wp-content/uploads/2021/05/mix.jpg'
    },

    // Pizza
    {
      name: 'Manakish Zaatar',
      category: 'Pizza',
      price: 14,
      description: 'Traditional Lebanese flatbread topped with zaatar herbs and olive oil',
      image: 'https://urbanfarmandkitchen.com/wp-content/uploads/2023/08/manakish-zaatar-2.jpg',
      tags: ['Vegetarian']
    },
    {
      name: 'Lahmacun',
      category: 'Pizza',
      price: 16,
      description: 'Turkish-style thin crust pizza with spiced ground meat and vegetables',
      image: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/03/vegan-turkish-pizza-lahmacun-800x1200.jpg'
    },
    {
      name: 'Cheese Manakish',
      category: 'Pizza',
      price: 15,
      description: 'Fresh dough topped with akkawi cheese and baked to golden perfection',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPcV5XDgJqDHVxq6tmnmaopcQskqSkOQF7Q&s',
      tags: ['Vegetarian']
    },
    {
      name: 'Mixed Manakish',
      category: 'Pizza',
      price: 17,
      description: 'Combination of zaatar and cheese on fresh baked dough',
      image: 'https://www.shutterstock.com/image-photo/mix-baked-fatayer-manakeesh-pastry-260nw-1485111263.jpg',
      tags: ['Vegetarian']
    },

    // Rolls
    {
      name: 'Chicken Roll',
      category: 'Rolls',
      price: 16,
      description: 'Grilled chicken with garlic sauce, pickles, and vegetables in lavash bread',
      image: 'https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2132499279.jpg'
    },
    {
      name: 'Beef Roll',
      category: 'Rolls',
      price: 18,
      description: 'Seasoned beef with tahini sauce and fresh vegetables wrapped in lavash',
      image: 'https://thewoksoflife.com/wp-content/uploads/2022/06/taiwanese-beef-rolls-18.jpg'
    },
    {
      name: 'Kafta Roll',
      category: 'Rolls',
      price: 17,
      description: 'Grilled kafta meat with hummus and vegetables in fresh bread roll',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Halloumi Roll',
      category: 'Rolls',
      price: 15,
      description: 'Grilled halloumi cheese with vegetables and herbs in lavash bread',
      image: 'https://nibbleanddine.com/wp-content/uploads/2023/02/Halloumi-sandwich-with-lemon.jpg',
      tags: ['Vegetarian']
    },

    // Rice Dishes
    {
      name: 'Kabsa',
      category: 'Rice Dishes',
      price: 26,
      description: 'Traditional Saudi rice dish with tender lamb, aromatic spices, and almonds',
      image: 'https://www.maggiarabia.com/sites/default/files/srh_recipes/c5a635ff3b3212386f5a369bc390f163.png',
      featured: true
    },
    {
      name: 'Chicken Biryani',
      category: 'Rice Dishes',
      price: 22,
      description: 'Fragrant basmati rice layered with spiced chicken and fresh herbs',
      image: 'https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg'
    },
    {
      name: 'Maqluba',
      category: 'Rice Dishes',
      price: 24,
      description: 'Upside-down rice dish with chicken, vegetables, and Middle Eastern spices',
      image: 'https://www.yumlista.com/storage/recipes/HipL4GUGzbYxUy8NNr6CXjePSYl19bj289xWoMfQ.jpg'
    },
    {
      name: 'Stuffed Vine Leaves',
      category: 'Rice Dishes',
      price: 18,
      description: 'Grape leaves stuffed with rice, herbs, and spices, served with yogurt',
      image: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/07/vegan-stuffed-grape-leaves-portion-800x1200.jpg',
      tags: ['Vegetarian']
    },

    // Drinks
    {
      name: 'Fresh Mint Lemonade',
      category: 'Drinks',
      price: 8,
      description: 'Refreshing blend of fresh lemon juice, mint leaves, and sparkling water',
      image: 'https://feelgoodfoodie.net/wp-content/uploads/2023/04/Mint-Lemonade-10b.jpg'
    },
    {
      name: 'Arabic Coffee',
      category: 'Drinks',
      price: 6,
      description: 'Traditional cardamom-flavored coffee served in small cups',
      image: 'https://beinspired.au/wp-content/uploads/2024/06/Lebanese-Coffee.jpeg'
    },
    {
      name: 'Jallab',
      category: 'Drinks',
      price: 9,
      description: 'Traditional Middle Eastern drink with date syrup, rose water, and pine nuts',
      image: 'https://soursweetbitter.com/wp-content/uploads/2025/02/jallab-480x270.webp'
    },
    {
      name: 'Ayran',
      category: 'Drinks',
      price: 7,
      description: 'Refreshing yogurt drink blended with water and a pinch of salt',
      image: 'https://www.themediterraneandish.com/wp-content/uploads/2023/08/Ayran-WEB-10.jpg'
    },
    {
      name: 'Tamarind Juice',
      category: 'Drinks',
      price: 8,
      description: 'Sweet and tangy tamarind drink served chilled with ice',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREq_7FfzfNWdrqjaAb1eHoqXRouTkobuMkLg&s'
    }
  ];

   toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    
    // Add hamburger active class
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.toggle('active');
    }
    
    // Prevent body scroll when menu is open
    if (this.isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileNav(): void {
    this.isMobileNavOpen = false;
    
    // Remove hamburger active class
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.remove('active');
    }
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getFilteredItems() {
    // If 'All' is selected, return all items, otherwise filter by category
    if (this.activeCategory === 'All') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.activeCategory);
  }
}