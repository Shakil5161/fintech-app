import React from "react";
import './ActionCard.css'

const ActionCard = ({ action }) => {
  console.log("action", action.title);
  return (
    <div className="col-md-5 m-2 bg-color action-card rounded text-white">
      <div className="p-2">
        <img src={action.img} alt="" srcset="" /> <br />
        <p>{action.title}</p>
      </div>
    </div>
  );
};

export default ActionCard;
