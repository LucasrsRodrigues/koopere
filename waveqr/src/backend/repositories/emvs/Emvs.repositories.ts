import { database } from "@backend/database";
import type { EmvModel } from "@backend/database/models/emvModel";
import { Q } from "@nozbe/watermelondb";

interface ICreateEmvsDTO {
	value: string;
	type: string;
}

const EmvsRepository = {
	create: async ({ value, type }: ICreateEmvsDTO): Promise<EmvModel> => {
		return await database.write(async () => {
			return await database.get<EmvModel>("emvs").create((data) => {
				(data.value = value), (data.type = type), (data.isFavourite = false);
			});
		});
	},
	read: async (): Promise<EmvModel[]> => {
		const emvsCollection = database.get<EmvModel>("emvs");

		const response = await emvsCollection.query().fetch();
		return response;
	},
	getInfo: async (id: string): Promise<EmvModel> => {
		const emvsCollection = database.get<EmvModel>("emvs");

		return await emvsCollection.find(id);
	},
	getFavourites: async (): Promise<EmvModel[]> => {
		const emvsCollection = database.get<EmvModel>("emvs");
		const response = await emvsCollection
			.query(Q.where("isFavourite", true))
			.fetch();

		return response;
	},
	addToFavorites: async (id: string): Promise<false | EmvModel> => {
		try {
			const response = await database.write(async () => {
				const emvsCollection = await database.get<EmvModel>("emvs");

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
