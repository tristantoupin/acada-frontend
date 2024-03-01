import { MongoDocument } from "models/document";

export type Message = MongoDocument & {
    session: string;
    author: string;
    content: string;
}
