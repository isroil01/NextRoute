import EventsItem from './events-item';

const EventList = (props) => {
  return (
    <ul>
        {
            props.items.map(events =><EventsItem />)
        }
    </ul>
  )
}

export default EventList