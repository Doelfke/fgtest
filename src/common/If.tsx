import React from 'react';

interface Props {
    value?: any;
    children: React.ReactNode
}

function If(props: Props) {
    if (!!props.value) {
        return ( 
            <>
            { props.children }
            </>
        );
    } else {
        return <></>
    }
}

export default If;
