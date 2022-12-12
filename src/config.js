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
		photo:"https://cdn.dribbble.com/users/303276/avatars/normal/11b212567a91f07cfc843ab6c75066c9.jpg?1551114516"
	},
	{
		id: "1002",
		username: "guillermo",
		name: "Guillermo Sifuentes",
		pass: "1234",
		photo:"https://cdn.dribbble.com/users/2173663/avatars/normal/c4c633361e233ae7e0b9882264c95b1a.jpg?1579775888"
	},
	{
		id: "1003",
		username: "pepe",
		name: "pepe zapata",
		pass: "1234",
		photo:"https://cdn.dribbble.com/users/11653188/avatars/normal/c384e65da441b301c9b5fe3d67073869.png?1669875410"
	}
];

const Config = {
	authUsers,
	api,
};

export default Config;
