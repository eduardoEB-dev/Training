import { FC } from 'react';
import useSPPnP from './utils/useSPPnP';

const App: FC = () => {
    const { userProfile } = useSPPnP();

    return <>{`Welcome ${userProfile?.Title}`}</>;
};

export default App;
