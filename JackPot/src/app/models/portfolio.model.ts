export class Portfolio{
    constructor(
        public fund:string,
        public units:number,
        public avgcost:number,
        public ltp:string,
        public currentval: number,
        public pandl : number,
        public netchg:string,
        public daychg:string
    ){}
}