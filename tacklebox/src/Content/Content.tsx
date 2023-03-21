import { FC, lazy } from 'react';
import getURLParams from '../utils/getURLParams';

const FormServer = lazy(() => import('../FormServer/FormServer'));
const LuresContainer = lazy(() => import('../Forms/Lures/LuresContainer'));

const Content: FC = () => {
    const { formNameStr, formViewStr, itemId } = getURLParams();

    let formContent = null;
    switch (formNameStr) {
        case 'lures':
            formContent = <LuresContainer />;
            break;
        default:
            formContent = <FormServer />;
            break;
    }

    return formContent;
};

export default Content;
