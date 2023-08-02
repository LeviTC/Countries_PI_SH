import sortFunction from "./actions/sortSettings/sortFunction"
import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    SORT_SETTINGS,
    RESET_SETTINGS
} from "./type_actions";

const initialState = {
    countries: [],
    countryDetail: [],
    countriesSorted: [],
    searchBar: "",
    continents: "AllContinents",
    activity: "All",
    sortType: "Sort by:",
    order: "Ascending",

};
//                                              action:{}
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesSorted: payload
            };
        case GET_BY_ID:
            return {
                ...state,
                countryDetail: payload
            };
        case SORT_SETTINGS:
            const countriesSettings = sortFunction({ ...state, [payload.name]: payload.value })
            return {
                ...state,
                [payload.name]: payload.value,
                countriesSorted: countriesSettings
            };
        case RESET_SETTINGS:
            return {
                ...state,
                countriesSorted: payload,
                searchBar: "",
                continents: "AllContinents",
                activity: "All",
                sortType: "Sort by:",
                order: "Ascending",
            };
        default:
            return { ...state };
    };
};

export default rootReducer;