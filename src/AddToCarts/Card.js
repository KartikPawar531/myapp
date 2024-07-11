import React from 'react';
import data from "./datalist.json";

const Card = () => {
    return(
        <>
        <div className="row">
        {data.map((card) => {
          return (
            <>
                <div className="col-md-3">
              <div key={card.id} className="card-id">
                <div class="card" style={{ marginRight: "spacing" + "em" }}>    
                  <img src={card.img} class="card-img-top" />
                  <div class="card-body">
                    <h3 class="card-title">{card.name}</h3>
                    <p class="card-text">{card.description}</p>
                  </div>
                  <div class="list-group list-group-flush">{card.category}</div>
                  <span>{card.price}$</span><br />
                  <button className='head-btn'>Add to card</button>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </div>
        
      
        </>
    )
}

export default Card;
