import React from 'react';


export class Jlpt1 extends React.Component {
  constructor(props){
      //super executes the parent constructor which is the react.component
      super();
      this.state= {
          initialJLPT1: props.initialJLPT1,
          JLPT1: props.JLPT1,
    };
  }


  JLPTkanji1function(){
    var blurbox = document.getElementById('blurbox1');
    blurbox.style.filter = "blur(7px)";
    let initialJLPT1 = this.state.initialJLPT1;
    if (initialJLPT1 === this.state.JLPT1.length - 1){
      initialJLPT1 = 0;
    } else{
      initialJLPT1++;
    }
    this.setState({
      initialJLPT1
    });
  }

  backFunction(){
    var blurbox = document.getElementById('blurbox1');
    blurbox.style.filter = "blur(7px)";
  let initialJLPT1 = this.state.initialJLPT1;
  if (initialJLPT1 === 0){
    initialJLPT1 = this.state.JLPT1.length - 1
  }else{
    initialJLPT1 --;
  }
  this.setState({
    initialJLPT1
  });
  }

blurFunction(){
  var blurbox = document.getElementById('blurbox1');
  (blurbox.style.filter === "blur(7px)") ? blurbox.style.filter = "blur(0px)": blurbox.style.filter = "blur(7px)";
}

  render(){
  var startJLPT1=this.state.initialJLPT1;
    return(
      <div className = "home-page">
        <p className = "category">{this.state.JLPT1[startJLPT1].category}</p>
        <p className = "character-main">{this.state.JLPT1[startJLPT1].character}</p>
        <div id="blurbox1" className="blurbox" style={{ filter:'blur(7px)' }}>
          <p className = "kunyomi center kanjiinformation">KUN: {this.state.JLPT1[startJLPT1].kunyomi}</p>
          <p className = "onyomi center kanjiinformation">ON: {this.state.JLPT1[startJLPT1].onyomi}</p>
          <p className = "meaning center kanjiinformation">MEANING: {this.state.JLPT1[startJLPT1].meaning}</p>
          <p className = "common-words center kanjiinformation">EXAMPLE: WORD1 WORD2 WORD3</p>
        </div>
        <div className="buttonflex">
          <div id="backbutton" className="backbutton button" onClick={()=> this.backFunction()}>BACK</div>
          <div id="blurbutton" className="blurbutton button" onClick={()=> this.blurFunction()}>UNBLUR</div>
          <div className="nextbutton button" id="JLPT1" onClick={()=> this.JLPTkanji1function()}>NEXT</div>
        </div>
      </div>
    );
  }
}

export default Jlpt1;
