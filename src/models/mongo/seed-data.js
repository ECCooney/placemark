import dotenv from "dotenv";

const result = dotenv.config();

const adminEmail = process.env.admin_email
const adminPassword = process.env.admin_password

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
      },
      admin: {
        email: adminEmail,
        password: adminPassword
      }
    },
    
    categorys: {
      _model: "Category",
      got: {
        name: "Game of Thrones",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678637539/iyurw2pw1l9xlzupdec3.jpg"        
      },
      braveheart: {
        name: "Braveheart",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678638566/e5z1prjkeocdkinbp1be.jpg"
      },
      vikings: {
        name: "Vikings",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678638700/gh12jaqgjv3ei4mepb9t.jpg"
      },
      princessbride: {
        name: "The Princess Bride",
        img: "fdsfds.jpg"
      },
      banshees: {
        name: "Banshees of Inisherin",
        img: "fdsfds.jpg"
      },
      committments: {
        name: "The Committments",
        img: "fdsfds.jpg"
      }
    },

    placemarks: {
        _model: "Placemark",
        DarkHedges: {
          name: "Dark Hedges",
          lat: "55.1346929",
          lng: "-6.380822",
          area: "NI",
          img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678626259/gyvxy4qit3ifootcunoa.jpg",
          description: "The Stunning Bregagh Road, otherwise known as the Dark Hedges or King's Road in Game of Thrones is two rows of beechtrees that were planted in the 18th century by James Stuart, roughly 150+ beech trees where planted to line the entrance to his home - Gracehill House.",
          category: "->categorys.got",
          contributor: "->users.homer"
        },
        Dunluce: {
          name: "Dunluce Castle",
          lat: "55.206332508",
          lng: "-6.575331032",
          area: "NI",
          img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678548653/kigrcsxvzmhcxfpvj2cl.jpg",
          description: "Dunluce Castle, a place that really does look like something from a land that time forgot, was chosen to represent House of Greyjoy, the ruler of the Iron Islands in the show",
          category: "->categorys.got",
          contributor: "->users.homer"
        },
        TrimCastle: {
            name: "Trim Castle",
            lat: "53.5544",
            lng: "-6.7898",
            area: "RoI",
            description: "An epic and romantic fresco that marked the 1990s, Braveheart focuses on the trajectory of one of Scotland's greatest heroes. However, it is in Ireland that Mel Gibson mainly shot. Especially around and inside the castle of Trim, not far from Dublin.",
            category: "->categorys.braveheart",
            contributor: "->users.homer"
          }
      },
};