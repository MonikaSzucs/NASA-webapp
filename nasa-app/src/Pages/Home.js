import Navbar from '../Components/Navbar';
import SingleEvent from '../Components/SingleEvent.js';


function Home() {
    return (
        <div className="App h-screen flex flex-col ">
            <Navbar/>
            <SingleEvent />
        </div>
    );
}

export default Home;
