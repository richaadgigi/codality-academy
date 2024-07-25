import { MachineLearning } from '@carbon/icons-react';
import React from 'react';

const HWDBox = () => {
    return (
        <>
        <div className='xui-p-1 xui-lg-p-1-half ca-bg-light-purple xui-bdr-rad-2'>
            <div className='xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center xui-w-60 xui-h-60 xui-bdr-rad-1 ca-bg-purple xui-text-white'>
                <MachineLearning size={28} />
            </div>
            <div className='xui-my-1-half'>
                <h3 className='xui-font-sz-150'>Project-based learning</h3>
                <p className='xui-mt-1 xui-opacity-6 xui-line-height-2 xui-font-sz-90'>We believe that the best way to learn is by doing. That's why we use a project-based approach to learning, where you get to work on real-world projects that simulate the challenges you’ll face in the tech industry. This approach will help you develop critical thinking and problem-solving skills, as well as the ability to work collaboratively in a team.</p>
            </div>
        </div>
        </>
    );
};

export default HWDBox;