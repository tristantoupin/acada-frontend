import { MongoDocument } from "models/document";

export type User = MongoDocument & {
    email: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    password: string;
}