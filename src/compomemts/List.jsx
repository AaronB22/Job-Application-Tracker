import Posting from "./Posting"

export default function List({ app }) {
    //creates a copy of the original array so it does not modify orignal. Sorts the array by appliedOn Date.
    let arr=app;
    arr = arr.sort((a, b) => {
        return b.appliedOn.localeCompare(a.appliedOn)
    })
    return (
        <>
            <h2>Applications</h2>
            <div className='job-list'>
                {arr.map(list => {
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