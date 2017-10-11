
import React from "react";

export class Home extends React.Component {
  //this saves the age in a property of this class Home.  We get the props passed into the constructor
  constructor(props){
      //super executes the parent constructor which is the react.component
      super();

      this.state= {
          initialKanji: props.initialKanji,
          initialJSONKanji: props.initialJSONKanji,
          parsedJSON: props.parsedJSON,
          initialJLPT1: props.initialJLPT1,
          JLPT1: props.JLPT1,
          JLPT2: props.JLPT2,
          JLPT3: props.JLPT3,
          JLPT4: props.JLPT4,
          JLPT5: props.JLPT5,
    };
  }

  render(){

    return(
      <div className = "Home Page">

        <h1>Everything below is my homepage</h1>

        

      </div>
    );
  }
}


export default Home;
//the two buttons are saying the same thing just one is using the arrow function
//the .bind(this) makes sure that "this" is pointing to our home object and not the button because this in javascript always refers to what is causeing the event, which is in this case the button
//<ul>
//{this.props.user.kanjis.category.map((kanjicategory, i) => <li key={i}> {kanjicategory}</li>)}

//</ul>
