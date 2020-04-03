var albums = [
        {
            "imgSrc": "https://media.pitchfork.com/photos/5929a402c0084474cd0c03d4/1:1/w_600/1885fae5.jpg",
            "spotify": "spotify:album:2sfLsbSsDm780Llr9NWHQz",
            "title": "Transatlanticism",
            "artist": "Death Cab for Cutie",
            "year": "2003",
            "genre": "indie rock",
        },
        {
            "imgSrc": "https://media.pitchfork.com/photos/5929b2fe9d034d5c69bf4c59/1:1/w_600/7055fb4d.jpg",
            "spotify": "spotify:album:7eyQXxuf2nGj9d2367Gi5f",
            "title": "In Rainbows",
            "artist": "Radiohead",
            "year": "2007",
            "genre": "experimental rock"
        },
        {
            "imgSrc": "https://m.media-amazon.com/images/I/71SJ7yja-VL._SS500_.jpg",
            "spotify": "spotify:album:3cTgMg4hxwFyUuJlcB2cS2",
            "title": "We Have the Facts and We're Voting Yes",
            "artist": "Death Cab for Cutie",
            "year": "2000",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/9/9e/Iron_%26_Wine_-_Our_Endless_Numbered_Days.jpg",
            "spotify": "spotify:album:40bJA5hz3vopupCqHK7fJ3",
            "title": "Our Endless Numbered Days",
            "artist": "Iron & Wine",
            "year": "2003",
            "genre": "indie folk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/6/6e/Coldplay_-_A_Rush_of_Blood_to_the_Head.jpg",
            "spotify": "spotify:album:0RHX9XECH8IVI3LNgWDpmQ",
            "title": "A Rush Of Blood To The Head",
            "artist": "Coldplay",
            "year": "2002",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "data:image/jpeg;base64,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",
            "spotify": "spotify:album:6ZG5lRT77aJ3btmArcykra",
            "title": "Parachutes",
            "artist": "Coldplay",
            "year": "2000",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "data:image/jpeg;base64,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",
            "spotify": "spotify:album:6ZB8qaR9JNuS0Q0bG1nbcH",
            "title": "Funeral",
            "artist": "Arcade Fire",
            "year": "2000",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/b/b4/Ben_Howard_%E2%80%93_I_Forget_Where_We_Were.jpg",
            "spotify": "spotify:album:4WI3oFEsDiHU3I5xHz88sF",
            "title": "I Forget Where We Were",
            "artist": "Ben Howard",
            "year": "2014",
            "genre": "indie folk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/4/4b/AngusAndJuliaStone2014Album.jpg",
            "spotify": "spotify:album:2nYlRh1kWV2oAmjwgk9Il2",
            "title": "Angus & Julia Stone",
            "artist": "Angus & Julia Stone",
            "year": "2014",
            "genre": "indie folk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/6/6f/SnowAngusAndJuliaStone.png",
            "spotify": "spotify:album:3k3EvBHWTu3VkyAh5Pevv9",
            "title": "SNOW",
            "artist": "Angus & Julia Stone",
            "year": "2017",
            "genre": "indie folk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/2/20/Arcticmonkeys-humbug.jpg",
            "spotify": "spotify:album:5IEoiwkThhRmSMBANhpxl2",
            "title": "Humbug",
            "artist": "Arctic Monkeys",
            "year": "2009",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png",
            "spotify": "spotify:album:78bpIziExqiI9qztvNFlQu",
            "title": "AM",
            "artist": "Arctic Monkeys",
            "year": "2013",
            "genre": "indie rock"
        }
        ,
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/5/5f/Whatever_People_Say_I_Am%2C_That%27s_What_I%27m_Not.jpg",
            "spotify": "spotify:album:50Zz8CkIhATKUlQMbHO3k1",
            "title": "Whatever People Say I Am, That's What I'm Not",
            "artist": "Arctic Monkeys",
            "year": "2006",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/d/d3/The_Balcony_Catfish_and_the_Bottlemen.jpg",
            "spotify": "spotify:album:0C0OFASoQC57yC12vQhCwN",
            "title": "The Balcony",
            "artist": "Catfish & The Bottlemen",
            "year": "2014",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/a/a7/Youth_Is_Only_Ever_Fun_in_Retrospect.jpg",
            "spotify": "spotify:album:3Hua29YXoJu25qVEhmssFb",
            "title": "Youth Is Only Ever Fun In Retrospect",
            "artist": "Sundara Karma",
            "year": "2017",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/2/25/Turnover_-_Peripheral_Vision.jpg",
            "spotify": "spotify:album:0KruT6dkmYULduBmT23Svn",
            "title": "Peripheral Vision",
            "artist": "Turnover",
            "year": "2015",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://images-na.ssl-images-amazon.com/images/I/81qABwLq4zL._SL1500_.jpg",
            "spotify": "spotify:album:5xFZ4iElFbUFtOGX4lvdTM",
            "title": "Come Around Sundown",
            "artist": "Kings of Leon",
            "year": "2010",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/b/b0/KOLMB.jpg",
            "spotify": "spotify:album:0cRJKK0y1sfZEqWub4dK9v",
            "title": "Mechanical Bull",
            "artist": "Kings of Leon",
            "year": "2013",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/c/c1/KingsOfLeon-OnlyByTheNightCover.png",
            "spotify": "spotify:album:5CZR6ljD0x9fTiS4mh9wMp",
            "title": "Only By The Night",
            "artist": "Kings of Leon",
            "year": "2008",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/e/e6/American_football_band_lp_cover.png",
            "spotify": "spotify:album:3wRBlpk5PRoixwOnLujTal",
            "title": "American Football",
            "artist": "American Football",
            "year": "2011",
            "genre": "emo"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/The_king_of_limbs.jpg/220px-The_king_of_limbs.jpg",
            "spotify": "spotify:album:1DBkJIEoeHrTX4WCBQGcCi",
            "title": "The King Of Limbs",
            "artist": "Radiohead",
            "year": "2011",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/d/d6/The_xx_-_Coexist.png",
            "spotify": "spotify:album:2cRMVS71c49Pf5SnIlJX3U",
            "title": "Coexist",
            "artist": "The XX",
            "year": "2012",
            "genre": "indie pop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/e/e8/Ifyouleavedaughter.jpg",
            "spotify": "spotify:album:6E76aabodIl5DW5BTEZPHG",
            "title": "If You Leave",
            "artist": "Daughter",
            "year": "2013",
            "genre": "indie folk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/4/42/What_went_down_cover.jpg",
            "spotify": "spotify:album:4uIDigk79DeZEYV6Z5Yf4s",
            "title": "What Went Down",
            "artist": "Foals",
            "year": "2015",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/8/85/Holy_Fire_Foals.jpg",
            "spotify": "spotify:album:0PIR7PK8DMB4pgoxq7F9Ad",
            "title": "Holy Fire",
            "artist": "Foals",
            "year": "2013",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/0/00/Silentalarmcover.jpg",
            "spotify": "spotify:album:1VpqO2dBJdAS3YAimXlhEM",
            "title": "Silent Alarm",
            "artist": "Bloc Party",
            "year": "2005",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/8/8c/A_Weekend_in_the_City.jpg",
            "spotify": "spotify:album:5PkAUwhhB5YGgwnvhy4AC7",
            "title": "A Weekend In The City",
            "artist": "Bloc Party",
            "year": "2007",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/f/f8/Harmlessness_Cover.jpg",
            "spotify": "spotify:album:6yJAGomK5rv3uAqJMw5d9n",
            "title": "Harmlessness",
            "artist": "The World Is A Beautiful Place And I Am No Longer Afraid To Die",
            "year": "2015",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
            "spotify": "spotify:album:623Ef2ZEB3Njklix4PC0Rs",
            "title": "channel ORANGE",
            "artist": "Frank Ocean",
            "year": "2012",
            "genre": "alternative R&B"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
            "spotify": "spotify:album:3mH6qwIy9crq0I9YQbOuDf",
            "title": "Blonde",
            "artist": "Frank Ocean",
            "year": "2016",
            "genre": "alternative R&B"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/7/7f/Assume_Form.jpg",
            "spotify": "spotify:album:3VpbXPsAOhcp3duHhkye8g",
            "title": "Assume Form",
            "artist": "James Blake",
            "year": "2019",
            "genre": "pop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/8/8a/Lana_Del_Rey_-_Norman_Fucking_Rockwell.png",
            "spotify": "spotify:album:5XpEKORZ4y6OrCZSKsi46A",
            "title": "Normal Fucking Rockwell",
            "artist": "Lana Del Rey",
            "year": "2019",
            "genre": "pop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png",
            "spotify": "spotify:track:1wYDu4f5nfxwCnio99I47J",
            "title": "Born To Die",
            "artist": "Lana Del Rey",
            "year": "2012",
            "genre": "pop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/5/57/Trouble_Will_Find_Me.jpg",
            "spotify": "spotify:album:2JhR4tjuc3MIKa8v2JaKze",
            "title": "Trouble Will Find Me",
            "artist": "The National",
            "year": "2013",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/0/08/Highviolet.jpg",
            "spotify": "spotify:album:36VJqCEgUg3nj0Eyxtc1av",
            "title": "High Violet",
            "artist": "The National",
            "year": "2010",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/b/b0/Sleep_Well_Beast.jpg",
            "spotify": "spotify:album:6zG9PHw8dlMLIyRE9TEGGk",
            "title": "Sleep Well Beast",
            "artist": "The National",
            "year": "2017",
            "genre": "indie rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/2/2b/TheCureWish.jpg",
            "spotify": "spotify:album:0aEL0zQ4XLuxQP0j7sLlS1",
            "title": "Wish",
            "artist": "The Cure",
            "year": "1992",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/6/68/The_Cure_-_Bloodflowers.jpg",
            "spotify": "spotify:album:5HJmojoRWpw0GYiRjdLT6B",
            "title": "Bloodflowers",
            "artist": "The Cure",
            "year": "1992",
            "genre": "2000"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/8/84/NothingButThievesAlbum.jps.jpg",
            "spotify": "spotify:album:3q4BkDV5B7sczFcfrIl2a2",
            "title": "Nothing But Thieves",
            "artist": "Nothing But Thieves",
            "year": "2015",
            "genre": "2015"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/0/03/The_1975_%28album%29_by_The_1975.png",
            "spotify": "spotify:album:6Z1zv6Hw9bdvSoxI5uYk2h",
            "title": "The 1975",
            "artist": "The 1975",
            "year": "2013",
            "genre": "synthpop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/2/29/Angus_%26_Julia_Stone_-_Down_the_Way_-_Album_cover.jpg",
            "spotify": "spotify:album:5W1E1tqlKUl7p6KuyCAhji",
            "title": "Down The Way",
            "artist": "Angus & Julia Stone",
            "year": "2010",
            "genre": "folk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/2/28/Paramore_-_Riot%21.png",
            "spotify": "spotify:album:3UoOO8m0oxxvUHXUKf3qcZ",
            "title": "Riot",
            "artist": "Paramore",
            "year": "2007",
            "genre": "pop punk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/7/7d/Brand_New_Eyes_cover.jpg",
            "spotify": "spotify:album:3CaQTJU2Cpx7GXTgenmb2r",
            "title": "Brand New Eyes",
            "artist": "Paramore",
            "year": "2009",
            "genre": "pop punk"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
            "spotify": "spotify:album:5OZJflQcQCdZLQjtUudCin",
            "title": "BADLANDS",
            "artist": "Halsey",
            "year": "2015",
            "genre": "dark pop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/3/38/Troye_Sivan_-_Blue_Neighbourhood.png",
            "spotify": "spotify:album:2mRBvhDWqm8Fj2U0F6mMY4",
            "title": "Blue Neighbourhood",
            "artist": "Troye Sivan",
            "year": "2015",
            "genre": "indie pop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
            "spotify": "spotify:album:2UJcKiJxNryhL050F5Z1Fk",
            "title": "Nevermind",
            "artist": "Nirvana",
            "year": "1991",
            "genre": "grunge"
        },
        {
            "imgSrc": "https://images.genius.com/15ed4279858b450ad41fe7fbd1722c08.700x700x1.jpg",
            "spotify": "spotify:album:2yAyZp16EbanQ9pBwQs70x",
            "title": "A Different Age",
            "artist": "Current Joys",
            "year": "2018",
            "genre": ""
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/a/ab/Where_Polly_People_Go_to_Read_Gus_Dapperton.jpg",
            "spotify": "spotify:album:4qSYIc2q02zeCN2fB2hBBR",
            "title": "Where Polly People Go To Read",
            "artist": "Gus Dapperton",
            "year": "2019",
            "genre": "indie pop"
        },
        {
            "imgSrc": "https://images.genius.com/46dc54b6fe012dc034bbbd430090e3e4.1000x1000x1.jpg",
            "spotify": "spotify:album:4yEyNFafoAX2uKKs4WOmNo",
            "title": "You Think You're A Comic!",
            "artist": "Gus Dapperton",
            "year": "2018",
            "genre": "indie pop"
        },
        {
            "imgSrc": "https://upload.wikimedia.org/wikipedia/en/f/f3/Mumfordsonssighnomore.jpg",
            "spotify": "spotify:album:3znLFUETgB3dVfFdBwKHqh",
            "title": "Sigh No More",
            "artist": "Mumford & Sons",
            "year": "2010",
            "genre": "indie folk"
        },
        {
            "imgSrc": "https://m.media-amazon.com/images/I/91Ux0EO2iRL._SS500_.jpg",
            "spotify": "spotify:album:0jcOOqw8oVjs2ngnrndbsO",
            "title": "Babel",
            "artist": "Mumford & Sons",
            "year": "2012",
            "genre": "indie folk"
        }
    ]

    window.albums = albums;