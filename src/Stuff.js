import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
       <h1>Discover the Ultimate Piano Game and Become a Virtuoso!</h1>
       <p>The A23 Virtual Piano comes packed with a great selection of interactive songs that you can easily play 
           using its intuitive LED-Guided performance system (A).Also, those players looking for an extra challenge
            can now have great fun using our new GAME MODE.</p>
        
            <h1>GAME MODE — Find out how good of a pianist you are</h1>
            <p>Recursive Arts Piano Game is an excellent tool to improve your piano playing skills by assessing how 
                accurate you are when playing a particular piece. If GAME MODE is enabled (B), the player's SCORE is
                 displayed above the keyboard (C) so points can be earned or lost depending on how good
                 your timing is when pressing the indicated keys. Just try to be precise: not too late, not too early!</p>
                 <h3>Piano Game Rules</h3>
                 <ol>
                     <ul>Press a key as soon as its LED-light turns green</ul>
                     <ul>If you are too early or too late pressing the key you lose one point (-1)</ul>
                     <ul>If you are just slightly off the perfect timing no points are gained or lost (+0)</ul>
                     <ul>If you are close enough to the perfect timing you obtain one point (+1)</ul>
                 </ol>
                 
                 
      </div>
    );
  }
}
 
export default Stuff;