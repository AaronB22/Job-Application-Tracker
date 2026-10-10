export default function SummaryCard({count,label}){
    return(
        <div className="summary-tile">
            <h3 className="count">{count}</h3>
            <p className="label">{label}</p>
        </div>
    )
}