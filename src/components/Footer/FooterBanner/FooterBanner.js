import React from 'react';
import iStore from '../../../img/iStore.png';
import playStore from '../../../img/Playstore.png';
import corner from '../../../img/Corner.png';
import bnrIphone from '../../../img/iPhone Mask Group.png';
const FooterBanner = () => {
    return (
        <div className="container row bg-white rounded d-flex justify-content-between p-0 mt-5  mb-5">
            <div className="col-md-6 p-5">
                <h4>Get Fintech App</h4>
                <p>Available On</p>
                <div className="d-flex pt-3">
                    <a href="#" className="me-3">
                        <img height="40px" src={iStore} alt="" srcset="" />
                    </a>
                    <a href="#">
                        <img height="40px" src={playStore} alt="" srcset="" />
                    </a>
                </div>
            </div>
            <div className="col-md-6 card border-0">
            <img src={corner} class="card-img" alt="..."/>
                <div class="card-img-overlay">
                    <img width="100%" src={bnrIphone} alt="" srcset="" />
                </div>
        </div>
    </div>
    );
};

export default FooterBanner;