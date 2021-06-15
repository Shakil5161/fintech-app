import React from "react";
import FooterBanner from "./FooterBanner/FooterBanner";

const Footer = () => {
  return (
    <div className="container p-0">
      <FooterBanner />
      <div className="d-flex justify-content-between pb-5">
        <small>
          Copyright &copy;2017-{new Date().getFullYear()}
            Fintech App. Ltd. All rights reserved.
        </small>
        <small>
            Legal | Privacy
        </small>
      </div>
    </div>
  );
};

export default Footer;
