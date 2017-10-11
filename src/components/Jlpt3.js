import React from 'react';


export class Jlpt3 extends React.Component {
  constructor(props){
      //super executes the parent constructor which is the react.component
      super();
      this.state= {
          initialJLPT3: props.initialJLPT3,
          JLPT3: props.JLPT3,
    };
  }


  JLPTkanji3function(){
    var blurbox = document.getElementById('blurbox3');
    blurbox.style.filter = "blur(7px)";
    let initialJLPT3 = this.state.initialJLPT3;
    if (initialJLPT3 === this.state.JLPT3.length - 1){
      initialJLPT3 = 0;
    } else{
      initialJLPT3++;
    }
    this.setState({
      initialJLPT3
    });
  }

  backFunction(){
    var blurbox = document.getElementById('blurbox3');
    blurbox.style.filter = "blur(7px)";
  let initialJLPT3 = this.state.initialJLPT3;
  if (initialJLPT3 === 0){
    initialJLPT3 = this.state.JLPT3.length - 1
  }else{
    initialJLPT3 --;
  }
  this.setState({
    initialJLPT3
  });
  }

  blurFunction(){
  var blurbox = document.getElementById('blurbox3');
  (blurbox.style.filter === "blur(7px)") ? blurbox.style.filter = "blur(0px)": blurbox.style.filter = "blur(7px)";
  }

  render(){
  var startJLPT3=this.state.initialJLPT3;
    return(
      <div className = "home-page">
        <p className = "category">{this.state.JLPT3[startJLPT3].category}</p>
        <p className = "character-main">{this.state.JLPT3[startJLPT3].character}</p>
        <div id="blurbox3" className="blurbox" style={{ filter:'blur(7px)' }}>
          <p className = "kunyomi center kanjiinformation">KUN: {this.state.JLPT3[startJLPT3].kunyomi}</p>
          <p className = "onyomi center kanjiinformation">ON: {this.state.JLPT3[startJLPT3].onyomi}</p>
          <p className = "meaning center kanjiinformation">MEANING: {this.state.JLPT3[startJLPT3].meaning}</p>
        </div>
        <div className="buttonflex">
          <div id="backbutton" className="backbutton button" onClick={()=> this.backFunction()}>BACK</div>
          <div id="blurbutton" className="blurbutton button" onClick={()=> this.blurFunction()}>UNBLUR</div>
          <div className="nextbutton button" id="JLPT3" onClick={()=> this.JLPTkanji3function()}>NEXT</div>
        </div>
      </div>
    );
  }
}

export default Jlpt3;
