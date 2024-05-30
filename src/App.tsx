import { Component, ReactNode } from "react";
import Cards from "./components/cards/cards.component";


class App extends Component {

  constructor(){
    super() as any;
    this.state = {
      name: "Sreevarsh Vasista"
    }

  }

  render(): ReactNode {
    return (
      <div>
        <h1>Welcome to stackblitz development on class component</h1>
        <p>Hi {(this.state as any).name}</p>
        <Cards></Cards>
        <button onClick={()=>{
          this.setState(() => {return {name:"Vasista Sreevarsh"}}, ()=>{
            // return (<h2>Added</h2>).
          })
        }}>Change Name</button>
      </div>
    )
  }
  // return (
  //   <div>
  //     <h1>Welcome to Stackblitz development</h1>
  //   </div>
  // );
};

export default App;
