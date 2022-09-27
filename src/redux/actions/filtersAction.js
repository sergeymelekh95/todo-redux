import {SET_FILTER} from '../constants/filterConst';

export const setFilters = (filter) => ({
    type: SET_FILTER,
    filter,
});
