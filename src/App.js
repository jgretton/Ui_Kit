import './App.css';
import Card_1 from './components/Cards/Card_1';
import Card_2 from './components/Cards/Card_2';
import Card_3 from './components/Cards/Card_3';
import Card_4 from './components/Cards/Card_4';
import Mini_Card from './components/Cards/Mini_Card';
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
				<Card_1 />
			</div>
			<div className="m-4">
				<Card_2 />
			</div>
			<div className="m-4">
				<Card_3 />
			</div>
			<div className="m-4">
				<Card_4 />
			</div>
			<div className="m-4">
				<Mini_Card />
			</div>

			<div className=" w-96">
				<Search />
			</div>
			<div className=" w-96">
				<Upload />
			</div>
			<div className="">
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
