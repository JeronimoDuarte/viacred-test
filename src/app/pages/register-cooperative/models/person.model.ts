import { Situation } from "./enuns/situation.enum";

export class PersonModel{
    constructor(
        public readonly name: string,
        public readonly cpf: string,
        public readonly situation: Situation,
        public readonly client: boolean
    ){}
}