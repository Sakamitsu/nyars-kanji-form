    import type {IWord} from "../models/word";

    export interface IKanbunMeanings {
        title: string;
        readings: (string)[] | null;
        words: (IWord)[] | null;
        source: string | null;
    }