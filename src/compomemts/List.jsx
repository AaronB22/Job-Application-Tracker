import Posting from "./Posting"

export default function List({app}) {
    console.log(app)
    return (
        <>
            <h2>Applications</h2>
            <div className='job-list'>
                {app.map(list => {
                    return (
                        <Posting
                            {...list}
                            key={list.id}
                        />

                    )
                })}
            </div>
        </>
    )
}