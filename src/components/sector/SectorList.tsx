interface SectorProps {
    sectorId: string;
}

function Sector({ sectorId }: SectorProps) {
    return <div id="compnany">
        <h1>Sector</h1>
        <p>Sector id: {sectorId}</p>
    </div>;
}

export default Sector;
