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
        password: "$2a$10$C9GLCG/c9lR2iRrtkzrWV.sRafwKR8OdmEm0kEMKD3QbLT1yJkQkm"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "$2a$10$C9GLCG/c9lR2iRrtkzrWV.sRafwKR8OdmEm0kEMKD3QbLT1yJkQkm"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "$2a$10$C9GLCG/c9lR2iRrtkzrWV.sRafwKR8OdmEm0kEMKD3QbLT1yJkQkm"
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
       // userid: "->users.homer",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678637539/iyurw2pw1l9xlzupdec3.jpg"        
      },
      braveheart: {
        name: "Braveheart",
      //  userid: "->users.homer",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678638566/e5z1prjkeocdkinbp1be.jpg"
      },
      vikings: {
        name: "Vikings",
      //  userid: "->users.homer",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678638700/gh12jaqgjv3ei4mepb9t.jpg"
      },
      princessbride: {
        name: "The Princess Bride",
      //  userid: "->users.homer",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1678638813/uu0pprjhs7wqm4uxp4qd.jpg"
      },
      banshees: {
        name: "Banshees of Inisherin",
      //  userid: "->users.homer",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684062425/MM00314955_ksaahf.jpg"
      },
      committments: {
        name: "The Committments",
      //  userid: "->users.homer",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684062425/movieposter_evccll.jpg"
      },
      starwars: {
        name: "Star Wars",
      //  userid: "->users.homer",
        img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684062426/61HodaY_nsL._AC_SX522__h91lr9.jpg"
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
          img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684068642/download_f7peno.jpg",
          description: "An epic and romantic fresco that marked the 1990s, Braveheart focuses on the trajectory of one of Scotland's greatest heroes. However, it is in Ireland that Mel Gibson mainly shot. Especially around and inside the castle of Trim, not far from Dublin.",
          category: "->categorys.braveheart",
          contributor: "->users.homer"
          },
        SkelligMichael: {
          name: "Skellig Michael",
          lat: "51.7707",
          lng: "-10.5405",
          area: "RoI",
          img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684068642/cropped_Mark_Hamill_Daisy_Ridley_Star_Wars_The_Last_Jedi_Skellig_bceqg2.jpg",
          description: "Skellig Michael has risen to dramatic prominence due to its starring role as Luke Skywalker’s Island Sanctuary on the planet Ahch-To in both Star Wars Episode VII: The Force Awakens and Star Wars Episode VIII: The Last Jedi.",
          category: "->categorys.starwars",
          contributor: "->users.marge"
          },
        CliffsofMoher: {
          name: "Cliffs of Moher",
          lat: "52.9715",
          lng: "-9.4309",
          area: "RoI",
          img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684068642/PrincessBride_085Pyxurz_dpuksr.jpg",
          description: "The Princess Bride Cliffs of Insanity are real and they live right here in Ireland. The Cliffs of Moher is Ireland's 2nd biggest attraction.",
          category: "->categorys.princessbride",
          contributor: "->users.marge"
          },
        Achill: {
            name: "Achill Island",
            lat: "53.9620",
            lng: "-10.0153",
            area: "RoI",
            img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684068642/Banshees-Of-Inisherin-Keem-Bay_lhwze8.jpg",
            description: "Achill Island in County Mayo is the largest of the Irish isles, and acts as the setting for many of the movie’s dramatic scenes. The fictional pub, J.J. Devine Public House, was purposely built on location at Cloughmore on Achill Island.",
            category: "->categorys.banshees",
            contributor: "->users.marge"
          },
        Inishmore: {
            name: "Inishmore",
            lat: "53.1208",
            lng: "-9.7231",
            area: "RoI",
            img: "https://res.cloudinary.com/drnpyxlgc/image/upload/v1684068642/colin-donkey-cloughmore-800_r30lu7.jpg",
            description: "The movie was partially shot on Inis Mor, the biggest island of the Aran Islands. Pádraic (Colin Farrell) and Siobhán’s (Kerry Condon) house was built within Inis Mor, in an area called Gort Na gCapall. ",
            category: "->categorys.banshees",
            contributor: "->users.marge"
          },
        
        
      },
};