import styled from 'styled-components';

export const StyledFullStat = styled.section`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    padding: 60px 0 60px;
    background-color: #e5ecf0;
    
    .app__statistics {

        .title {
            //line-height: 100%;
            font-size: 45px;
        }

        .subtitle {
            width: 47.5rem;
            color: gray;
            font-size: 15px;
            padding-bottom: 10px;
        }

        &-vaccine {
            padding-bottom: 40px;

            &-total {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;

                .totalstats {
                    border-radius: 8px;
                    background-color: #71c6b8;
                    width: 45rem;
                    height: 25rem;
                    padding: 25px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

                    .total-img {
                        padding-top: 20px;
                        padding-right: 10px;
                        width: 17.5rem;
                        height: 22rem;
                    }

                }

                .doses {
                    display: flex;
                    flex-direction: column;
                    justify-content:space-between;
                }

                .stats1, .stats2, .stats3 {
                    border-radius: 8px;
                    width: 34rem;
                    height: 7.3rem;
                    padding-left:25px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    
                    .stat1-img, .stat2-img {
                        padding-top: 10px;
                        padding-right: 40px;
                        width: 11rem;
                        height: 10rem;
                    }

                    .stat3-img {
                        padding-top: 7px;
                        padding-right: 10px;
                        width: 12rem;
                        height: 12rem;
                    }

                }

                .stats1 {
                    background-color: #60799d;
                }

                .stats2 {
                    background-color: #1d6fa3;
                }

                .stats3 {
                    background-color: #72bbc8;
                }
            }
        }


            &-chart1 {
            padding-bottom: 40px;

                &-linegraph {
                    border-radius: 8px;
                    background-color: white;
                    width: 80rem;
                    height: 34rem;
                    padding: 25px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
            }

            &-charts {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            padding-bottom:20px;

                &-donutgraph, &-bargraph {
                    border-radius: 8px;
                    background-color: white;
                    width: 39rem;
                    height: 32rem;
                    padding: 25px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }

                &-bargraph {
                    overflow-y: scroll;
                }
                }

            .app-total, .app-stat {
                font-size: 18px;
                color: white;
                //line-height: 20%;
            }

            .app-total, .app-totalnum {
                display: flex;
                flex-direction: column;
            }

            .app-totalnum, .app-statnum {
                font-size: 45px;
                color: white;
                //line-height: 20%;
            }

            .app-stat, .app-statnum {
                display: flex;
                flex-direction: column;
            }

            .update {
                text-align: right;
            }
        }


`