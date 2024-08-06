import { WarningDiamond } from '@carbon/icons-react';
import React, { useEffect } from 'react';

const Error = (props) => {
    const { message, noIcon } = props;
    useEffect(() => {
        window.xuiAlerts();
        if(message){
            window.xuiAnimeStart('errorAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('errorAlert');
            }, 2400);
        }
    }, [message]);
    return (
        <>
        <div className="xui-alert xui-alert-danger" xui-custom="errorAlert" xui-placed="top-right" no-icon={noIcon ? `'${noIcon}'` : 'false'}>
            <div className="xui-alert-close">
                <WarningDiamond size={24} color="currentColor" />
            </div>
            <div className="xui-alert-content">
                <span>{message}</span>
            </div>
        </div>
        </>
    );
};

export default Error;