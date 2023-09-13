  import type {IRadical} from "../models/radical";
  import type {IImages} from "../models/images";
  import type {IEntry} from "../models/entry";
  
  export interface IKanji {
      kid: string;
      literal: string;
      entry: IEntry;
      radical: IRadical;
      onpu: string | null;
      images: (IImages)[];
      radicals: (string)[];
      isReviewed: boolean;
    }
  