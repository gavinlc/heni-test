export type GetPrintResponse = {
    prints: {
        info: Info
        records: PrintObject[]
    }
}

export type Info = {
    totalrecordsperquery: number;
    totalrecords: number;
    pages: number;
    page: number;
    next: string;
    prev: string;
}

export type PrintObject = {
    id: string;
    title: string;
    dated: string;
    images: Image[];
}

export type Image = {
    imageid: string;
    baseimageurl: string;
}