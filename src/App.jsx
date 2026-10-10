import { applications } from './applications';
import List from './compomemts/List';
import Summary from './compomemts/Summary';

export default function App() {

	return (
		<>
			<header className="site-header">
				<div className="container">
					<h1>Job Application Tracker</h1>
				</div>
			</header>

			<main className="container">
				<Summary applications={applications}/>
				<List app={applications} />
			</main>
		</>
	);
}
