export interface Project {
    id: number;
    name: string;
    identifier: string;
    status: number;
    parent?: {
        id: number;
        name: string;
    }
}