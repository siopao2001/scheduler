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
