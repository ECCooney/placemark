export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },

    placemarks: {
        _model: "Placemark",
        DarkHedges: {
          name: "Dark Hedges",
          latitude: 55.1346929,
          longitude: -6.380822,
          category: "Game of Thrones",
          description: "The Stunning Bregagh Road, otherwise known as the Dark Hedges or King's Road in Game of Thrones is two rows of beechtrees that were planted in the 18th century by James Stuart, roughly 150+ beech trees where planted to line the entrance to his home - Gracehill House.",
          userid: "->users.homer"
        },
        TrimCastle: {
            name: "Trim Castle",
            latitude: 53.5544,
            longitude: -6.7898,
            category: "Braveheart",
            description: "An epic and romantic fresco that marked the 1990s, Braveheart focuses on the trajectory of one of Scotland's greatest heroes. However, it is in Ireland that Mel Gibson mainly shot. Especially around and inside the castle of Trim, not far from Dublin.",
            userid: "->users.homer"
          }
      },
};