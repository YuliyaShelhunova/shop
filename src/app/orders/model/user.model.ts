export class UserModel {
    constructor(
        public id: number = 0,
        public firstName: string,
        public lastName: string,
        public address: string,
        public phone: string
    ) { }
}
