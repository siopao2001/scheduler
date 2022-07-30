import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import  "components/Appointment/styles.scss";
import { useVisualMode } from "hooks/useVisualMode";

export default function Appointment(props) {
 const EMPTY = "EMPTY";
 const SHOW = "SHOW";
 const CREATE = "CREATE"
 const SAVING= "SAVING"
 const DELETING= "DELETING"
 const CONFIRM = "CONFIRM"
 const EDIT = "EDIT"
 const ERROR_SAVE = "ERROR_SAVE"
 const ERROR_DELETE = "ERROR_DELETE"
 const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY)

function save(student, interviewer) {
  const interview = {
    student:student,
    interviewer
  };
  
  transition(SAVING);
  
  props.bookInterview(props.id, interview).then(() => {
      transition(SHOW)
   }).catch((error) => {
      transition(ERROR_SAVE, true) 
    });
};

function remove() {
  
  transition(DELETING, true);
  
  props.cancelInterview(props.id).then(() => {
     transition(EMPTY)
  }).catch((error) => {
     transition(ERROR_DELETE, true)
   });
};
 
   return(
     <article className="appointment">
      <Header time={props.time}/>
       {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
       {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={()=>transition(EDIT)} onDelete={()=>transition(CONFIRM)}/> }
       {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back} onSave={save}/>}
       {mode === EDIT && <Form student={props.interview.student} interviewer={props.interview.interviewer.id} interviewers={props.interviewers} onCancel={back} onSave={save}/>}
       {mode === CONFIRM && <Confirm onCancel={back} onConfirm={remove} message="Are you sure you would like to delete"/>}
       {mode === SAVING && <Status message="Saving"/>}
       {mode === DELETING && <Status message="Deleting"/>}
       {mode === ERROR_SAVE && <Error onClose={back} message="Could not save appointment"/>}
       {mode === ERROR_DELETE && <Error onClose={back} message="Could not delete appointment"/>}
    </article>
 )
}