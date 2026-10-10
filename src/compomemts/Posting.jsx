
export default function Posting({company,role,status,appliedOn,source,url,notes}){

    const badgeClass=`badge badge-${status} `;

    return(
        <div className="job-card">
            <div className="grow">
                
                <h3>
                    <a href="#">{role}</a>
                </h3>
                <p className="company">{company}</p>
                <div className="meta">
                    {appliedOn} {source}
                </div>
                <p className="note">{notes}</p>
            </div>
            <span className={badgeClass} >{status}</span>
        </div>
    )
}
