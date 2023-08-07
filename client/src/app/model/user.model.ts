export class User {
    constructor(
        public _id?: string,
        public username?: string,
        public password?: string,
        public email?: string,
        public displayName?: string,
        public created?: Date,
        public update?: Date,
    ) {}
}