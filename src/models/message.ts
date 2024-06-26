import { MongoDocument } from "models/document";

export type Message = MongoDocument & CoreMessage

export type CoreMessage = {
    session: string;
    author: string;
    content: string;
}
