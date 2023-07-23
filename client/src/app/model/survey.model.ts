export class Survey {
    constructor(
        public name?: string,
        public _id?: string, // Use string type for _id
        // Add other properties here if needed
        // For example:
        public userid?: string,
        public creator?: string,
        public startDate?: Date,
        public surveyType?: string,
        public endDate?: Date,
        public questions?: Question[]
    ) {}
}

export class Question {
    constructor(
        public Question?: string,
        public OptionOne?: string,
        public OptionTwo?: string,
        public OptionThree?: string,
        public OptionFour?: string,
    ) {}

    get question(): string
    {
        return this.Question;
    }
}

export class User {
    constructor(
        public _id?: string,
        public username?: string,
        public email?: string,
        public displayName?: string,
        public created?: Date,
        public update?: Date,
    ) {}
}