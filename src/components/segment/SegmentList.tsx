interface SegmentListProps {
    name: string;
}

function SegmentList({ name }: SegmentListProps) {
    return <div id="segment-list">
        <h1>Company</h1>
        <p>Company name: {name}</p>
    </div>;
}

export default SegmentList;
