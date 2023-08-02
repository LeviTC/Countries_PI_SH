import { SORT_SETTINGS } from "../../type_actions";

export const sortSettings = (sorted) => {
    return { type: SORT_SETTINGS, payload: sorted };
};