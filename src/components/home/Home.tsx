import { Button } from '../ui/button';
import { useHomeStore } from './homeStore';

function Home() {
    const { count, increment, decrement } = useHomeStore();

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Home</h1>
            <p className='mb-4'>Count: {count}</p>
            <Button onClick={increment} className='mr-2'>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}

export default Home;
