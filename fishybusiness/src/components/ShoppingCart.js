
import React from 'react';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to the Betta Fish Store</h1>
      <p>
        We offer a wide selection of beautiful betta fish for sale. Browse our
        collection and find your perfect aquatic companion.
      </p>
      <div className="featured-products">
        {/* Display some featured products or special offers here */}
        <h2>Featured Products</h2>
        <div className="product-list">
          {/* Replace the following with actual featured product components */}
          <div className="product">
            <img
              src="https://via.placeholder.com/150"
              alt="Featured Product"
            />
            <h3>Featured Product 1</h3>
            <p>
              A brief description of the featured product and its unique
              features.
            </p>
          </div>
          <div className="product">
            <img
              src="https://via.placeholder.com/150"
              alt="Featured Product"
            />
            <h3>Featured Product 2</h3>
            <p>
              Another featured product with a captivating description for
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
