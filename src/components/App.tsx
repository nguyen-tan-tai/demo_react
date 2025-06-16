import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.tsx'
import SegmentList from './segment/SegmentList.tsx'
import ErrorBoundary from './error/ErrorBoundary.tsx'
import './App.scss'

function App() {
    return (
        <Router future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}>
            <div id='app'>
                <nav id='nav'>
                    <Link to='/' className='mr-4'>Dashboard</Link>
                    <Link to='/segment/list'>Sector list</Link>
                </nav>
                <div id='main'>
                    <ErrorBoundary fallback="OK">
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/segment/list' element={<SegmentList />} />
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
