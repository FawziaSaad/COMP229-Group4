//Maybe the seperation of Q model and survey model is not needed
export class Question {
    constructor(
        public _id?: number, 
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