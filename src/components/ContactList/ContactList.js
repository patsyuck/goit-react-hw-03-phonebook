import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ friends, filter, onClick }) => {
  return (
    <ul>
      {friends
        .filter(
          item => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0,
        )
        .map(friend => (
          <ContactItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            number={friend.number}
            onClick={onClick}
          />
        ))}
    </ul>
  );
};

export default ContactList;
