var albums = [
        {
            "imgSrc": "https://media.pitchfork.com/photos/5929a402c0084474cd0c03d4/1:1/w_600/1885fae5.jpg",
            "spotify": "spotify:album:2sfLsbSsDm780Llr9NWHQz",
            "title": "Transatlanticism",
            "artist": "Death Cab for Cutie",
            "year": "2003",
            "genre": "indie rock"
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
            "spotify": "",
            "title": "A Rush Of Blood To The Head",
            "artist": "Coldplay",
            "year": "2002",
            "genre": "alternative rock"
        },
        {
            "imgSrc": "data:image/jpeg;base64,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",
            "spotify": "",
            "title": "Parachutes",
            "artist": "Coldplay",
            "year": "2000",
            "genre": "alternative rock"
        }
    ]

    window.albums = albums;