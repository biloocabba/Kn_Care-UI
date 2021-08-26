import {
    ALL_ACTIVE_MEMBERS,
    NEW_MEMBERS,
    SELF_RESIGNED_MEMBERS,
    AUTO_OFFBOARDED_MEMBERS
} from "../actions/types";

// initialState is empty dict
const initialState = {};

function mapKpisReducer(mapKpis = initialState, action) {
    const { type, payload } = action;

    const getLastYear = new Date().getFullYear() - 1;
    mapKpis = {};

    switch (type) {
        case ALL_ACTIVE_MEMBERS:
            payload.forEach(kpi => {
                if (kpi.offBoardedDate !== null) {
                    if (mapKpis[kpi.country] !== undefined) {
                        mapKpis[kpi.country] += 1;
                    }
                    else {
                        mapKpis[kpi.country] = 1;
                    }
                }
            });
            return mapKpis;

        case NEW_MEMBERS:
            payload.forEach(kpi => {
                var started = new Date(kpi.onBoardDate);
                if (started.getFullYear() >= getLastYear) {
                    if (mapKpis[kpi.country] !== undefined) {
                        mapKpis[kpi.country] += 1;
                    }
                    else {
                        mapKpis[kpi.country] = 1;
                    }
                }
            });
            return mapKpis;

        case SELF_RESIGNED_MEMBERS:
            payload.forEach(kpi => {
                var endDate = new Date(kpi.offBoardDate);
                if (endDate.getFullYear() >= getLastYear && kpi.selfResigned) {
                    if (mapKpis[kpi.country] !== undefined) {
                        mapKpis[kpi.country] += 1;
                    }
                    else {
                        mapKpis[kpi.country] = 1;
                    }
                }
            });
            return mapKpis;

        case AUTO_OFFBOARDED_MEMBERS:
            payload.forEach(kpi => {
                var endDate = new Date(kpi.offBoardDate);
                if (endDate.getFullYear() >= getLastYear && !kpi.selfResigned) {
                    if (mapKpis[kpi.country] !== undefined) {
                        mapKpis[kpi.country] += 1;
                    }
                    else {
                        mapKpis[kpi.country] = 1;
                    }
                }
            });
            return mapKpis;

        default:
            return mapKpis;
    }
};

export default mapKpisReducer;