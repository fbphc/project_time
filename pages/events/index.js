import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/events-list';
import EventsSearch from './events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
