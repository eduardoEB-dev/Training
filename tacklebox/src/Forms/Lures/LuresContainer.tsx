import { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const LuresContainer: FC = () => {
    const yesNoObject = [
        { label: 'Yes', value: 'true' },
        { label: 'No', value: 'false' }
    ];

    const lureTypes = [
        { label: 'Jig', value: 'Jig' },
        { label: 'Spinners', value: 'Spinners' },
        { label: 'Spoons', value: 'Spoons' }
    ];

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
                            {lureTypes.map((option) => (
                                <MenuItem value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
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
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id='Length'
                        label='Length'
                        defaultValue=''
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        fullWidth
                        id='Color'
                        label='Color'
                        defaultValue=''
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel id='inventory-group-label'>
                            Running Low?
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='inventory-group-label'
                            name='inventory-buttons-group'
                        >
                            {yesNoObject.map((option) => (
                                <FormControlLabel
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LuresContainer;
