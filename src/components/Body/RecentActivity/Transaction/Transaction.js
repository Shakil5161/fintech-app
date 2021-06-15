import React from "react";

const Transaction = ({transaction}) => {
  return (
    <>
      <tr>
        <td>
            <div className="d-flex">
                <img className="rounded-circle" height="50px" src={transaction.img} alt="" srcset="" />
                <div className="ps-3">
                    <h6>{transaction.title}</h6>
                    <small className="text-secondary">{transaction.To}</small>
                </div>
            </div>
        </td>
        <td></td>
        <td></td>
        <td>
            <h6>+{transaction.balance}</h6>
            <button type="button" class="btn btn-light border border-success ">{transaction.status}</button>
        </td>
      </tr>
    </>
  );
};

export default Transaction;
