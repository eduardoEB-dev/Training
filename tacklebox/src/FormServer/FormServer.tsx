import { FC } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const FormServer: FC = () => {
    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h3'>Form Server</Typography>
                <Typography sx={{ color: 'red' }} variant='subtitle1'>
                    Error URL Parameters
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FormServer;
