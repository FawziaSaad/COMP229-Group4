 export class Response {
    constructor(
        public _id?:string,
        public surveyId?:string,
        public respondentId?:string,
        public takenBy?:string,
        public datetaken?:Date,
        public question?:Array<string>,
        public response?:Array<string>,
        ){}
        
    }