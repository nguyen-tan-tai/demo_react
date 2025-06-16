import { useDashboardStore } from './dashboardStore';

function Dashboard() {
    const { count, increment, decrement } = useDashboardStore();

    return (
        <div id="dashboard">
            <h1>Home</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Dashboard;
