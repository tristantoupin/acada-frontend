import { MongoDocument } from "models/document";

export type Topic = MongoDocument & {
    name: string;
    description: string;
    sessions: Array<string>;
}
