import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [products] = useState([
    {
      id: 1,
      item: 'Supple Leather Jacket',
      style: 'Moto',
      color: 'Road Rage',
      price: 325,
      description:
        'Trendy, yet timeless - this jacket is sure to last you "till the cows come home 🐄"',
      image: './images/mihajlo-sebalj-n8XEtnasNqk-unsplash.jpg',
    },
    {
      id: 2,
      item: 'Strappy Heels',
      style: 'Stiletto',
      color: 'Mulled Wine',
      price: 200,
      description:
        'Instantly feel 4" taller and guarantee yourself a "WIN" on any occasion',
      image: './images/frank-flores-jdGU2oyRW5E-unsplash.jpg',
    },
    {
      id: 3,
      item: 'Cashmere Sweater',
      style: 'Turtleneck',
      color: 'Light Nougat',
      price: 135,
      description: (
        <>
          As soft and cozy as snuggling up in a{' '}
          <a
            href='https://www.pendleton-usa.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pendleton
          </a>{' '}
          blanket by a fire pit on an Oregon coast
        </>
      ),
      image: './images/dellon-thomas-aq4lqDhEqG8-unsplash.jpg',
    },
    {
      id: 4,
      item: 'Wool Peacoat',
      style: 'Single Breasted, Mid-Thigh',
      color: 'Tiffany Blue',
      price: 250,
      description:
        'Tie a white ribbon at your waist to drop a "not-so-subtle" hint to your partner',
      image: './images/asal-mshk-ZMF6eI7bYD0-unsplash.jpg',
    },
    {
      id: 5,
      item: 'Silk Blouse',
      style: 'Long Sleeve Button-Up',
      color: 'Softest Greige',
      price: 115,
      description:
        'This luxurious silk blouse may look formal, but is begging to be touched',
      image: './images/tri-vo-TKCMHUutmrk-unsplash.jpg',
    },
    {
      id: 6,
      item: 'Colorful Tote',
      style: 'Hand-Dyed in India',
      color: 'Desert Tan',
      price: 135,
      description:
        'Finally! An accessory every bit as unique as you (no two are the same!)',
      image: './images/charu-gupta.png',
    },
  ]);

  return (
    <>
      <div className='welcomeText'>
        <div className='heroBanner'>
          <img
            src="./images/Poppy's.svg"
            alt="Poppy's Boutique Logo"
          />

          <p className='boutiqueText'>
            Where every piece is hand-picked with love ❤️
          </p>
        </div>
        <p className='newArrivalsText'>Check out our Latest Arrivals!</p>
        <ProductList allProducts={products} />
        <footer>
          <p>© 2025 Poppy's Boutique. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
