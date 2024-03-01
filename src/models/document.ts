export type ObjectId = {
    id: string;
}
export type MongoDocument = ObjectId & {
    created_at: Date | null;
    updated_at: Date | null;
}