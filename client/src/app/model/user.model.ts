export class User {
    constructor(
        public _id?: number,
        public username?: string,
        public email?: string,
        public displayName?: string,
        public created?: Date,
        public update?: Date,
    ) {}
}