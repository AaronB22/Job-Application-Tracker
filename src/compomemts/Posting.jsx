
export default function Posting(){

    return(
        <div className="job-card">
            <div className="grow">
                <h3>
                    <a href="#">Title</a>
                </h3>
                <p className="company">Company</p>
                <div className="meta">
                    Applied Sep 2, 2026 · via Source
                </div>
                <p className="note">Note</p>
            </div>
            <span className="badge badge-applied">Applied</span>
        </div>
    )
}
