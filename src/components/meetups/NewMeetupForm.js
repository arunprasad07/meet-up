import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {
  const refTitle = useRef();
  const refAddress = useRef();
  const refURL = useRef();
  const refDescription = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = refTitle.current.value;
    const enteredAddress = refAddress.current.value;
    const enteredURL = refURL.current.value;
    const enteredDescription = refDescription.current.value;

    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      url: enteredURL,
      description: enteredDescription,
    };
    props.onAddNewMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={refTitle} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={refURL} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" ref={refAddress} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            ref={refDescription}
            required
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
