import { MongoDocument } from "models/document";

export type Session = MongoDocument & {
    topic: string;
    messages: Array<string>;
}