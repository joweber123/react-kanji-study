import React from 'react';


export class Jlpt5 extends React.Component {
  constructor(props){
      //super executes the parent constructor which is the react.component
      super();
      this.state= {
          initialJLPT5: props.initialJLPT5,
          JLPT5: props.JLPT5,
    };
  }


  JLPTkanji5function(){
    var blurbox = document.getElementById('blurbox5');
    blurbox.style.filter = "blur(7px)";
    let initialJLPT5 = this.state.initialJLPT5;
    if (initialJLPT5 === this.state.JLPT5.length - 1){
      initialJLPT5 = 0;
    } else{
      initialJLPT5++;
    }
    this.setState({
      initialJLPT5
    });
  }

  backFunction(){
    var blurbox = document.getElementById('blurbox5');
    blurbox.style.filter = "blur(7px)";
  let initialJLPT5 = this.state.initialJLPT5;
  if (initialJLPT5 === 0){
    initialJLPT5 = this.state.JLPT5.length - 1
  }else{
    initialJLPT5 --;
  }
  this.setState({
    initialJLPT5
  });
  }

  blurFunction(){
  var blurbox = document.getElementById('blurbox5');
  (blurbox.style.filter === "blur(7px)") ? blurbox.style.filter = "blur(0px)": blurbox.style.filter = "blur(7px)";
  }

  render(){
  var startJLPT5=this.state.initialJLPT5;
    return(
      <div className = "home-page">
        <p className = "category">{this.state.JLPT5[startJLPT5].category}</p>
        <p className = "character-main">{this.state.JLPT5[startJLPT5].character}</p>
        <div id="blurbox5" className="blurbox" style={{ filter:'blur(7px)' }}>
          <p className = "kunyomi center kanjiinformation">KUN: {this.state.JLPT5[startJLPT5].kunyomi}</p>
          <p className = "onyomi center kanjiinformation">ON: {this.state.JLPT5[startJLPT5].onyomi}</p>
          <p className = "meaning center kanjiinformation">MEANING: {this.state.JLPT5[startJLPT5].meaning}</p>
          <p className = "common-words center kanjiinformation">EXAMPLE: WORD1 WORD2 WORD3</p>
        </div>
        <div className="buttonflex">
          <div id="backbutton" className="backbutton button" onClick={()=> this.backFunction()}>BACK</div>
          <div id="blurbutton" className="blurbutton button" onClick={()=> this.blurFunction()}>UNBLUR</div>
          <div className="nextbutton button" id="JLPT5" onClick={()=> this.JLPTkanji5function()}>NEXT</div>
        </div>
      </div>
    );
  }
}

export default Jlpt5;
