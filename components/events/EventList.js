import EventsItem from "./events-item";
import style  from './event-list.module.css'

const EventList = (props) => {
  return (
    <ul className={style.list}>
      {props.items.map((events) => (
        <EventsItem
        key={events.id}
          id={events.id}
          title={events.title}
          date={events.date}
          location={events.location}
          image={events.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
