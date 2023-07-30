export class Response {
    constructor(
        public _id?:number,
        public surveyId?:number,
        public respondentId?:number,
        public takenBy?:string,
        public datetaken?:Date,
        public questions?:Array<string>,
        public responses?:Array<string>,
        ){}
    
}