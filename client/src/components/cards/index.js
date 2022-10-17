import React from 'react';
import WOF from './images/WOF.jpg';
import IM from './images/IM.jpg';
import TCTBH from './images/TCTBH.jpg';

function MostViewedBooks() {
    return (
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src={WOF} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Wings Of Fire</h5>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Price: ₹250.00 /</small>
                    </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={IM} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Ignited Minds</h5>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Price: ₹250.00 /</small>
                    </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={TCTBH} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">The Courage To Be Happy</h5>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Price: ₹250.00 /</small>
                    </div>
            </div>
        </div>
    );

}

export default MostViewedBooks;