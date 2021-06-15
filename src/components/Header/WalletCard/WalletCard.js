import React from 'react';

const WalletCard = ({info}) => {
    return (
        <div className="col-md-3 bg-white text-secondary d-flex mt-5 m-3 shadow-sm  bg-body rounded">
            <div className="col-md-7 p-2">
                <h5><b>{info.title}</b></h5>
                {
                    info.btnText !== ""? <button type="button" class="btn btn-light border border-primary">{info.btnText}</button> : " "
                }
                <p className="m-0 pt-4">{info.balance?"Available Balance": ''}</p>
                <h4>{info.balance}</h4>
            </div>
            <div className="col-md-5 m-auto">
                {
                    info.QrCode !=="" ? <img  src={info.QrCode} alt="Qr" srcset="" /> : ''
                }
            </div>
        </div>
    );
};

export default WalletCard;