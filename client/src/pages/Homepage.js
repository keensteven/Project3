import React, { Component } from 'react';
import HomeHero from "../components/HomeHero";
import Photowrapper from "../components/Photowrapper";



class Yourlist extends Component {  


  render() {
    return (
      <div>

        <HomeHero backgroundImage="/img/dandelion29.jpg">
          <h1>Wish List</h1>
          <p className="hometext">Have you ever wished you could give your friends and family a list of what to get you for holiday? Or wished you had one of those lists for your children? The Wishlist app was made for you! With a few simple clicks you can curate a list to send to family members to take the guessing out of gift giving.</p>
        </HomeHero>
        <Photowrapper>
        <a href="/products"><img className="circleimage" src="/img/earbudcircle.jpg" alt="earbuds" /></a>
        <a href="/products"><img className="circleimage" src="/img/colognecircle.jpg" alt="cologne" /></a>
        <a href="/products"><img className="circleimage" src="/img/speakercircle.jpg" alt="speaker" /></a>
        <a href="/products"><img className="circleimage" src="/img/watchcircle.jpg" alt="watch" /></a>
        </Photowrapper>
      </div>
    );
  }

}

export default Yourlist;
