import React from 'react';
import Heading2 from '../utils/Heading2';
import LinkButton from '../utils/LinkButton';
import Badge from '../utils/Badge';
import eventsData from '../../../data/eventData'
import { useParams } from 'react-router-dom';
import PosterContainer from '../app/PosterContainer';
import BadgeContainer from '../app/BadgeContainer';
import VenueImageContainer from '../app/VenueImageContainer';
import MapContainer from '../app/MapContainer';
import EventDataContainer from '../app/EventDataContainer';

function Events() {
    const { eventId } = useParams();
    const eventData = eventsData.find(event => event.id === parseInt(eventId));

    if (!eventData) return <h1>Loading...</h1>

    return (<div>
        <EventDataContainer></EventDataContainer>
        <PosterContainer></PosterContainer>
        <BadgeContainer></BadgeContainer>
        <VenueImageContainer></VenueImageContainer>
        <MapContainer></MapContainer>
    </div>
    )
}

export default Events