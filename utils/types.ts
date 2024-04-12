// types.ts
export interface Banner {
    acf: {
        banner_home: {
            background_image: {
                url: string,
            },
            title: string,
            content: string,
            banner_cta: {
                title: string,
                url: string,
            }
        }
    }
}


export interface Menu {
    id: number;
    name: string;
    href: string;
}