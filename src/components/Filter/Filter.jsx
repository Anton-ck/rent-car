import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Filter, FilterInput, FilterLabel } from './Filter.styled';
import { filter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const FilterName = () => {
  const filterId = nanoid();

  const filtered = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filter(e.currentTarget.value));
  };



  return (
    <Filter>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        autoComplete="off"
        type="text"
        id={filterId}
        name="filter"
        value={filtered}
        onChange={handleFilterChange}
      ></FilterInput>
    </Filter>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  handleFilterChange: PropTypes.func,
};

export default FilterName;
