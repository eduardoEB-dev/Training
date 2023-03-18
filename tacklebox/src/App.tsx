import { FC } from 'react';
import useSPPnP from './utils/useSPPnP';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Content from './Content/Content';

const App: FC = () => {
    const { userProfile } = useSPPnP();

    return (
        <>
            <CssBaseline />
            <Container maxWidth='sm'>
                <Content />
            </Container>
        </>
    );
};

export default App;
