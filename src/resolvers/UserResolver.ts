import { Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver(User)
export class UserResolver {
	// NOTE: empty resolver as issue is a start-time error
}
