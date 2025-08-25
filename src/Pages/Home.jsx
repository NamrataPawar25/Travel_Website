import React, { useState } from 'react'
import Card from '../component/card';
const Home = ({ data }) => {
    const [productstate, setProductstate] = useState(data);

    const handleDelete = (id) => {
        const filtered = productstate.filter((card) => card.id !== id); // ✅ Use correct state variable
        setProductstate(filtered); // ✅ Use correct setter
    };

    const handleRefresh = () => {
        setProductstate(data);  // Reset to original data
    };
    if (productstate.length === 0) {
        return (
            <div className="container text-center my-5">
                <h2 className="mb-4 text-warning">No tours left</h2>
                <button className="btn btn-primary" onClick={handleRefresh}>
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="container text-center my-4" style={{ maxWidth: '400px' }}>
                <h1
                    className="py-3 px-4 rounded-pill border-dashed fw-bold bg-light shadow"
                    style={{
                        borderStyle: 'dashed',
                        borderWidth: '3px',
                        borderColor: '#0d6efd',
                        color: 'purple'
                    }}
                >
                    Travel Website
                </h1>
            </div>
            <div className="container">
                <div className="row g-4">
                    {productstate.map((data, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={index}>
                            <Card data={data} onDelete={handleDelete} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home