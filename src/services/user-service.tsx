export class UserService {
  document: string;

  constructor() {
    this.document = "87654321";
  }

  async userExistInBD(data: string) {
    if (data === this.document) {
      return true;
    }

    return false;
  }
}
