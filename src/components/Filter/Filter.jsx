import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

import { Title } from './Filter.styled';

export const Filter = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  if (contacts.length === 0) {
    return null;
  }

  return (
    <>
      <Title>Find contacts by name</Title>
      <input type="text" name="filter" placeholder='Search contact' onChange={handleChange} />
    </>
  );
};