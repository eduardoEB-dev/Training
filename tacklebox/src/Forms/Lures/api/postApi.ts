import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import { IItemAddResult } from '@pnp/sp/items';
import { LuresFormType } from '../Validation/Validation';

export const addLure = (data: LuresFormType): Promise<IItemAddResult> => {
    return new Promise(async (resolve, reject) => {
        try {
            let addItem = await sp.web.lists
                .getByTitle('Lures')
                .items.add(data);
            resolve(addItem);
        } catch (error) {
            reject(error);
        }
    });
};
