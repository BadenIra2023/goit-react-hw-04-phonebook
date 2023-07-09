import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label className={css.formfilter}>
        Find contacts by name
        <input className={css.filter} type="text"
          value={value} onChange={onChange}
          placeholder="Please enter a name to search"/>
      </label>
    </>
  );
};
Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
