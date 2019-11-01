import moment from 'moment'
import {Person} from './Person'
import {Place} from './Place'
import {CreativeWork} from './CreativeWork'
import {Offer} from './Offer'
import {Organization} from './Organization'

/**
 * {@link https://schema.org/TheaterEvent}
 */

const performers = () => {

}

const houseOpens = ( startTime ) => {
	return moment( startTime ).subtract( 30, 'minutes' ).format()
}

export const multipleEvents = (events) => `

`;

export const theatreEvent = ( main, location, offer, creativeWork ) => `

	"@context" : "http://schema.org",
	"@type"	: "TheatreEvent",
	"name": "${main.title}",
	"eventStatus": "EventScheduled",
	"maximumAttendeeCapacity": ${performance.maxSeats},
	"doorTime": "${houseOpens(performance.start)}",
	"startDate"${performance.start}",
	"endDate": "${performance.end}",
	"availableLanguage": [
		{
			"@type": "Language",
			"name": "English"
		}
	],
	"location": {
		${location}
	},
	"offers": [
		${offers}
	],
	"sponsor": [],
	"director": [],
	"performers": [],
	"workPerformed": {
		${creativeWork}
	}


`;
