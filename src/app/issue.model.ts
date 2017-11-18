export interface Issue {
    id: number;
    project: {
        id: number;
        name: string;
    };
    tracker: {
        id: number;
        name: string;
    };
    status: {
        id: number;
        name: string;
    };
    subject: string;
}