import React from 'react';
import {Players} from './../api/players'


export default class AddPlayer extends React.Component{

  registerEvent(){
    var button = document.getElementById("clickMeButton");
button.addEventListener("click", function() {
            var messgeToPost = {'ButtonId':'clickMeButton'};
            window.webkit.messageHandlers.buttonClicked.postMessage(messgeToPost);
        },false);
  }

   handleSubmit = (e) => {
        e.preventDefault();
    
        let name = e.target.playerName.value
    
        if (name){
               
          Players.insert({
            name: name,
            score: 0
          });
      
          e.target.playerName.value = ''
         
          registerEvent();
    
        }
        
      }
    render(){
        return (
          <div className = "item"> 
            <form className = "form" onSubmit = {this.handleSubmit.bind(this)}>
            <input className = "form__input" type = 'text' 
                   name = 'playerName' 
                   placeholder = 'Enter player name'/>
            <button className = "button">Add Player</button>
            </form>
          </div>
        )
    }
}