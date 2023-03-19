enum FormName {
    LURES = 'lures',
    INVALID = 'invalid'
}

enum FormView {
    NEW = 'new',
    EDIT = 'edit',
    VIEW = 'view',
    INVALID = 'invalid'
}

type URLParams = {
    formNameStr: FormName;
    formViewStr: FormView;
    itemId: number | 0;
};

const mapFormName = (formName?: string): FormName => {
    switch (formName?.toLocaleLowerCase()) {
        case 'lures':
            return FormName.LURES;
        default:
            return FormName.INVALID;
    }
};

const mapFormView = (formView?: string): FormView => {
    switch (formView?.toLocaleLowerCase()) {
        case 'new':
            return FormView.NEW;
        case 'edit':
            return FormView.EDIT;
        case 'view':
            return FormView.VIEW;
        default:
            return FormView.INVALID;
    }
};

const getURLParams = (): URLParams => {
    const searchParams = new URLSearchParams(window.location.search);

    const formName = searchParams.get('formName');
    const formView = searchParams.get('formView');
    const itemIdStr = searchParams.get('Id');

    const ItemId: number = parseInt(itemIdStr ?? '0');

    return {
        formNameStr: mapFormName(formName || 'invalid'),
        formViewStr: mapFormView(formView || 'invalid'),
        itemId: ItemId
    };
};

export default getURLParams;
