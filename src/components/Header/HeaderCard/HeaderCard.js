import React from "react";
import Qr from "../../../img/QR.png";
import WalletCard from "../WalletCard/WalletCard";
const HeaderCard = () => {
  const cardInfo = [
    {
      title: "Dollar Balance",
      btnText: "Primary",
      balance: "$ 2780,00",
      QrCode: Qr,
    },
    { title: "My Dollar", btnText: "", balance: "$ 5000,00", QrCode: Qr },
    { title: "Add Balance", btnText: "", balance: "", QrCode: "" },
  ];
  return (
    <div className="container text-white">
      <div className="pt-5 pb-2">
        <h3>Wallet</h3>
        <h6>Dashboard</h6>
      </div>
      <div className="d-flex row gy-3">
        {cardInfo.map((info) => (
          <WalletCard info={info} />
        ))}
      </div>
    </div>
  );
};

export default HeaderCard;
