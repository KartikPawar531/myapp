import React from 'react'

export default function Header() {
  return (
    <>
      <section className="header">
    <div className="navbar">
        <input type="checkbox" id="check"/>
        <label for="check" id="check-btn"><i className="fa fa-bars"></i></label>
            <label className="logo">Mama’s Kitchen</label>
        <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><button className="reg-btn">Register</button></li>
        </ul>
    </div>

        <div className="content">
            <h1 className="intro-head">Taste the best that surprise you</h1>
            <p>we ready to supply vegan food for you anytime,anywhere</p>
            <a href="#" className="head-btn">Buy now</a>
        </div>
</section>   
    </>
  )
}
