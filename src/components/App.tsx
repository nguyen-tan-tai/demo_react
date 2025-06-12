import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.tsx'
import SectorList from './sector/SectorList.tsx'
import CompanyList from './company/CompanyList.tsx'
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
                    <Link to='/sector/list'>Sector list</Link>
                    <Link to='/company/list'>Company list</Link>
                </nav>
                <div id='main'>
                    <ErrorBoundary fallback="OK">
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/sector/list' element={<SectorList />} />
                            <Route path='/company/list' element={<CompanyList />} />
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
