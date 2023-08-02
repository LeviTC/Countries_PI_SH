import { RESET_SETTINGS } from "../type_actions";

export const resetSettings = (reseted) => {
    return { type: RESET_SETTINGS, payload: reseted };
};