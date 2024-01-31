export default function Result({header, result}) {
    return (
        <table id="result">
            <thead>
                <tr>
                    {header.map((column, index) => {
                        return (
                            <th key={index}>{column}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {result.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex}>
                            <td>{row["year"]}</td>
                            <td>{row["investmentValue"]}</td>
                            <td>{row["interest"]}</td>
                            <td>{row["totalInterest"]}</td>
                            <td>{row["investedCapital"]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )   
}