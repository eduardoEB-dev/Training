import { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import {
    defaultValues,
    LuresFormType,
    validationSchema
} from './Validation/Validation';
import { yupResolver } from '@hookform/resolvers/yup';

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

    const methods = useForm<LuresFormType>({
        resolver: yupResolver(validationSchema),
        defaultValues: defaultValues
    });

    const { control, register, watch } = methods;

    return (
        <FormProvider {...methods}>
            <Box sx={{ flexGrow: 1 }}>
                <pre style={{ fontSize: '12px' }}>
                    {JSON.stringify(watch(), null, 2)}
                </pre>
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
                            {...register('Title')}
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name='LureType'
                            control={control}
                            render={({ field }) => (
                                <FormControl fullWidth variant='standard'>
                                    <InputLabel id='lure-type-select-label'>
                                        Lure Type
                                    </InputLabel>
                                    <Select
                                        labelId='lure-type-select-label'
                                        id='lure-type-select'
                                        label='Lure Type'
                                        {...field}
                                    >
                                        {lureTypes.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id='Weight'
                            label='Weight'
                            {...register('Weight')}
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id='Depth'
                            label='Depth'
                            {...register('Depth')}
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id='Length'
                            label='Length'
                            {...register('Length')}
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id='Color'
                            label='Color'
                            {...register('Color')}
                            variant='standard'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            name='RunningLow'
                            control={control}
                            render={({ field }) => (
                                <FormControl>
                                    <FormLabel id='inventory-group-label'>
                                        Running Low?
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby='inventory-group-label'
                                        {...field}
                                    >
                                        {yesNoObject.map((option) => (
                                            <FormControlLabel
                                                key={option.value}
                                                value={option.value}
                                                control={<Radio />}
                                                label={option.label}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            )}
                        />
                    </Grid>
                </Grid>
            </Box>
        </FormProvider>
    );
};

export default LuresContainer;
