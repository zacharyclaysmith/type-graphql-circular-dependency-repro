import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Item {
  @Field((type) => ID)
  id!: string;

	@Field()
  name!: string;

  @Field((type) => User)
  owner: User;
}
