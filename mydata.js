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
            "imgSrc": "https://lastfm.freetls.fastly.net/i/u/770x0/df32e4ea7e82473a98ef107cd961ee6c.jpg",
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