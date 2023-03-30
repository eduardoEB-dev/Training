import { boolean, InferType, object, string } from 'yup';

export type LuresFormType = InferType<typeof validationSchema>;

export const validationSchema = object()
    .required()
    .shape({
        Title: string().required('Required Field'),
        LureType: string(),
        Weight: string(),
        Depth: string(),
        Length: string(),
        Color: string(),
        RunningLow: boolean()
    });

export const defaultValues: LuresFormType = {
    Title: '',
    LureType: '',
    Weight: '',
    Depth: '',
    Length: '',
    Color: '',
    RunningLow: false
};
