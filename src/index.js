import React from "react";
import { render } from "react-dom";
import kanjidata from './kanjijsonlist.json';
import { Header } from "./components/Header";

import { Jlpt1 } from "./components/Jlpt1";
import { Jlpt2 } from "./components/Jlpt2";
import { Jlpt3 } from "./components/Jlpt3";
import { Jlpt4 } from "./components/Jlpt4";
import { Jlpt5 } from "./components/Jlpt5";

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      JLPT1enabled: false,
      Jlpt1: null,
      clicked: false,
    };
  }

//clickon button and we check to see if that divId is the same as what is stored in our set state, if it is different we need to change out state
toggleVisibility(divId){

  var divs = ["JLPT1button","JLPT2button","JLPT3button","JLPT4button","JLPT5button",]
  var visibleDivId = divId;
  //here we store our clicked button in a variable 'visibleDivId
  for(this.i = 0; this.i < divs.length; this.i++) {
    //this loops through our divs array and does all of this for each element individually
    divId = divs[this.i];
    //and it sets our divId to each array element
    this.div = document.getElementById(divId);
    //this div is all of our buttons
    (visibleDivId === divId) ? this.div.style.display = "block": this.div.style.display = "none";
    //now we check to see if our stored clicked button is the same as any of our new "divId"(which is all of the members of the divs array), and if it is the same we display block, and if it is different we display none
  }
}

  render(){
  const JLPT1 = kanjidata.kanji.filter(kanji => (kanji.category ==='JLPT1'));
  const JLPT2 = kanjidata.kanji.filter(kanji => (kanji.category ==='JLPT2'));
  const JLPT3 = kanjidata.kanji.filter(kanji => (kanji.category ==='JLPT3'));
  const JLPT4 = kanjidata.kanji.filter(kanji => (kanji.category ==='JLPT4'));
  const JLPT5 = kanjidata.kanji.filter(kanji => (kanji.category ==='JLPT5'));

    return(
      <div className="app-container">
        <div className="main-left-container">
          <Header />
          <p className="buttondescription">Click on the buttons above to switch between grade level</p>
          <div className = "buttoncontainer">
            <div className="mainbutton"  onClick={()=> this.toggleVisibility('JLPT1button')}>JLPT1</div>
            <div className="mainbutton"  onClick={()=> this.toggleVisibility('JLPT2button')}>JLPT2</div>
            <div className="mainbutton"  onClick={()=> this.toggleVisibility('JLPT3button')}>JLPT3</div>
            <div className="mainbutton"  onClick={()=> this.toggleVisibility('JLPT4button')}>JLPT4</div>
            <div className="mainbutton"  onClick={()=> this.toggleVisibility('JLPT5button')}>JLPT5</div>
          </div>

        </div>
        <div className = "main-right-container">
          <div id="JLPT1button" style={{display:'block'}}><Jlpt1  initialJLPT1 = {0} JLPT1={JLPT1} /></div>
          <div id="JLPT2button" style={{display:'none'}}><Jlpt2  initialJLPT2 = {0} JLPT2={JLPT2} /></div>
          <div id="JLPT3button" style={{display:'none'}}><Jlpt3  initialJLPT3 = {0} JLPT3={JLPT3} /></div>
          <div id="JLPT4button" style={{display:'none'}}><Jlpt4  initialJLPT4 = {0} JLPT4={JLPT4} /></div>
          <div id="JLPT5button" style={{display:'none'}}><Jlpt5  initialJLPT5 = {0} JLPT5={JLPT5} /></div>

        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("root"));
