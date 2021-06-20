const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
