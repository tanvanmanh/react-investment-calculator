export default function Result({result}) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {/* {result.map((year, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{year.interest}</td>
                            <td>{year.balance}</td>
                        </tr>
                    )
                })} */}
            </tbody>
        </table>
    )   
}