import React from 'react';


export class Jlpt2 extends React.Component {
  constructor(props){
      //super executes the parent constructor which is the react.component
      super();
      this.state= {
          initialJLPT2: props.initialJLPT2,
          JLPT2: props.JLPT2,
    };
  }


  JLPTkanji2function(){
    var blurbox = document.getElementById('blurbox2');
    blurbox.style.filter = "blur(7px)";
    let initialJLPT2 = this.state.initialJLPT2;
    if (initialJLPT2 === this.state.JLPT2.length - 1){
      initialJLPT2 = 0;
    } else{
      initialJLPT2++;
    }
    this.setState({
      initialJLPT2
    });
  }

  backFunction(){
    var blurbox = document.getElementById('blurbox2');
    blurbox.style.filter = "blur(7px)";
  let initialJLPT2 = this.state.initialJLPT2;
  if (initialJLPT2 === 0){
    initialJLPT2 = this.state.JLPT2.length - 1
  }else{
    initialJLPT2 --;
  }
  this.setState({
    initialJLPT2
  });
  }

  blurFunction(){
    var blurbox = document.getElementById('blurbox2');
    (blurbox.style.filter === "blur(7px)") ? blurbox.style.filter = "blur(0px)": blurbox.style.filter = "blur(7px)";
  }

  render(){
  var startJLPT2=this.state.initialJLPT2;
    return(
      <div className = "home-page">
        <p className = "category">{this.state.JLPT2[startJLPT2].category}</p>
        <p className = "character-main">{this.state.JLPT2[startJLPT2].character}</p>
        <div id="blurbox2" style={{ filter:'blur(7px)' }}>
          <p className = "kunyomi center kanjiinformation">KUN: {this.state.JLPT2[startJLPT2].kunyomi}</p>
          <p className = "onyomi center kanjiinformation">ON: {this.state.JLPT2[startJLPT2].onyomi}</p>
          <p className = "meaning center kanjiinformation">MEANING: {this.state.JLPT2[startJLPT2].meaning}</p>
          <p className = "common-words center kanjiinformation">EXAMPLE: WORD1 WORD2 WORD3</p>
        </div>
        <div className="buttonflex">
          <div id="backbutton" className="backbutton button" onClick={()=> this.backFunction()}>BACK</div>
          <div id="blurbutton" className="blurbutton button" onClick={()=> this.blurFunction()}>UNBLUR</div>
          <div className="nextbutton button" id="JLPT2" onClick={()=> this.JLPTkanji2function()}>NEXT</div>
        </div>
      </div>
    );
  }
}

export default Jlpt2;
