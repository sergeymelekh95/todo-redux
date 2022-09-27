import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/selectors/filterSelector';
import { setFilters } from '../redux/actions/filtersAction';

const FiltersTodo = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const isActiveBtn = (filter, btnContent) =>
        filter === btnContent ? 'red' : 'black';

    return (
        <div>
            <button
                onClick={() => dispatch(setFilters('all'))}
                style={{ color: isActiveBtn(filter, 'all') }}
            >
                all
            </button>
            <button
                onClick={() => dispatch(setFilters('active'))}
                style={{ color: isActiveBtn(filter, 'active') }}
            >
                active
            </button>
            <button
                onClick={() => dispatch(setFilters('completed'))}
                style={{ color: isActiveBtn(filter, 'completed') }}
            >
                completed
            </button>
        </div>
    );
};

export default FiltersTodo;
