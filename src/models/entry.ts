    import type {IGeneral} from "../models/general";
    import type {IReadings} from "../models/readings";
    import type {IForms} from "../models/forms";
    import type {IWord} from "../models/word";
    import type {IComposedMeanings} from "../models/composedMeanings";
    import type {IKanbunMeanings} from "../models/kanbunMeanings";
    import type {IIndices} from "../models/indices";

    export interface IEntry {
        general: IGeneral;
        readings: IReadings | null;
        forms: (IForms)[] | null;
        standaloneMeanings: (IWord)[] | null;
        composedMeanings: (IComposedMeanings)[] | null;
        kanbunMeanings: (IKanbunMeanings)[] | null;
        indices: (IIndices)[] | null;
        standaloneSource: string | null;
    }