import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          title={meetup.title}
          image={meetup.image}
          title={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
