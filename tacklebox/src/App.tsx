import React from 'react';
import useSPPnP from './utils/useSPPnP';

const App = () => {
    const { userProfile } = useSPPnP();

    return <>{`Welcome ${userProfile?.Title}`}</>;
};

export default App;
