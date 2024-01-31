import {useState} from 'react';

import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput";
import {calculateInvestmentResults, formatter} from "./util/investment";

const RESULT_HEADER = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital"
];

const INIT_INVESTMENT = {
  initialInvestment: 0,
  expectedReturn: 0,
  annualInvestment: 0,
  duration: 0
};
function App() {  
  const [investment, setInvestment] = useState(INIT_INVESTMENT);
  // const [result, setResult] = useState([]);?

  function handleChangeUserInput(key, value) {    
    setInvestment(prevInvestment => {
      return {
        ...prevInvestment,
        [key]: value
      }
    });
  }    
  const result = calculateInvestmentResults(investment).map((row) => {
    let rowResult = {
      "year": row.year,
        "investmentValue": formatter.format(row.valueEndOfYear),
        "interest": formatter.format(row.interest),
        "totalInterest": formatter.format(row.valueEndOfYear - (investment.initialInvestment + investment.annualInvestment * row.year)),
        "investedCapital": formatter.format(investment.initialInvestment + investment.annualInvestment * row.year)
    }
    return rowResult;
    
  });


  return (<>
      <Header />
      <div className="input-group" id="user-input">
            <span>
                <UserInput 
                  name={"initialInvestment"}
                  label={"INITIAL INVESTMENT"} 
                  value={investment["initialInvestment"]}
                  onChangeValue={handleChangeUserInput}/>
                <UserInput 
                  name={"expectedReturn"}
                  label={"EXPECTED RETURN"} 
                  value={investment["expectedReturn"]}
                  onChangeValue={handleChangeUserInput}/>
            </span>
            <span>                
                <UserInput 
                  name={"annualInvestment"}
                  label={"ANNUAL INVESTMENT"} 
                  value={investment["annualInvestment"]}
                  onChangeValue={handleChangeUserInput}/>
                <UserInput 
                  name={"duration"}
                  label={"DURATION"} 
                  value={investment["duration"]}
                  onChangeValue={handleChangeUserInput}/>
            </span>
            
        </div>
      <Result header={RESULT_HEADER} result={result}/>
    </>
  )
}

export default App
