import { MongoDocument } from "models/document";

export type Topic = MongoDocument & CoreTopic

export type CoreTopic = {
    name: string;
    description: string;
    instructions: string;
    sessions: Array<string>;
    assistant?: object;
}
