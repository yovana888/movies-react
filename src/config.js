const api = {
	url: "https://www.omdbapi.com",
	key: "e50b7182",
};

export const authUsers = [
	{
		id: "1001",
		username: "admin",
		name: "Admin",
		pass: "1234",
	},
	{
		id: "1002",
		username: "guillermo",
		name: "Guillermo Sifuentes",
		pass: "1234",
	},
	{
		id: "1003",
		username: "pepe",
		name: "pepe zapata",
		pass: "1234",
	},
	{
		id: "1004",
		username: "",
		name: "",
		pass: "",
	},
];

const Config = {
	authUsers,
	api,
};

export default Config;
