import { applications } from './applications';
import Posting from './compomemts/Posting';

/**
 * The starting point. Right now it dumps the raw data on the page so you can
 * see it is loading — replace all of this with your components.
 *
 * The stylesheet already has classes for everything you need, so you do not
 * have to write any CSS: container, site-header, summary, summary-tile,
 * job-list, job-card, badge, badge-applied (and one per status), page-head,
 * empty.
 */
export default function App() {
	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
				</div>
			</header>

			<main className="container">
				{/* <p>{applications.length} applications loaded.</p>
				<pre>{JSON.stringify(applications[0], null, 2)}</pre> */}

				<h2>Applications</h2>
				<div className='job-list'>
					{applications.map(list=>{
						return(
							<Posting
								{...list}
								key={list.id}
							/>

						)
					})}
				</div>
				
			</main>
		</>
	);
}
