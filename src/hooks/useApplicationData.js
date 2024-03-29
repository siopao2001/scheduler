import { useState, useEffect } from "react";
import axios from "axios";
//function to export object containg state, setDay, cancelInterview, bookInterview.
export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });
  //This function returns an array with the day index and object.
  function getDayByName(array, dayName) {
    for (const day in array) {
      if (array[day].name === dayName) {
        return [day, array[day]];
      }
    }
  }

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const dayArray = getDayByName(state.days, state.day);
    let day = { ...dayArray[1], spots: dayArray[1] };

    if (!state.appointments[id].interview) {
      day = {
        ...dayArray[1],
        spots: dayArray[1].spots - 1,
      };
    } else {
      day = {
        ...dayArray[1],
        spots: dayArray[1].spots,
      };
    }

    let days = state.days;
    days[dayArray[0]] = day;

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((response) => {
        setState({ ...state, appointments, days });
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const dayArray = getDayByName(state.days, state.day);
    let day = { ...dayArray[1], spots: dayArray[1].spots + 1 };

    let days = state.days;
    days[dayArray[0]] = day;

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((response) => {
        setState({ ...state, appointments, days });
      });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
