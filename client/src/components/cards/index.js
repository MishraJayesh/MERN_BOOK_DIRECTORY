import React from 'react';
import './card.css';
import WOF from './images/WOF.jpg';
import IM from './images/IM.jpg';
import TCTBH from './images/TCTBH.jpg';

function MostViewedBooks() {
    return (
        <div className="card-deck">
            <div className="card">
                <img className="card-img-top" src={WOF} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Wings Of Fire</h5>
                    <p className="card-text">Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India,
                        Dr. A. P. J. Abdul Kalam.It was written by him and Arun Tiwari.In the autobiography,
                        Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually ledhim to lead Indian space research, nuclear and missile programs.
                        Kalam started his career, after graduating from Aerospace engineering at Madras Institute of Technology, at Hindustan Aeronautics Limited and was assigned to build a hovercraft prototype.
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Price: ₹250.00 /</small>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={IM} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Ignited Minds</h5>
                    <p className="card-text">Ignited Minds: Unleashing the Power Within India is a book written by A. P. J. Abdul Kalam,President of India from 2002 to 2007.
                        Dr. Kalam has dedicated Ignited Minds to an intermediate school child he met at a school. While talking to students, a question came up: “Who is our enemy?”
                        Kalam recalled that many answers were given, but the one which all agreed upon came from student Snehal Thakkar: “Our enemy is poverty.”
                        The small book of 205 pages examines attitudes afflicting Indians today, and presents prescriptions for the rapid growth of India to enable the country to emerge as a developed country.
                        Kalam addressed the book to the young citizens of India.
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Price: ₹250.00 /</small>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={TCTBH} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">The Courage To Be Happy</h5>
                    <p className="card-text">The author team behind worldwide bestseller The Courage To Be Disliked return with the must-have companion volume.
                        In The Courage To Be Happy, Ichiro Kishimi and Fumitake Koga again distil their wisdom into simple yet profound advice to show us how we,
                        too, can use twentieth-century psychological theory to find true happiness.
                        Length of the book is of 252 pages.
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Price: ₹250.00 /</small>
                </div>
            </div>
        </div>
    );

}

export default MostViewedBooks;