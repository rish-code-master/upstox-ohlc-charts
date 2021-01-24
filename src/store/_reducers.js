/**
 * Copyright (c) 2021
 *
 * long description for the file
 *
 * @summary App Component
 * @author Rishabh <rishabh.it.007@gmail.com>
 *
 * Created at     : 2021-01-16 05:00:00 
 * Last modified  : 2021-01-16 05:00:00 
 */
import {
  SET_CURRENT_TIME,
  SET_CURRENT_DAY,
  SET_CURRENT_DATE,
  SET_WEEK_START,
  SET_WEEK_END,
  SET_WEEK_RANGE,
  TOGGLE_AVAILABILITY,
  SET_WEEKDAY_AVAILABILITY_FROM,
  SET_WEEKDAY_AVAILABILITY_TO,
  SET_WEEKEND_AVAILABILITY_FROM,
  SET_WEEKEND_AVAILABILITY_TO,
  TOGGLE_ERROR,
  TOGGLE_LOADING,
  SET_BOOKED_EVENTS
} from "./_actions";
import * as Util from '../util';

function availabilityReducer(state, action) {
  switch (action.type) {

    case SET_CURRENT_TIME:
      return { ...state, currentTime: Util.currentTime() };

    case SET_CURRENT_DAY:
      return { ...state, currentDay: Util.currentDay() };

    case SET_CURRENT_DATE:
      return { ...state, currentDate: Util.currentDate() };

    case SET_WEEK_START:
      return { ...state, weekStart: action.weekStart };

    case SET_WEEK_END:
      return { ...state, weekEnd: action.weekEnd };

    case SET_WEEK_RANGE:
      return { ...state, weekRange: action.weekRange };

    case TOGGLE_AVAILABILITY:
      return { ...state, weekdayAvailability: !state.weekdayAvailability, weekendAvailability: !state.weekendAvailability };

    case SET_WEEKDAY_AVAILABILITY_FROM:
      return { ...state, weekdayAvailabilityFrom: action.weekdayAvailabilityFrom };

    case SET_WEEKDAY_AVAILABILITY_TO:
      return { ...state, weekdayAvailabilityTo: action.weekdayAvailabilityTo };

    case SET_WEEKEND_AVAILABILITY_FROM:
      return { ...state, weekendAvailabilityFrom: action.weekendAvailabilityFrom };

    case SET_WEEKEND_AVAILABILITY_TO:
      return { ...state, weekendAvailabilityTo: action.weekendAvailabilityTo };

    case SET_BOOKED_EVENTS:
      return { ...state, bookedEvents: action.bookedEvents };
  
    case TOGGLE_ERROR:
      return { ...state, error: !state.error };

    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading };

    default:
      return { ...state };
  }
}

export default availabilityReducer;
