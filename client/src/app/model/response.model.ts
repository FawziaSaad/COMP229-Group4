export class Response {
    constructor(
        public _id?:number,
        public surveyId?:number,
        public respondentId?:number,
        public takenBy?:string,
        public datetaken?:Date,
        public question?:Array<string>,
        public response?:Array<string>,
        ){}
    
}