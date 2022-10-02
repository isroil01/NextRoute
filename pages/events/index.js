import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/events-search'
import { getAllEvents } from '../../dummy-data'

const AllEvents = () => {
  const data = getAllEvents()
  const router = useRouter();

  const findData= (year,month) =>{
    const fullPath = `/events/${year}/${month}`;
   router.push(fullPath)
  }
  return (
    <Fragment>
      <EventSearch onSearch={findData} />
      <EventList items={data} />
    </Fragment>
  )
}

export default AllEvents