import EventList from '../components/events/EventList';
import {getFeaturedEvents} from '../dummy-data'

const Home = () => {
const featuredevents  = getFeaturedEvents();
  return (
      <div>
       <EventList items={featuredevents} />
      </div>
  )
}

export default Home