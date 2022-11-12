import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Form.styled';

const Filter = ({ value, onChange }) => (
  <>
    <FilterLabel>Filter contacts by name</FilterLabel>
    <FilterInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search name"
    />
  </>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
