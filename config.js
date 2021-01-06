const config = {
    maintenance: false,
    name: "Polyoid",
    motto: "The best sandbox Game!",
    social_media:{
        twitter:"https://github.com/TENEIDAE/Sandbox-Template",
        discord:"https://discord.gg/j6qtNnyXnw",
        guilded:"#",
        youtube:"https://www.youtube.com/channel/UCr2NV-b2pmMg4OUtYQFj4Kw",
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
        membershipName: "Overclocked", // Membership name

    },
    bootsrapTheme: "flatly", // https://bootswatch.com/

    site_icon: "",

    jwt_Key: "", // Write random crap here and then encrypt it on this website https://bcrypt-generator.com/, after that paste what you got here.
    jwt_Key2: "", // Write random crap here and then encrypt it on this website https://bcrypt-generator.com/, after that paste what you got here.



}
module.exports = config;
