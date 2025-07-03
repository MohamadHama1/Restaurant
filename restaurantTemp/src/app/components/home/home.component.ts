import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   isMobileNavOpen = false;
  galleryImages = [
    {
      url: 'https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/ResizedImage600747-209049629-970288707118314-8502807063908934503-n.jpg',
      alt: 'Signature Dish',
      title: 'Signature Beef Wellington'
    },
    {
      url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Fresh Ingredients',
      title: 'Farm Fresh Ingredients'
    },
    {
      url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Pasta Special',
      title: 'Handmade Pasta'
    },
    {
      url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Fine Dining',
      title: 'Elegant Presentation'
    },
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Restaurant Ambiance',
      title: 'Warm Atmosphere'
    },
    {
      url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Dessert',
      title: 'Artisan Desserts'
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
}
