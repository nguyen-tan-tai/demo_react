import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard.tsx"
import SegmentList from "./segment/SegmentList.tsx"
import ErrorBoundary from "./error/ErrorBoundary.tsx"
import { useAppStore } from "./appStore";
import "./App.scss"

function App() {
    const { isOpen, openMenu, closeMenu, toggleMenu } = useAppStore();


    return (
        <Router future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}>
            <div id="app">
                <header id="header">
                    <div className="user">
                        <div className="language">Language</div>
                        <div className="login">Login</div>
                    </div>
                    <div className="logo">Logo</div>
                    <div><button onClick={() => { toggleMenu() }}>MENU</button></div>
                </header>
                <div id="main" className={isOpen ? 'menu-open' : ''}>
                    <aside id="menu">
                        <nav>
                            <Link to="/" className="mr-4">Dashboard</Link>
                            <Link to="/segment/list">Sector list</Link>
                        </nav>
                    </aside>
                    <main id="main-content">
                        <ErrorBoundary fallback="OK">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/segment/list" element={<SegmentList />} />
                            </Routes>
                        </ErrorBoundary>
                    </main>
                </div>
                <footer id="footer">
                    &copy; Copyright 2025. All rights reserved.
                </footer>
            </div>
        </Router>
    );
}

export default App;
