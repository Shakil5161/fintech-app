import React from "react";
import './ActionCard.css'

const ActionCard = ({ action }) => {
  console.log("action", action.title);
  return (
    <div className="col-sm-4 p-0 col-md-5 me-2 mb-2 bg-color action-card rounded text-white">
      <div className="pt-3 pb-3 m-auto text-center">
        <img src={action.img} alt="" srcset="" /> <br />
        <p className="m-0">{action.title}</p>
      </div>
    </div>
  );
};

export default ActionCard;
