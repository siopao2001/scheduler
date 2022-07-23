export function getAppointmentsForDay(state, day) {
  let apptIDs = [];
  let apptArray = []
  for (const dayObj of state.days) {
    if(dayObj.name === day) {
      for(const items of dayObj.appointments)
        apptIDs.push(items)
           
   }
 };
  for (const apptObj in state.appointments) {
      for(const id of apptIDs) {
        if(+apptObj === id) {
         apptArray.push(state.appointments[apptObj])
    }
  }
 
 };
  
  return apptArray
};

export function getInterview(state, interview) {
 if(!interview){
    return null;
 }

 return {
      "student": interview.student,
      "interviewer": {
           "id": interview.interviewer,
           "name": state.interviewers[interview.interviewer.toString()].name,
           "avatar": state.interviewers[interview.interviewer.toString()].avatar
    }

}
 
}