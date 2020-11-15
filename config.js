const config = {
    name: "Test name",
    motto: "Motto!",
    social_media:{
        twitter:"",
        discord:"",
        guilded:"",
        youtube:"",
    },
    forums:{
        postRate: 1, // one post every 15 seconds

        categories:{
            General:{
                name: "General",
                desc: "Just a general place",
            },
            OffTopic:{
                name: "Off Topic",
                desc: "Just off place",
            },
            Market:{
                name: "Marketplace",
                desc: "WHAT?! IS THAT BIG CHUNGUS?!",
            },
            Poggers:{
                name: "this is pog",
                desc: "how",
            },

           
            ///////////////////
            
            ////////////////////////////
        }

    },
    avatar:{
        type: "roundy"
    },

    currency: {
        currency: "Vloxys",
        currencyIcon: "link",
        starterCurrency: 10, // Starter Currency

    },
    memberShip:{
        memberShipExtraCurrency: 100, // Money per day for plus
        noMembershipExtraCurrency: 20, // Money per day for no plus
        membershipName: "Plus", // Membership name

    },
    bootsrapTheme: "flatly", // https://bootswatch.com/

    site_icon: "",

    jwt_Key: "", // Write random crap here and then encrypt it on this website https://bcrypt-generator.com/, after that paste what you got here.
    jwt_Key2: "", // Write random crap here and then encrypt it on this website https://bcrypt-generator.com/, after that paste what you got here.



}
module.exports = config;