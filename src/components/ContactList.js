import ContactItem from './ContactItem';

const ContactList = ({ friends, filter, onClick }) => {
  return (
    <ul>
      {friends
        .filter(
          item => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0,
        )
        .map(friend => (
          <ContactItem
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
