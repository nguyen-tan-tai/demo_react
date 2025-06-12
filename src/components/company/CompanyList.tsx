interface CompanyProps {
    name: string;
}

function Company({ name }: CompanyProps) {
    return <div id="compnany">
        <h1>Company</h1>
        <p>Company name: {name}</p>
    </div>;
}

export default Company;
