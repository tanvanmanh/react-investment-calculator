export default function UserInput({name, label, value, onChangeValue}) {
    const userInput = value ? parseInt(value) : 0;
    
    
    return (
        <div id={name}>
            <label htmlFor="initial-investment">{label}</label>
            <input 
                type="number" 
                onChange={(event) => onChangeValue(name, event.target.value ? parseInt(event.target.value) : 0)}                  
                value={userInput}/>
        </div>
    )
}