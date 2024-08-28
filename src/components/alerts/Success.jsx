import { Checkmark } from '@carbon/icons-react';
import React, { useEffect } from 'react';

const Success = (props) => {
    const { name, message, noIcon } = props;
    useEffect(() => {
        window.xuiAlerts();
        if(message){
            window.xuiAnimeStart(`${name}`);
            setTimeout(() => {
                window.xuiAnimeEnd(`${name}`);
            }, 2400);
        }
    }, [message]);
    return (
        <>
        <div className="xui-alert xui-alert-success" xui-custom={name} xui-placed="top-right" no-icon={noIcon ? `'${noIcon}'` : 'false'}>
            <div className="xui-alert-close">
                <Checkmark size={24} color="currentColor" />
            </div>
            <div className="xui-alert-content">
                <span>{message}</span>
            </div>
        </div>
        </>
    );
};

export default Success;