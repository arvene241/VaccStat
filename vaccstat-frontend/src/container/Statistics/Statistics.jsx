import React from 'react';
import { StyledStatistics } from './StyledStatistics.styled';
import landing from '../../assets/landing-page.png';
import graph from '../../assets/graph.png';

export default function Statistics() {
    return (
        <StyledStatistics id="statistics" style={{backgroundImage: `url(${landing})`}}>
            <div className="app__statistics app-container">
                <h1 className="app-h1">Vaccination Statistics</h1>
                <p className="app__statistics-intro">Philippines has administered at least 145,729,130 doses of COVID vaccines so far. 
                                                    Assuming every person needs 2 doses, that’s enough to have vaccinated about 67.4% of the country’s population.</p>
                <div className="app__statistics-filter app__flex">
                    <p>Total</p>
                    <p>Philippines</p>
                    <p>Last 7 days</p>
                </div>
                <div className="app__statistics-vaccine app__flex">
                    <img src={graph} alt="" />
                    <div className="app__statistics-vaccine-doses">
                        <div className="stats">
                            asdasd
                        </div>
                        <div className="stats">
                            asdasd
                        </div>
                        <div className="stats">
                            asdasd
                        </div>
                        <div className="stats">
                            asdasd
                        </div>
                    </div>
                </div>
                <a href="hatdog">See more</a>
            </div>
        </StyledStatistics>
    )
}
