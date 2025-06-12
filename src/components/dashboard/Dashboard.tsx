import { Button } from '../ui/button';
import { useDashboardStore } from './dashboardStore';

function Dashboard() {
    const { count, increment, decrement } = useDashboardStore();

    return (
        <div id="dashboard">
            <h1>Home</h1>
            <p>Count: {count}</p>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}

export default Dashboard;
