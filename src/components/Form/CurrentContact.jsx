import React from 'react';
import PropTypes from 'prop-types';
import { CurrentContactTitle, CurrentContactItem } from './Form.styled';

const CurrentContact = ({ id, name, number }) => (
  <>
    {name === '' ? null : (
      <>
        <CurrentContactTitle>
          You have entered a current contact to add:
        </CurrentContactTitle>
        <CurrentContactItem key={id}>
          {name} : {number}
        </CurrentContactItem>
      </>
    )}
  </>
);

CurrentContact.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  number: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CurrentContact;
