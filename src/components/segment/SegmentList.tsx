import { useSegmentListStore } from './segmentListStore';

import Checkbox from '../ui/Checkbox';
import './SegmentList.scss'

function SegmentList() {
    const { count, increment, decrement } = useSegmentListStore();

    return <div id="segment-list">
        <h1>Segment list</h1>
        <Checkbox />
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>;
}

export default SegmentList;
