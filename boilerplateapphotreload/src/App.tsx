import { FC } from 'react';
import useSPPnP from './utils/useSPPnP';

const App: FC = () => {
    const { userProfile } = useSPPnP();

    return <>{`Hello ${userProfile?.Title}`}</>;
};

export default App;
