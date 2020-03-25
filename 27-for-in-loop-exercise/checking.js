const users = [{
        id: 1,
        first_name: "Yuri",
        last_name: "Vaudre",
        ip_address: "131.1.166.172",
        job_title: "Senior Editor",
        language: "Tswana",
        fav_movie_genre: "Drama"
    },
    {
        id: 2,
        first_name: "Neel",
        last_name: "Durrett",
        ip_address: "194.54.176.182",
        job_title: "Teacher",
        language: "Aymara",
        fav_movie_genre: "Crime|Drama"
    },
    {
        id: 3,
        first_name: "Patton",
        last_name: "Myall",
        ip_address: "61.214.242.223",
        job_title: "Operator",
        language: "Haitian Creole",
        fav_movie_genre: "Comedy"
    }
];

const anonData = [];

for (const user of users) {
    const anonUser = {};
    for (const userKey in user) {
        if (userKey !== "first_name" && userKey !== "last_name") {
            anonUser[userKey] = user[userKey];
        }
    }
    anonData.push(anonUser);
}