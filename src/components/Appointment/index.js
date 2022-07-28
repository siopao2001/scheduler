import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import  "components/Appointment/styles.scss";
import { useVisualMode } from "hooks/useVisualMode";

export default function Appointment(props) {
 const EMPTY = "EMPTY";
 const SHOW = "SHOW";
 const CREATE = "CREATE"
 const SAVING= "SAVING"
 const CONFIRM = "CONFIRM"
 const EDIT = "EDIT"
 const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY)

function save(student, interviewer) {
  const interview = {
    student:student,
    interviewer
  };
  
  transition(SAVING);
  
  props.bookInterview(props.id, interview).then(() => {
      transition(SHOW)
   });
};

function remove() {
  
  transition(SAVING);
  
  props.cancelInterview(props.id).then(() => {
      transition(EMPTY)
  });
};
 
   return(
     <article className="appointment">
      <Header time={props.time}/>
       {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
       {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={()=>transition(EDIT)} onDelete={()=>transition(CONFIRM)}/> }
       {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back} onSave={save}/>}
       {mode === EDIT && <Form student={props.interview.student} interviewer={props.interview.interviewer} interviewers={props.interviewers} onCancel={back} onSave={save}/>}
       {mode === CONFIRM && <Confirm onCancel={back} onConfirm={remove} message="Are you sure you would like to delete"/>}
       {mode === SAVING && <Status/>}
    </article>
 )
}