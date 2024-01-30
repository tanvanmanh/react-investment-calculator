import UserInput from "./UserInput";
export default function InputGroup({}) {
    return (
        <div className="input-group" id="user-input">
            <span>
                <UserInput label={"INITIAL INVESTMENT"}/>
                <UserInput label={"EXPECTED RETURN"}/>
            </span>
            <span>                
                <UserInput label={"ANNUAL INVESTMENT"}/>
                <UserInput label={"DURATION"}/>
            </span>
            
        </div>
    );
}