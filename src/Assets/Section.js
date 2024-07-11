import React from 'react'

export default function Section() {
  return (
    <>
      <div className="container">
         <h2 className="sub-title">Exclusives Offers</h2>
         <div className="exclusives">
            <div>
            <img src="/images/pizza.jpg" alt="loading"/>
            <span>
                <h3>Pizza's</h3>
                <p>Starts @ $180</p>
            </span>
        </div>
        <div>
            <img src="/images/burgers.jpg" alt="loading"/>
            <span>
                <h3>Burger's</h3>
                <p>Starts @ $149</p>
            </span>
        </div>
        <div>
            <img src="/images/cake.jpg" alt="loading"/>
            <span>
                <h3>Cake</h3>
                <p>Starts @ $300</p>
            </span>
        </div>
        <div>
            <img src="/images/momos.jpg" alt="loading"/>
            <span>
                <h3>Momos</h3>
                <p>Starts @ $270</p>
            </span>
        </div>
        <div>
            <img src="/images/chicken.jpg" alt="loading"/>
            <span>
                <h3>Chicken</h3>
                <p>Starts @ $250</p>
            </span>
        </div>
    </div>

    <h2 className="sub-title">Choose Your Meal....</h2>
    <div className="card-container">
        <div className="card">
            <img src="/images/breakfast.jpg" alt="loading"/>
            <div className="card-content">
                <h2>Breakfast</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium mollitia harum eius maiores soluta explicabo deleniti vitae quo.</p>
                <a href="#" className="trend-btn">Order now</a>
            </div>
        </div>
        <div className="card">
            <img src="/images/lunch.jpg" alt="loading"/>
            <div className="card-content">
                <h2>Lunch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium mollitia harum eius maiores soluta explicabo deleniti vitae quo.</p>
                <a href="#" className="trend-btn">Order now</a>
            </div>
        </div>
        <div className="card">
            <img src="/images/dinner.webp" alt="loading"/>
            <div className="card-content">
                <h2>Dinner</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium mollitia harum eius maiores soluta explicabo deleniti vitae quo.</p>
                <a href="#" className="trend-btn">Order now</a>
            </div>
        </div>
    </div>

    <div className="cta">
        <h3>Experience the Food with Indian spices <br/>
        <span id="element"></span>
        </h3>
        <p>laughter is brightest, where food is best.</p>
        <a href="#" className="cta-btn">Know more</a>
    </div>

    <h2 className="sub-title">Taste of Indian Spices</h2>
    <div className="stories">
        <div>
            <img src="/images/indian cousine.jpg" alt="loading"/>
            <p>Popular Indian cousine with a budget of just $1,000</p>
        </div>
        <div>
            <img src="/images/north indian.jpg" alt="loading"/>
            <p>Popular  North-Indian cousine with a budget of just $1,500</p>
        </div>
        <div>
            <img src="/images/south indian.jpg" alt="loading"/>
            <p>Popular South-indian cousine with a budget of just $800</p>
        </div>
    </div>
        <a href="#" className="start-btn">Start Ordering</a>
</div>
</>
  );
}
