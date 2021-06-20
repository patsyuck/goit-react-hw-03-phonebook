const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input value={filter} onChange={onChange('filter')} />
      </label>
    </div>
  );
};

export default Filter;
