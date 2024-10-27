import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("qrcode")
export class Qrcode {
	@PrimaryColumn()
	id!: string;

	@Column()
	value!: string;

	@Column()
	type!: string;

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
