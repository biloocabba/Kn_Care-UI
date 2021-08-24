import { initialState } from "initialStates/mapKpi.js";
import {
    ALL_ACTIVE_MEMBERS,
    NEW_MEMBERS,
    SELF_RESIGNED_MEMBERS,
    AUTO_OFFBOARDED_MEMBERS
} from "../actions/types";

function mapKpisReducer(kpis = initialState, action) {
    const { type } = action;

    // kpis is not iterable?
    console.log([...kpis]);
  
    const getLastYear = new Date().getFullYear() - 1;
    var mapData = {};

    switch (type) {
        case ALL_ACTIVE_MEMBERS:
            console.log("ALL ACTIVE");
            // kpis.forEach is not a function?
            kpis.forEach(kpi => {
                console.log(kpi);
                if (kpi.offBoardedDate != null) {
                    mapData[kpi.country] += 1;
                }
            });
            console.log([...mapData]);
            return mapData

        case NEW_MEMBERS:
            console.log("NEW MEMBERS");
            kpis.forEach(kpi => {
                if (Date.parse(kpi.onBoardedDate) >= getLastYear) {
                    mapData[kpi.country] += 1;
                }
            });
            return mapData


        case SELF_RESIGNED_MEMBERS:
            console.log("SELF RESIGNED");
            kpis.forEach(kpi => {
                if (Date.parse(kpi.offBoardedDate) >= getLastYear && kpi.selfResigned) {
                    mapData[kpi.country] += 1;
                }
            });
            return mapData;


        case AUTO_OFFBOARDED_MEMBERS:
            console.log("AUTO OFFBOARDED");
            kpis.forEach(kpi => {
                if (Date.parse(kpi.offBoardedDate) >= getLastYear && !kpi.selfResigned) {
                    mapData[kpi.country] += 1;
                }
            });
            return mapData;

        default:
            return mapData;
    }
};

export default mapKpisReducer;