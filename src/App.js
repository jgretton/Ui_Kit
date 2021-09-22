import './App.css';
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import Card4 from './components/Cards/Card4';
import MiniCard from './components/Cards/MiniCard';
import Comment from './components/Cards/Comment';
import Upload from './components/Cards/Upload';

import Success from './components/Alerts/Success';
import Info from './components/Alerts/Info';
import Warning from './components/Alerts/Warning';
import Error from './components/Alerts/Error';

import Search from './components/Input/Search';

function App() {
	return (
		<div className="min-h-screen min-w-screen relative flex flex-row justify-around flex-wrap bg-gray-100 p-3">
			<div className="m-4">
				<Card1 />
			</div>
			<div className="m-4">
				<Card2 />
			</div>
			<div className="m-4">
				<Card3 />
			</div>
			<div className="m-4">
				<Card4 />
			</div>
			<div className="m-4">
				<MiniCard />
			</div>

			<div className="m-4 w-96">
				<Search />
			</div>
			<div className="m-4 w-96">
				<Upload />
			</div>
			<div className="m-4">
				<Comment />
			</div>
			<div className="flex flex-row flex-wrap">
				<div className="m-1">
					<Success />
				</div>
				<div className="m-1">
					<Info />
				</div>
				<div className="m-1">
					<Warning />
				</div>
				<div className="m-1">
					<Error />
				</div>
			</div>
		</div>
	);
}

export default App;
