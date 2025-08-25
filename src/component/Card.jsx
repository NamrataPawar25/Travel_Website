import React, { useState } from 'react'

const Card = ({ data, onDelete  }) => {
    const [expanded, setExpanded] = useState({});

    const truncateText = (text, id) => {
        const limit = 50;
        if (expanded[id] || text.length <= limit) return text;
        return text.substring(0, limit) + "...";
    };
    return (
        <div className='container'>
            <div className="card d-flex flex-column my-3" style={{ width: "18rem" }}>
                <img src={data.image} className="card-img-top" alt={data.name} />
                <div className="card-body">
                    <h5 className="card-title text-center text-success">{data.name} </h5>
                    <p className="card-text text-muted">
                        {truncateText(data.info, data.id)}
                        {data.info.length > 50 && (
                            <span
                                className="read-more text-primary"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setExpanded((prev) => ({
                                        ...prev,
                                        [data.id]: !prev[data.id],
                                    }))
                                }
                            >
                                {expanded[data.id] ? " Show less" : " Read more"}
                            </span>
                        )}
                    </p>
                    <p className="card-text">₹ {data.price}</p>
                    <button
                        className="btn btn-danger d-flex justify-content-center w-100"
                        onClick={() => onDelete(data.id)}
                    >
                        Delete
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Card