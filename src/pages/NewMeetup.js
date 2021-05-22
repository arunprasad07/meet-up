import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {
  const history = useHistory();

  function addNewMeetupHandler(params) {
    fetch(
      'https://meetup-api-63fe5-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h2>Add New Meetup</h2>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
