import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
export class User {
	@PrimaryColumn()
	id!: string;

	@Column()
	name!: string;

	@Column()
	username!: string;

	@Column()
	password!: string;

	@Column()
	email!: string;

	@CreateDateColumn()
	created_at!: Date;

	@UpdateDateColumn()
	updated_at!: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}
}
