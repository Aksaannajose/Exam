import React, { useState, useEffect } from 'react';
// import { getAuctions, addAuction, updateAuction, deleteAuction } from './AuctionService';
import './crud.css';

const AuctionApp = () => {
    const [auctions, setAuctions] = useState([]);
    const [newAuction, setNewAuction] = useState({ item: '', baseprice: '', explanation: '', imagebase64: '', status: '' });
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        fetchAuctions();
    }, []);

    const fetchAuctions = async () => {
        const response = await getAuctions();
        setAuctions(response.data);
    };

    const handleAdd = async () => {
        await addAuction(newAuction);
        setNewAuction({ item: '', baseprice: '', explanation: '', imagebase64: '', status: '' });
        fetchAuctions();
    };

    const handleUpdate = async (id) => {
        await updateAuction(id, newAuction);
        setNewAuction({ item: '', baseprice: '', explanation: '', imagebase64: '', status: '' });
        setEditing(null);
        fetchAuctions();
    };

    const handleDelete = async (id) => {
        await deleteAuction(id);
        fetchAuctions();
    };

    return (
        <div className="container">
            <h1>Student Course Enrollment System</h1>
            <div className="form">
                <input type="text" placeholder="Student Name" value={newAuction.item} onChange={(e) => setNewAuction({ ...newAuction, item: e.target.value })} />
                <input type="text" placeholder="Student Course" value={newAuction.baseprice} onChange={(e) => setNewAuction({ ...newAuction, baseprice: e.target.value })} />
                <input type="text" placeholder="Enrolled Date" value={newAuction.explanation} onChange={(e) => setNewAuction({ ...newAuction, explanation: e.target.value })} />
                <input type="text" placeholder="Description" value={newAuction.imagebase64} onChange={(e) => setNewAuction({ ...newAuction, imagebase64: e.target.value })} />
                <input type="text" placeholder="Comment" value={newAuction.status} onChange={(e) => setNewAuction({ ...newAuction, status: e.target.value })} />
                <button onClick={editing ? () => handleUpdate(editing) : handleAdd}>{editing ? 'Update' : 'Add'} </button>
            </div>
            <ul className="auction-list">
                {auctions.map((auction) => (
                    <li key={auction.auctionid} className="auction-item">
                        <span>{auction.item} - {auction.baseprice}</span>
                        <div className="buttons">
                            <button onClick={() => {
                                setNewAuction(auction);
                                setEditing(auction.auctionid);
                            }}>Edit</button>
                            <button onClick={() => handleDelete(auction.auctionid)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuctionApp;
