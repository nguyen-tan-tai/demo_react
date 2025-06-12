import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home.tsx'
import Galaries from './galaries/Galaries.tsx'
import Contact from './contact/Contact.tsx'
import ErrorBoundary from './error/ErrorBoundary.tsx'
import './App.scss'

function App() {
    return (
        <Router future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}>
            <div id='app'>
                <header id='header'></header>
                <nav id='nav'>
                    <Link to='/home' className='mr-4'>Home</Link>
                    <Link to='/galaries' className='mr-4'>Galaries</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <div id='main'>
                    <ErrorBoundary fallback="OK">
                        <Routes>
                            <Route path='/home' element={<Home />} />
                            <Route path='/galaries' element={<Galaries />} />
                            <Route path='/contact' element={<Contact />} />
                        </Routes>
                    </ErrorBoundary>
                </div>
                <footer id='footer'>
                    &copy; Copyright 2025. All rights reserved.
                </footer>
            </div>
        </Router>
    );
}

export default App;
