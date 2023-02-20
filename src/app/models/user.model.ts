export class User {

  public _id?: string = ''
  constructor(
      public name: string = '',
      public coins: number = 100,
      public moves: string[]
      ) {
  }

  setId?(id: string = 'u101') {
      this._id = id
  }
}
