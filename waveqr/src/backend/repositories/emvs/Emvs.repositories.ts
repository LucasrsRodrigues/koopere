import { database, emvsCollection } from "@backend/database";
import type { EmvModel } from "@backend/database/models/emvModel";
import { Q } from "@nozbe/watermelondb";

interface ICreateEmvsDTO {
	value: string;
	type: string;
	isFavourite?: boolean;
	isActive?: boolean;
}
const EmvsRepository = {
	create: async ({
		value,
		type,
		isFavourite = false,
		isActive = true,
	}: ICreateEmvsDTO): Promise<EmvModel> => {
		return await database.write(async () => {
			return await emvsCollection.create((emv) => {
				emv.value = value;
				emv.type = type;
				emv.isActive = isActive;
				emv.isFavourite = isFavourite;
			});
		});
	},
	read: async (): Promise<EmvModel[]> => {
		const response = await emvsCollection.query().fetch();
		return response;
	},
	getInfo: async (id: string): Promise<EmvModel> => {
		return await emvsCollection.find(id);
	},
	getFavourites: async (): Promise<EmvModel[]> => {
		const response = await emvsCollection
			.query(Q.where("isFavourite", true))
			.fetch();

		return response;
	},
	addToFavorites: async (id: string): Promise<false | EmvModel> => {
		try {
			const response = await database.write(async () => {
				const finded = await emvsCollection.find(id);

				const updated = await finded.update(() => {
					finded.isFavourite = !finded.isFavourite;
				});

				return updated;
			});

			return response;
		} catch (error) {
			return false;
		}
	},
};

export default EmvsRepository;
