import { Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver(User)
export class UserResolver {
  @Query((returns) => User)
  async currentUser() {
		// HACK: fake resolver function as that's not the point of this reproduction
    return {} as User;
  }
}
