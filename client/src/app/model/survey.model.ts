import { Question } from './question.model';
export class Survey {
    constructor(
        
        public name?: string,
        public _id?: number, // Use string type for _id
        // Add other properties here if needed
        // For example:
        public userid?: number,
        public creator?: string,
        public startDate?: Date,
        public surveyType?: string,
        public endDate?: Date,
        public questions?: Question[]
    ) {}
}