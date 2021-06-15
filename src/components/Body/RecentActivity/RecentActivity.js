import React from "react";
import moniraApu from "../../../img/Monira.jfif";
import aliVi from "../../../img/Ali.jfif";
import asikurVi from "../../../img/Asikur.jfif";
import mosharrfVi from "../../../img/Mosharrf.jfif";
import Transaction from "./Transaction/Transaction";
import './RecentActivity.css'
const RecentActivity = () => {
  const transactionInfo = [
    {
      title: "Dollar Balance (Primary)",
      To: "Mrs Monira . monira@email.com",
      img: moniraApu,
      balance: "$1,750.00",
      status: "Approved",
    },
    {
      title: "Dollar Balance (Primary)",
      To: "Mr Ali . ali@email.com",
      img: aliVi,
      balance: "$1,750.00",
      status: "Approved",
    },
    {
      title: "Dollar Balance (Primary)",
      To: "Mr Asikur . asikur@email.com",
      img: asikurVi,
      balance: "$1,750.00",
      status: "Approved",
    },
    {
      title: "Dollar Balance (Primary)",
      To: "Mr Mosharrf . mosharrf@email.com",
      img: mosharrfVi,
      balance: "$1,750.00",
      status: "Approved",
    },
  ];
  return (
    <div className="ps-5 pe-5 bg-white rounded">
      <div className="d-flex justify-content-between pt-4 pb-4">
        <div className="toggle rounded">
        <ul className="nav d-flex justify-content-between">
              <li className="nav-item toggle-btn">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  Wallet
                </a>
              </li>
              <li className="nav-item toggle-btn">
                <a className="nav-link text-dark" href="#">
                  History
                </a>
              </li>
            </ul>
        </div>
        <span>View All</span>
      </div>
      <table class="table ">
        <tbody>
          <tr>
            <td>Today, 15 January</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {transactionInfo.map((transaction) => (
            <Transaction transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
