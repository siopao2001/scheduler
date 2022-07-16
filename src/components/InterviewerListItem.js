import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {
 let InterviewerListItemClass = classNames("interviewers__item", {"interviewers__item--selected": props.selected});

  return (
     <li onClick={() => props.setInterviewer(props.id)} className={InterviewerListItemClass} selected={props.selected} >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
       {props.selected && <p>{props.name}</p>}
     </li>
  )
}