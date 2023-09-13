export interface IReading {
    value: string;
    tags: (string | null)[] | null;
    source: string | null;
}