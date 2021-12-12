import PropTypes from 'prop-types';

const ItemContact = ({ name, number, onClickBtnDel, id, normalizeName }) => {
  return (
    <li className="item" id={id}>
      {normalizeName(name)}: {number}
      <button onClick={() => onClickBtnDel(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ItemContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ItemContact;

//<button onClick={onClickBtn} type="button">
