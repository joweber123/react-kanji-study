import React from 'react';


export class Jlpt4 extends React.Component {
  constructor(props){
      //super executes the parent constructor which is the react.component
      super();
      this.state= {
          initialJLPT4: props.initialJLPT4,
          JLPT4: props.JLPT4,
    };
  }


  JLPTkanji4function(){
    var blurbox = document.getElementById('blurbox4');
    blurbox.style.filter = "blur(7px)";
    let initialJLPT4 = this.state.initialJLPT4;
    if (initialJLPT4 === this.state.JLPT4.length - 1){
      initialJLPT4 = 0;
    } else{
      initialJLPT4++;
    }
    this.setState({
      initialJLPT4
    });
  }

  backFunction(){
    var blurbox = document.getElementById('blurbox4');
    blurbox.style.filter = "blur(7px)";
  let initialJLPT4 = this.state.initialJLPT4;
  if (initialJLPT4 === 0){
    initialJLPT4 = this.state.JLPT4.length - 1
  }else{
    initialJLPT4 --;
  }
  this.setState({
    initialJLPT4
  });
  }

  blurFunction(){
  var blurbox = document.getElementById('blurbox4');
  (blurbox.style.filter === "blur(7px)") ? blurbox.style.filter = "blur(0px)": blurbox.style.filter = "blur(7px)";
  }

  render(){
  var startJLPT4=this.state.initialJLPT4;
    return(
      <div className = "home-page">
        <p className = "category">{this.state.JLPT4[startJLPT4].category}</p>
        <p className = "character-main">{this.state.JLPT4[startJLPT4].character}</p>
        <div id="blurbox4" className="blurbox" style={{ filter:'blur(7px)' }}>
          <p className = "kunyomi center kanjiinformation">KUN: {this.state.JLPT4[startJLPT4].kunyomi}</p>
          <p className = "onyomi center kanjiinformation">ON: {this.state.JLPT4[startJLPT4].onyomi}</p>
          <p className = "meaning center kanjiinformation">MEANING: {this.state.JLPT4[startJLPT4].meaning}</p>
          <p className = "common-words center kanjiinformation">EXAMPLE: WORD1 WORD2 WORD3</p>
      </div>
        <div className="buttonflex">
          <div id="backbutton" className="backbutton button" onClick={()=> this.backFunction()}>BACK</div>
          <div id="blurbutton" className="blurbutton button" onClick={()=> this.blurFunction()}>UNBLUR</div>
          <div className="nextbutton button" id="JLPT4" onClick={()=> this.JLPTkanji4function()}>NEXT</div>
        </div>
      </div>
    );
  }
}

export default Jlpt4;
