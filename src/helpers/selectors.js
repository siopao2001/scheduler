//function to get all appointments associated with a day.
export function getAppointmentsForDay(state, day) {
  let apptIDs = [];
  let apptArray = [];
  for (const dayObj of state.days) {
    if (dayObj.name === day) {
      for (const items of dayObj.appointments) apptIDs.push(items);
    }
  }
  for (const apptObj in state.appointments) {
    for (const id of apptIDs) {
      if (+apptObj === id) {
        apptArray.push(state.appointments[apptObj]);
      }
    }
  }

  return apptArray;
}
//function to get all interviewers associated with a day.
export function getInterviewersForDay(state, day) {
  let interviewerIDs = [];
  let interviewerArray = [];
  for (const dayObj of state.days) {
    if (dayObj.name === day) {
      for (const items of dayObj.interviewers) interviewerIDs.push(items);
    }
  }
  for (const apptObj in state.interviewers) {
    for (const id of interviewerIDs) {
      if (+apptObj === id) {
        interviewerArray.push(state.interviewers[apptObj]);
      }
    }
  }

  return interviewerArray;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  console.log(interview);
  return {
    student: interview.student,
    interviewer: {
      id: interview.interviewer,
      name: state.interviewers[interview.interviewer.toString()].name,
      avatar: state.interviewers[interview.interviewer.toString()].avatar,
    },
  };
}
