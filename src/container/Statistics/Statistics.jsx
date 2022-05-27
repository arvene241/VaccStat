import React from 'react';
import { StyledStatistics } from './StyledStatistics.styled';
import landing from '../../assets/landing-page.png';
import LineChart from "../../components/Charts/LineChart";
import { useNavigate } from "react-router-dom";

export default function Statistics() {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/statistics');
    }

    return (
        <StyledStatistics id="statistics" style={{backgroundImage: `url(${landing})`}}>
            <div className="app__statistics app-container">
                <h1 className="app-h1">Vaccination Statistics</h1>
                <p className="app__statistics-intro">Philippines has administered at least 149, 278, 715 doses of COVID vaccines so far. 
                                                    Assuming every person needs 2 doses, that’s enough to have vaccinated about 67.4% of the country’s population.</p>
                <div className="app__statistics-filter app__flex">
                    <p>Total</p>
                    <p>Philippines</p>
                    <p>Last 14 days</p>
                </div>
                <div className="app__statistics-vaccine app__flex">
                    <div className="app__statistics-vaccine-doses">
                        <div className="linechart">
                            <LineChart />
                        </div>
                        

                        <div className="col">
                            <div className="row">
                                <div className="stats">
                                    <p className="title">Total Doses Administered</p>
                                    <h1 className="value">149M</h1>
                                </div>
                                <div className="stats">
                                    <p className="title">First Dose Given</p>
                                    <h1 className="value">66M</h1>
                                </div>
                            </div>
                            <div className="row">
                            <div className="stats">
                                    <p className="title">Second Dose Given</p>
                                    <h1 className="value">69M</h1>
                                </div>
                                <div className="stats">
                                    <p className="title">Booster Given</p>
                                    <h1 className="value">13M</h1>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <button className="linkButton" onClick={handleClick}>See more</button>
            </div>
        </StyledStatistics>
    )
}
