import { useState } from 'react';
import styles from './App.module.css'

function App() {

  const [expression,setExpression] = useState("");
  const [answer,setAnswer] = useState("")

  const handleCalculation = ()=>{
    if(expression===""){
      setAnswer("Error")
    }
    else{
      setAnswer(eval(expression))
    }
  }




  return (

    <div className={styles.app}>
      <h1>React Calculator</h1>
      <input type="text" className="input-field" value={expression}>
      </input>
      <div>{answer}</div>

      <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={()=>setExpression(expression+"7")}>7</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"8")}>8</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"9")}>9</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"+")}>+</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"4")}>4</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"5")}>5</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"6")}>6</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"-")}>-</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"1")}>1</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"2")}>2</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"3")}>3</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"*")}>*</button>
      <button className={styles.button} onClick={()=>{setExpression(""); setAnswer("")}}>C</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"0")}>0</button>
      <button className={styles.button} onClick={handleCalculation}>=</button>
      <button className={styles.button} onClick={()=>setExpression(expression+"/")}>/</button>
      </div>
    </div>
  );
}

export default App;
