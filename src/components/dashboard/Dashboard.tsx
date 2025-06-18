import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

function Dashboard() {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = t('website.name') + ' - ' + t('dashboard.title');
    }, []);

    return (
        <div id="dashboard">
            <h1>Release version 2025.07?</h1>
            <h2>New conditions:</h2>
            <ul>
                <li>User age</li>
                <li>User location</li>
            </ul>
            <h2>Deprecated conditions:</h2>
            <ul>
                <li>User last open app</li>
            </ul>
        </div>
    );
}

export default Dashboard;
