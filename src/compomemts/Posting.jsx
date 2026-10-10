
export default function Posting({company,role,status,appliedOn,source,url,notes}){

    return(
        <div className="job-card">
            <div className="grow">
                t
                <h3>
                    <a href="#">{role}</a>
                </h3>
                <p className="company">{company}</p>
                <div className="meta">
                    {appliedOn} {source}
                </div>
                <p className="note">{notes}</p>
            </div>
            <span className="badge badge-applied">{status}</span>
        </div>
    )
}
