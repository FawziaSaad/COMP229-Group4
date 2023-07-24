export class survey {
    constructor(
        public _id?:number,
        public surveyId?:number,
        public responseId?:number,
        public takenBy?:string,
        public datetaken?:Date,
        public question?:Array<string>,
        public response?:Array<string>,
        ){}
    
}