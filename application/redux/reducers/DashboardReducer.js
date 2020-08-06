import { SET_DASHBOARD_DETAILS } from "../actions/DashboardActions";

const defaultState = {}

const dashboard = (state = defaultState, { type, payload, ...action }) => {
    switch (type) {
        case SET_DASHBOARD_DETAILS:
            return { ...state, ...payload };
        default:
            return { ...state };
    }
};

export default dashboard;