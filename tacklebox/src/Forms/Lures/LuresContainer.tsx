import { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const LuresContainer: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Typography variant='h6' gutterBottom>
                        Lures Form
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id='title'
                        label='Lure Name'
                        defaultValue=''
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth variant='standard'>
                        <InputLabel id='lure-type-select-label'>
                            Lure Type
                        </InputLabel>
                        <Select
                            labelId='lure-type-select-label'
                            id='lure-type-select'
                            // value={age}
                            label='Lure Type'
                            // onChange={handleChange}
                        >
                            <MenuItem value={'Jig'}>Jig</MenuItem>
                            <MenuItem value={'Spinners'}>Spinners</MenuItem>
                            <MenuItem value={'Spoons'}>Spoons</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id='Weight'
                        label='Weight'
                        defaultValue=''
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id='Depth'
                        label='Depth'
                        defaultValue=''
                        variant='standard'
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LuresContainer;
