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
  
  // Added 'All' as the first category
  categories = ['All', 'Appetizers', 'Grilled', 'Shawarma', 'Pizza', 'Rolls', 'Rice Dishes', 'Drinks'];

  menuItems = [
    // Appetizers
    {
      name: 'Hummus with Pita',
      category: 'Appetizers',
      price: 12,
      description: 'Creamy chickpea dip served with warm pita bread and olive oil drizzle',
      image: 'https://images.unsplash.com/photo-1571197772032-7476780e7bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian'],
      featured: true
    },
    {
      name: 'Falafel Plate',
      category: 'Appetizers',
      price: 14,
      description: 'Crispy fried chickpea balls served with tahini sauce and fresh vegetables',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Gluten-Free']
    },
    {
      name: 'Baba Ganoush',
      category: 'Appetizers',
      price: 11,
      description: 'Smoky roasted eggplant dip with garlic, tahini, and lemon juice',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e9a13086?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian', 'Gluten-Free']
    },
    {
      name: 'Kibbeh',
      category: 'Appetizers',
      price: 16,
      description: 'Traditional Lebanese fried bulgur and meat croquettes with yogurt sauce',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },

    // Grilled
    {
      name: 'Mixed Grill Platter',
      category: 'Grilled',
      price: 32,
      description: 'Combination of lamb kofta, chicken shish, and beef kabab with rice and salad',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      name: 'Lamb Kofta',
      category: 'Grilled',
      price: 24,
      description: 'Seasoned ground lamb skewers grilled to perfection with herbs and spices',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Chicken Shish Tawook',
      category: 'Grilled',
      price: 22,
      description: 'Marinated chicken breast cubes grilled with vegetables and garlic sauce',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Beef Kabab',
      category: 'Grilled',
      price: 26,
      description: 'Tender beef chunks marinated in Arabic spices and grilled over charcoal',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Grilled Fish',
      category: 'Grilled',
      price: 28,
      description: 'Fresh sea bass marinated with herbs and grilled with lemon and olive oil',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },

    // Shawarma
    {
      name: 'Chicken Shawarma',
      category: 'Shawarma',
      price: 18,
      description: 'Slow-roasted marinated chicken with garlic sauce in fresh pita bread',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      name: 'Lamb Shawarma',
      category: 'Shawarma',
      price: 20,
      description: 'Tender lamb slices with tahini sauce, onions, and pickles in pita',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mixed Shawarma',
      category: 'Shawarma',
      price: 22,
      description: 'Combination of chicken and lamb shawarma with mixed sauces',
      image: 'https://images.unsplash.com/photo-1571197772032-7476780e7bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Falafel Shawarma',
      category: 'Shawarma',
      price: 16,
      description: 'Crispy falafel with vegetables, tahini, and hot sauce in pita bread',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian']
    },

    // Pizza
    {
      name: 'Manakish Zaatar',
      category: 'Pizza',
      price: 14,
      description: 'Traditional Lebanese flatbread topped with zaatar herbs and olive oil',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian']
    },
    {
      name: 'Lahmacun',
      category: 'Pizza',
      price: 16,
      description: 'Turkish-style thin crust pizza with spiced ground meat and vegetables',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Cheese Manakish',
      category: 'Pizza',
      price: 15,
      description: 'Fresh dough topped with akkawi cheese and baked to golden perfection',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian']
    },
    {
      name: 'Mixed Manakish',
      category: 'Pizza',
      price: 17,
      description: 'Combination of zaatar and cheese on fresh baked dough',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian']
    },

    // Rolls
    {
      name: 'Chicken Roll',
      category: 'Rolls',
      price: 16,
      description: 'Grilled chicken with garlic sauce, pickles, and vegetables in lavash bread',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Beef Roll',
      category: 'Rolls',
      price: 18,
      description: 'Seasoned beef with tahini sauce and fresh vegetables wrapped in lavash',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1571197772032-7476780e7bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian']
    },

    // Rice Dishes
    {
      name: 'Kabsa',
      category: 'Rice Dishes',
      price: 26,
      description: 'Traditional Saudi rice dish with tender lamb, aromatic spices, and almonds',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      name: 'Chicken Biryani',
      category: 'Rice Dishes',
      price: 22,
      description: 'Fragrant basmati rice layered with spiced chicken and fresh herbs',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Maqluba',
      category: 'Rice Dishes',
      price: 24,
      description: 'Upside-down rice dish with chicken, vegetables, and Middle Eastern spices',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Stuffed Vine Leaves',
      category: 'Rice Dishes',
      price: 18,
      description: 'Grape leaves stuffed with rice, herbs, and spices, served with yogurt',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vegetarian']
    },

    // Drinks
    {
      name: 'Fresh Mint Lemonade',
      category: 'Drinks',
      price: 8,
      description: 'Refreshing blend of fresh lemon juice, mint leaves, and sparkling water',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Arabic Coffee',
      category: 'Drinks',
      price: 6,
      description: 'Traditional cardamom-flavored coffee served in small cups',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Jallab',
      category: 'Drinks',
      price: 9,
      description: 'Traditional Middle Eastern drink with date syrup, rose water, and pine nuts',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Ayran',
      category: 'Drinks',
      price: 7,
      description: 'Refreshing yogurt drink blended with water and a pinch of salt',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Tamarind Juice',
      category: 'Drinks',
      price: 8,
      description: 'Sweet and tangy tamarind drink served chilled with ice',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

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