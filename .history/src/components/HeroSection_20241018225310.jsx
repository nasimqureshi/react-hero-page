import React from 'react';

const HeroSection = () => {
  return (
    <main className='hero'>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Discover the ultimate comfort and 
          style with our premium footwear</p>
          
          <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
      </div>

      <div className="shopping">
        <p>Also Available On</p>
        
        <div className="brand-icons">
          <img src="/images/amazon.png" alt='amazon' />        </div>
          <img src="https://i.imgur.com/8Q6Q7wB.png" />        </div>
      </div>
      
      <div className="hero-image"></div>
    </main>
  );
}

export default HeroSection;