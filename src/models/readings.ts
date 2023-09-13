    import type {IReading} from "../models/reading"
    
    export interface IReadings {
        onyomi: (IReading)[] | null;
        kunyomi: (IReading)[] | null;
        nanori: (IReading)[] | null;
        other: (IReading)[] | null;
    }