import React from 'react';
import pay from '../../../img/pay.png';
import request from '../../../img/request.png';
import topUp from '../../../img/topup.png';
import withdraw from '../../../img/withdraw.png';
import ActionCard from '../ActionCard/ActionCard';
const Action = () => {
    const actionData = [
        {title: 'Pay',  img:pay},
        {title: 'Request',  img:request},
        {title: 'TopUp',  img:topUp},
        {title: 'Withdraw',  img:withdraw},
    ];
    return (
            <div className="d-flex row">
                {
                    actionData.map(action =><ActionCard action={action}/>)
                }
            </div>
    );
};

export default Action;