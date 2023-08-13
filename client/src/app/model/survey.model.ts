import { Question } from './question.model';
export class Survey {
    constructor(
        public name?: string,
        public _id?: string, // Use string type for _id
        public userid?: string,
        public creator?: string,
        public startDate?: Date,
        public surveyType?: string,
        public endDate?: Date,
        public questions?: Question[]
    ) {}
}
