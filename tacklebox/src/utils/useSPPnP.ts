import { useEffect, useState } from 'react';
import { sp } from '@pnp/sp';
import { Web } from '@pnp/sp/webs';
import '@pnp/sp/webs';
import '@pnp/sp/site-users/web';

type ProfileType = {
    Id: number;
    IsHiddenInUI: boolean;
    LoginName: string;
    Title: string;
    PrincipalType: number;
    Email: string;
    IsSiteAdmin: boolean;
};

type UseSPPnPResult = {
    userProfile: ProfileType | null;
};

const useSPPnP = (): UseSPPnPResult => {
    const [userProfile, setUserProfile] = useState<ProfileType | null>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const baseURL = window.location.href.split('/SiteAssets/')[0];
                Web(baseURL);
                sp.setup({
                    sp: {
                        baseUrl: baseURL
                    }
                });
                const user = await sp.web.currentUser();
                setUserProfile(user);
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
    }, []);

    return { userProfile };
};

export default useSPPnP;
