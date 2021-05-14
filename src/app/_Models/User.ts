export class User {
    constructor(public fname: string,
        public lname: string,
        public username: string,
        public password : string,
        public dob ?: Date,
        public _id?:string,
        public following ?: [{ ref: 'User' }],
        public followers ?: [{ ref: 'User' }],
        public token?:string,
        )

        {  }
}
