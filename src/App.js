import Expenses from "./Expenses";
import Datashow from "./Datashow"
import { useState } from "react";
import './App.css';

 
const App = () =>{
  const [seeExpenseData, setExpenseData] = useState([])

   const saveexpenseitems = (seeexpensedata)=>{
    setExpenseData(prev => ([...prev, seeexpensedata]))
  }

  return(
  <div>
    <div>Expense Tracker</div>
    
    <Expenses savedata={saveexpenseitems} /><br/> <br/> 
    <div>My Expences</div>

    <Datashow expenses={seeExpenseData}/>

  
    
    </div>
  ) 

};

export default App;
