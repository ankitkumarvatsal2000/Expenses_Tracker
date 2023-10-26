
import './Datashow.css';
const Datashow = ({expenses})=>{
    console.log(expenses);
    return expenses && expenses.map((expense, idx) => {
        return (
            <div className="box" key={idx}>
                <p>{expense.title}</p>
                <p>{expense.amount}</p>
                <p>{expense.date}</p>
            </div>
        )
    })
}
export default Datashow;