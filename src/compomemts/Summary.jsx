import SummaryCard from "./SummaryCard";

export default function Summary({applications}){

    //Loops through the data and counts each status type. Each status type will be passed on as a prompt to SummaryCard
    
    let total=0;
    let interview =0;
    let rejected = 0;
    let offer = 0;
    let applied = 0;

    
        for(let app of applications){
            total++;
            switch (app.status){
                case "interview":
                    interview++;
                    break
                case "rejected":
                    rejected++;
                    break;
                case "offer":
                    offer++;
                    break;
                case "applied":
                    applied++
                    break;
            }
        }
    
    return(
        <div className="summary">
            <SummaryCard label="Total" count={total}/>
            <SummaryCard label="Applied" count={applied}/>
            <SummaryCard label="Interviewing" count={interview}/>
            <SummaryCard label="Offer" count={offer}/>
            <SummaryCard label="Rejected" count={rejected}/>
        </div>
    )
}