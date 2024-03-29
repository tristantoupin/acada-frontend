import { MongoDocument, ObjectId } from "models/document";

export type User = MongoDocument & CoreUser

export type CoreUser = {
    email: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    topic_ids: Array<string>;
}