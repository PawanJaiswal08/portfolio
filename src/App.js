import Navbar from './components/Navbar/Navbar'
import Greeting from './containers/Greeting/Greeting'
import About from './containers/About/About'
import Project from './containers/Project/Project'
import Contact from './containers/Contact/Contact'
import Footer from './containers/Footer/Footer'
import Skills from './containers/Skills/Skills'
import Education from './containers/Education/Education'
import './App.css';

function App() {
	return (
		<>
			<Navbar/>
			<Greeting/>
			<About/>
			<Project/>
			<Skills/>
			<Education/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
