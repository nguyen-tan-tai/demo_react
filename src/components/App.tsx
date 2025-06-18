import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard.tsx"
import SegmentList from "./segment/SegmentList.tsx"
import ErrorBoundary from "./error/ErrorBoundary.tsx"
import { useAppStore } from "./appStore";
import "./App.scss"
import '../i18n/config';
import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    const { isOpen, openMenu, closeMenu, toggleMenu } = useAppStore();

    useEffect(() => {
        openMenu();
    }, []);

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
                    <div className="logo"><img src='/images/logo.svg' alt={t('website.name')} height="40px" /></div>
                    <div className="menu-toggle-button" onClick={() => { toggleMenu() }}>
                        <button className="material-symbols-outlined">menu</button>
                    </div>
                </header>
                <div id="main" className={isOpen ? 'menu-open' : ''}>
                    <aside id="menu">
                        <ol>
                            <li className='menu-level-1'>
                                <Link to="/"><span>{t('menu.dashboard.title')}</span></Link>
                            </li>
                            <li className='menu-level-1 group'><span>{t('menu.segment.group.title')}</span></li>
                            <li className='menu-level-2'>
                                <Link to="/segment/list"><span>{t('menu.segment.list.title')}</span></Link>
                            </li>
                            <li className='menu-level-2'>
                                <Link to="/segment/create"><span>{t('menu.segment.create.title')}</span></Link>
                            </li>
                        </ol>
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
