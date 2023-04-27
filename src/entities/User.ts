import { Item } from './Item';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id!: string;

	@Field()
  email!: string;

	// NOTE: comment out the next line to remove the error.
	@Field(() => [Item])
  items: Item[];
}
