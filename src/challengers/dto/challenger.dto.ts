export class CreateChallengerDTO {
  id: number;
  name: string;
  document: string;
  birthdate: Date;
}

export class FindOneChallengerDTO {
  id: number;
}

export class UpdateChallengerDTO {
  id: number;
  name: string;
  document: string;
  birthdate: Date;
}
