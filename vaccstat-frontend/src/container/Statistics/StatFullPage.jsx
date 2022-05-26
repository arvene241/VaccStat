import React from "react";
import { StyledFullStat } from "./StyledFullStat.styled";
import LineChart from "../../components/Charts/LineChart";
import DonutChart from "../../components/Charts/DonutChart";
import BarChart from "../../components/Charts/BarChart";
import vaccine from "../../assets/vaccine.png";
import mask from "../../assets/mask.png";
import mask2 from "../../assets/mask2.png";
import safety from "../../assets/safety.png";

export default function StatFullPage() {

    return (
        <StyledFullStat id="statistics" >
        <div className="app__statistics app-container">
            <h1 className="title">Vaccination Statistics</h1>
            <p className="subtitle">Information may change at anytime due to the evolving situation.</p>

            <div className="app__statistics-vaccine">
                <div className="app__statistics-vaccine-total">
                    <div className="totalstats">
                        <div>
                            <h4 className="app-total">Total Doses Administered</h4>
                            <h1 className="app-totalnum">149, 278, 715</h1>
                        </div>
                        <div>
                            <img className="total-img" src={vaccine} alt="vaccine" />
                        </div>
                    </div>

                    <div className="doses"> 
                        <div className="stats1">
                            <div>
                                <h4 className="app-stat">First Dose</h4>
                                <h1 className="app-statnum">66, 431, 343</h1>
                            </div>
                            <div>
                                <img className="stat1-img" src={mask} alt="mask" />
                            </div>
                        </div>  
                        <div className="stats2">
                            <div>
                                <h4 className="app-stat">Second Dose</h4>
                                <h1 className="app-statnum">69, 351, 113</h1>
                            </div>
                            <div>
                                <img className="stat2-img" src={mask2} alt="mask2" />
                            </div>
                        </div>
                        <div className="stats3">
                            <div>
                                <h4 className="app-stat">Booster Dose</h4>
                                <h1 className="app-statnum">13, 891, 354</h1>
                            </div>
                            <div >
                                <img className="stat3-img" src={safety} alt="safety" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            

            <div className="app__statistics-chart1">
                <div className="app__statistics-chart1-linegraph">
                    <LineChart />
                </div>
            </div>

            <div className="app__statistics-charts">
                <div className="app__statistics-charts-donutgraph">
                    <DonutChart />
                </div>
                <div className="app__statistics-charts-bargraph">
                    <BarChart />
                </div>
            </div>

            <div>
                <p className="update">Last updated: 2022/05/26 08:00AM</p>
            </div>

        </div>
    </StyledFullStat>
    )
}