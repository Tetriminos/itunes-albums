const { mapAlbumData } = require('./mapAlbumData');
const {expect} = require('chai');
const {describe, it} = require('mocha');

describe('mapAlbumData', () => {
  it('should map the data correctly', () => {
    expect(mapAlbumData(inputData)).to.deep.equal(mappedData);
    expect(mapAlbumData({ feed: { entry: [] } })).to.deep.equal([]);
  });
  
  it('should not map the data if the data is malformed', () => {
    expect(() => mapAlbumData(null)).to.throw('No data');
    expect(() => mapAlbumData(undefined)).to.throw('No data');
    expect(() => mapAlbumData(malformedInputDataNoFeed)).to.throw('No feed data');
    expect(() => mapAlbumData(malformedInputDataNoEntries)).to.throw('No album entries in feed');
  });
});

const mappedData = [
  {
    "name": "On the Line",
    "images": {
      "small": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/54/40/a25440b9-109d-91de-4347-0d23b51163e5/093624901440.jpg/55x55bb-85.png",
      "medium": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/a2/54/40/a25440b9-109d-91de-4347-0d23b51163e5/093624901440.jpg/170x170bb-85.png"
  },
    "price": "$9.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/on-the-line/1449905465?uo=2",
    "artist": {"name": "Jenny Lewis", "url": "https://itunes.apple.com/us/artist/jenny-lewis/117038088?uo=2"},
    "category": "Alternative",
    "releaseDate": "2019-03-22T00:00:00-07:00"
  }, {
    "name": "My Finest Work Yet",
    "images": {
      "small": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/99/46/7e/99467ef4-659d-79ae-685c-a85f5dc2eead/00888072089846.rgb.jpg/55x55bb-85.png",
      "medium": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/99/46/7e/99467ef4-659d-79ae-685c-a85f5dc2eead/00888072089846.rgb.jpg/170x170bb-85.png"
  },
    "price": "$9.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/my-finest-work-yet/1449649405?uo=2",
    "artist": {"name": "Andrew Bird", "url": "https://itunes.apple.com/us/artist/andrew-bird/3883114?uo=2"},
    "category": "Alternative",
    "releaseDate": "2019-03-22T00:00:00-07:00"
  }, {
    "name": "Greatest Hits",
    "images": {
      "small": "https://is3-ssl.mzstatic.com/image/thumb/Music1/v4/08/b2/bb/08b2bbfa-cc60-9e73-da77-aeb45f0aef79/UMG_cvrart_00050087319175_01_RGB72_1500x1500_14DMGIM05636.jpg/55x55bb-85.png",
      "medium": "https://is5-ssl.mzstatic.com/image/thumb/Music1/v4/08/b2/bb/08b2bbfa-cc60-9e73-da77-aeb45f0aef79/UMG_cvrart_00050087319175_01_RGB72_1500x1500_14DMGIM05636.jpg/170x170bb-85.png"
  },
    "price": "$10.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/greatest-hits/932694528?uo=2",
    "artist": {"name": "Queen", "url": "https://itunes.apple.com/us/artist/queen/3296287?uo=2"},
    "category": "Rock",
    "releaseDate": "1981-10-26T00:00:00-07:00"
  }, {
    "name": "bublé! (Original Soundtrack from his NBC TV Special)",
    "images": {
      "small": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/e7/18/9b/e7189b23-1536-f759-62a2-5450eef2a8a9/093624900450.jpg/55x55bb-85.png",
      "medium": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e7/18/9b/e7189b23-1536-f759-62a2-5450eef2a8a9/093624900450.jpg/170x170bb-85.png"
  },
    "price": "$7.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/bubl%C3%A9-original-soundtrack-from-his-nbc-tv-special/1456202129?uo=2",
    "artist": {"name": "Michael Bublé", "url": "https://itunes.apple.com/us/artist/michael-bubl%C3%A9/799597?uo=2"},
    "category": "Soundtrack",
    "releaseDate": "2019-03-21T00:00:00-07:00"
  }, {
    "name": "Look Up Child",
    "images": {
      "small": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/55x55bb-85.png",
      "medium": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/170x170bb-85.png"
  },
    "price": "$7.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/look-up-child/1447184494?uo=2",
    "artist": {"name": "Lauren Daigle", "url": "https://itunes.apple.com/us/artist/lauren-daigle/722177758?uo=2"},
    "category": "Christian & Gospel",
    "releaseDate": "2018-09-07T00:00:00-07:00"
  }, {
    "name": "The Greatest Showman (Original Motion Picture Soundtrack)",
    "images": {
      "small": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/55x55bb-85.png",
      "medium": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/170x170bb-85.png"
  },
    "price": "$9.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2",
    "artist": {"name": "Various Artists", "url": null},
    "category": "Soundtrack",
    "releaseDate": "2017-12-08T00:00:00-07:00"
  }, {
    "name": "The Very Best of Fleetwood Mac (Remastered)",
    "images": {
      "small": "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/55x55bb-85.png",
      "medium": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/170x170bb-85.png"
  },
    "price": "$5.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/the-very-best-of-fleetwood-mac-remastered/593327799?uo=2",
    "artist": {"name": "Fleetwood Mac", "url": "https://itunes.apple.com/us/artist/fleetwood-mac/158038?uo=2"},
    "category": "Rock",
    "releaseDate": "2002-10-15T00:00:00-07:00"
  }, {
    "name": "The Very Best of Chicago: Only the Beginning",
    "images": {
      "small": "https://is4-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/55x55bb-85.png",
      "medium": "https://is4-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/170x170bb-85.png"
  },
    "price": "$5.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/the-very-best-of-chicago-only-the-beginning/28457957?uo=2",
    "artist": {"name": "Chicago", "url": "https://itunes.apple.com/us/artist/chicago/197043?uo=2"},
    "category": "Rock",
    "releaseDate": "2002-07-02T00:00:00-07:00"
  }, {
    "name": "The Platinum Collection (Greatest Hits I, II & III)",
    "images": {
      "small": "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/db/a3/9a/dba39a3c-03fc-94a4-8f94-a8a69d9cdf5c/UMG_cvrart_00050087319090_01_RGB72_1500x1500_14DMGIM05632.jpg/55x55bb-85.png",
      "medium": "https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/db/a3/9a/dba39a3c-03fc-94a4-8f94-a8a69d9cdf5c/UMG_cvrart_00050087319090_01_RGB72_1500x1500_14DMGIM05632.jpg/170x170bb-85.png"
  },
    "price": "$24.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/932648190?uo=2",
    "artist": {"name": "Queen", "url": "https://itunes.apple.com/us/artist/queen/3296287?uo=2"},
    "category": "Rock",
    "releaseDate": "2000-11-13T00:00:00-07:00"
  }, {
    "name": "Greatest Hits",
    "images": {
      "small": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/54/26/9e/54269e7a-8405-48c9-a06d-ed2449ad8eb6/0884977417814.png/55x55bb-85.png",
      "medium": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/54/26/9e/54269e7a-8405-48c9-a06d-ed2449ad8eb6/0884977417814.png/170x170bb-85.png"
  },
    "price": "$9.99",
    "iTunesUrl": "https://itunes.apple.com/us/album/greatest-hits/1242681054?uo=2",
    "artist": {"name": "Mötley Crüe", "url": "https://itunes.apple.com/us/artist/m%C3%B6tley-cr%C3%BCe/284113?uo=2"},
    "category": "Rock",
    "releaseDate": "2009-11-17T00:00:00-07:00"
  }
];

const malformedInputDataNoFeed = {
  fred: {
  
  }
};

const malformedInputDataNoEntries = {
  feed: {
    entri: []
  }
};

const inputData = {
  "feed": {
    "author": {
      "name": {
        "label": "iTunes Store"
      },
      "uri": {
        "label": "http://www.apple.com/itunes/"
      }
    },
    "entry": [
      {
        "im:name": {
          "label": "On the Line"
        },
        "im:image": [
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/54/40/a25440b9-109d-91de-4347-0d23b51163e5/093624901440.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/a2/54/40/a25440b9-109d-91de-4347-0d23b51163e5/093624901440.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/a2/54/40/a25440b9-109d-91de-4347-0d23b51163e5/093624901440.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Warner Bros. Records Inc. for the U.S. and WEA International Inc. for the world outside the U.S."
        },
        "title": {
          "label": "On the Line - Jenny Lewis"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/on-the-line/1449905465?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/on-the-line/1449905465?uo=2",
          "attributes": {
            "im:id": "1449905465"
          }
        },
        "im:artist": {
          "label": "Jenny Lewis",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/jenny-lewis/117038088?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://itunes.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2019-03-22T00:00:00-07:00",
          "attributes": {
            "label": "March 22, 2019"
          }
        }
      },
      {
        "im:name": {
          "label": "My Finest Work Yet"
        },
        "im:image": [
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/99/46/7e/99467ef4-659d-79ae-685c-a85f5dc2eead/00888072089846.rgb.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/99/46/7e/99467ef4-659d-79ae-685c-a85f5dc2eead/00888072089846.rgb.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/99/46/7e/99467ef4-659d-79ae-685c-a85f5dc2eead/00888072089846.rgb.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "10"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Wegawam Music Co., Under exclusive license to Loma Vista Recordings. Distributed by Concord Music Group, Inc."
        },
        "title": {
          "label": "My Finest Work Yet - Andrew Bird"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/my-finest-work-yet/1449649405?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/my-finest-work-yet/1449649405?uo=2",
          "attributes": {
            "im:id": "1449649405"
          }
        },
        "im:artist": {
          "label": "Andrew Bird",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/andrew-bird/3883114?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "20",
            "term": "Alternative",
            "scheme": "https://itunes.apple.com/us/genre/music-alternative/id20?uo=2",
            "label": "Alternative"
          }
        },
        "im:releaseDate": {
          "label": "2019-03-22T00:00:00-07:00",
          "attributes": {
            "label": "March 22, 2019"
          }
        }
      },
      {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [
          {
            "label": "https://is3-ssl.mzstatic.com/image/thumb/Music1/v4/08/b2/bb/08b2bbfa-cc60-9e73-da77-aeb45f0aef79/UMG_cvrart_00050087319175_01_RGB72_1500x1500_14DMGIM05636.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Music1/v4/08/b2/bb/08b2bbfa-cc60-9e73-da77-aeb45f0aef79/UMG_cvrart_00050087319175_01_RGB72_1500x1500_14DMGIM05636.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music1/v4/08/b2/bb/08b2bbfa-cc60-9e73-da77-aeb45f0aef79/UMG_cvrart_00050087319175_01_RGB72_1500x1500_14DMGIM05636.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "17"
        },
        "im:price": {
          "label": "$10.99",
          "attributes": {
            "amount": "10.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2014 Hollywood Records, Inc."
        },
        "title": {
          "label": "Greatest Hits - Queen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/greatest-hits/932694528?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/greatest-hits/932694528?uo=2",
          "attributes": {
            "im:id": "932694528"
          }
        },
        "im:artist": {
          "label": "Queen",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/queen/3296287?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://itunes.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "1981-10-26T00:00:00-07:00",
          "attributes": {
            "label": "October 26, 1981"
          }
        }
      },
      {
        "im:name": {
          "label": "bublé! (Original Soundtrack from his NBC TV Special)"
        },
        "im:image": [
          {
            "label": "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/e7/18/9b/e7189b23-1536-f759-62a2-5450eef2a8a9/093624900450.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/e7/18/9b/e7189b23-1536-f759-62a2-5450eef2a8a9/093624900450.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e7/18/9b/e7189b23-1536-f759-62a2-5450eef2a8a9/093624900450.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "9"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2019 Reprise Records."
        },
        "title": {
          "label": "bublé! (Original Soundtrack from his NBC TV Special) - Michael Bublé"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/bubl%C3%A9-original-soundtrack-from-his-nbc-tv-special/1456202129?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/bubl%C3%A9-original-soundtrack-from-his-nbc-tv-special/1456202129?uo=2",
          "attributes": {
            "im:id": "1456202129"
          }
        },
        "im:artist": {
          "label": "Michael Bublé",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/michael-bubl%C3%A9/799597?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://itunes.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2019-03-21T00:00:00-07:00",
          "attributes": {
            "label": "March 21, 2019"
          }
        }
      },
      {
        "im:name": {
          "label": "Look Up Child"
        },
        "im:image": [
          {
            "label": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/ac/3a/5d/ac3a5d41-5bce-4ec2-b795-51d1436c88b4/829619167054.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "13"
        },
        "im:price": {
          "label": "$7.99",
          "attributes": {
            "amount": "7.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2018 Centricity Music, exclusively Marketed & Distributed by 12Tone Music, LLC. All rights reserved."
        },
        "title": {
          "label": "Look Up Child - Lauren Daigle"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/look-up-child/1447184494?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/look-up-child/1447184494?uo=2",
          "attributes": {
            "im:id": "1447184494"
          }
        },
        "im:artist": {
          "label": "Lauren Daigle",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/lauren-daigle/722177758?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "22",
            "term": "Christian & Gospel",
            "scheme": "https://itunes.apple.com/us/genre/music-christian-gospel/id22?uo=2",
            "label": "Christian & Gospel"
          }
        },
        "im:releaseDate": {
          "label": "2018-09-07T00:00:00-07:00",
          "attributes": {
            "label": "September 7, 2018"
          }
        }
      },
      {
        "im:name": {
          "label": "The Greatest Showman (Original Motion Picture Soundtrack)"
        },
        "im:image": [
          {
            "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/c1/7b/a9/c17ba975-34aa-ee68-d3c9-e1db840fa06b/075679886613.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "11"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2017 This compilation Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States. Motion Picture Artwork, Photos, and Fox Trademarks and Logos TM and © 2017 Twentieth Century Fox Film Corporation."
        },
        "title": {
          "label": "The Greatest Showman (Original Motion Picture Soundtrack) - Various Artists"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/the-greatest-showman-original-motion-picture-soundtrack/1299856714?uo=2",
          "attributes": {
            "im:id": "1299856714"
          }
        },
        "im:artist": {
          "label": "Various Artists"
        },
        "category": {
          "attributes": {
            "im:id": "16",
            "term": "Soundtrack",
            "scheme": "https://itunes.apple.com/us/genre/music-soundtrack/id16?uo=2",
            "label": "Soundtrack"
          }
        },
        "im:releaseDate": {
          "label": "2017-12-08T00:00:00-07:00",
          "attributes": {
            "label": "December 8, 2017"
          }
        }
      },
      {
        "im:name": {
          "label": "The Very Best of Fleetwood Mac (Remastered)"
        },
        "im:image": [
          {
            "label": "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/80/e5/bf/80e5bf94-5bf6-f1f5-11a6-46afbe76c85a/603497925599.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "36"
        },
        "im:price": {
          "label": "$5.99",
          "attributes": {
            "amount": "5.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 1975 Warner Bros Records for the United States and WEA International Inc. for the world outside of the United States."
        },
        "title": {
          "label": "The Very Best of Fleetwood Mac (Remastered) - Fleetwood Mac"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/the-very-best-of-fleetwood-mac-remastered/593327799?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/the-very-best-of-fleetwood-mac-remastered/593327799?uo=2",
          "attributes": {
            "im:id": "593327799"
          }
        },
        "im:artist": {
          "label": "Fleetwood Mac",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/fleetwood-mac/158038?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://itunes.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2002-10-15T00:00:00-07:00",
          "attributes": {
            "label": "October 15, 2002"
          }
        }
      },
      {
        "im:name": {
          "label": "The Very Best of Chicago: Only the Beginning"
        },
        "im:image": [
          {
            "label": "https://is4-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is4-ssl.mzstatic.com/image/thumb/Features/v4/2c/fa/2a/2cfa2ac6-40d7-39d4-3c28-c848129dcbbd/dj.gubbyqzi.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "39"
        },
        "im:price": {
          "label": "$5.99",
          "attributes": {
            "amount": "5.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2004 Warner Strategic Marketing"
        },
        "title": {
          "label": "The Very Best of Chicago: Only the Beginning - Chicago"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/the-very-best-of-chicago-only-the-beginning/28457957?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/the-very-best-of-chicago-only-the-beginning/28457957?uo=2",
          "attributes": {
            "im:id": "28457957"
          }
        },
        "im:artist": {
          "label": "Chicago",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/chicago/197043?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://itunes.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2002-07-02T00:00:00-07:00",
          "attributes": {
            "label": "July 2, 2002"
          }
        }
      },
      {
        "im:name": {
          "label": "The Platinum Collection (Greatest Hits I, II & III)"
        },
        "im:image": [
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/db/a3/9a/dba39a3c-03fc-94a4-8f94-a8a69d9cdf5c/UMG_cvrart_00050087319090_01_RGB72_1500x1500_14DMGIM05632.jpg/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is2-ssl.mzstatic.com/image/thumb/Music3/v4/db/a3/9a/dba39a3c-03fc-94a4-8f94-a8a69d9cdf5c/UMG_cvrart_00050087319090_01_RGB72_1500x1500_14DMGIM05632.jpg/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/db/a3/9a/dba39a3c-03fc-94a4-8f94-a8a69d9cdf5c/UMG_cvrart_00050087319090_01_RGB72_1500x1500_14DMGIM05632.jpg/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "51"
        },
        "im:price": {
          "label": "$24.99",
          "attributes": {
            "amount": "24.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2014 Hollywood Records, Inc."
        },
        "title": {
          "label": "The Platinum Collection (Greatest Hits I, II & III) - Queen"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/932648190?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/the-platinum-collection-greatest-hits-i-ii-iii/932648190?uo=2",
          "attributes": {
            "im:id": "932648190"
          }
        },
        "im:artist": {
          "label": "Queen",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/queen/3296287?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://itunes.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2000-11-13T00:00:00-07:00",
          "attributes": {
            "label": "November 13, 2000"
          }
        }
      },
      {
        "im:name": {
          "label": "Greatest Hits"
        },
        "im:image": [
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/54/26/9e/54269e7a-8405-48c9-a06d-ed2449ad8eb6/0884977417814.png/55x55bb-85.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/54/26/9e/54269e7a-8405-48c9-a06d-ed2449ad8eb6/0884977417814.png/60x60bb-85.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/54/26/9e/54269e7a-8405-48c9-a06d-ed2449ad8eb6/0884977417814.png/170x170bb-85.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "im:itemCount": {
          "label": "19"
        },
        "im:price": {
          "label": "$9.99",
          "attributes": {
            "amount": "9.99000",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "im:contentType": {
            "attributes": {
              "term": "Album",
              "label": "Album"
            }
          },
          "attributes": {
            "term": "Music",
            "label": "Music"
          }
        },
        "rights": {
          "label": "℗ 2009 Masters 2000, Inc."
        },
        "title": {
          "label": "Greatest Hits - Mötley Crüe"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://itunes.apple.com/us/album/greatest-hits/1242681054?uo=2"
          }
        },
        "id": {
          "label": "https://itunes.apple.com/us/album/greatest-hits/1242681054?uo=2",
          "attributes": {
            "im:id": "1242681054"
          }
        },
        "im:artist": {
          "label": "Mötley Crüe",
          "attributes": {
            "href": "https://itunes.apple.com/us/artist/m%C3%B6tley-cr%C3%BCe/284113?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "21",
            "term": "Rock",
            "scheme": "https://itunes.apple.com/us/genre/music-rock/id21?uo=2",
            "label": "Rock"
          }
        },
        "im:releaseDate": {
          "label": "2009-11-17T00:00:00-07:00",
          "attributes": {
            "label": "November 17, 2009"
          }
        }
      }
    ],
    "updated": {
      "label": "2019-03-23T00:41:06-07:00"
    },
    "rights": {
      "label": "Copyright 2008 Apple Inc."
    },
    "title": {
      "label": "iTunes Store: Top Albums"
    },
    "icon": {
      "label": "http://itunes.apple.com/favicon.ico"
    },
    "link": [
      {
        "attributes": {
          "rel": "alternate",
          "type": "text/html",
          "href": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=11"
        }
      },
      {
        "attributes": {
          "rel": "self",
          "href": "https://itunes.apple.com/us/rss/topalbums/limit=10/json"
        }
      }
    ],
    "id": {
      "label": "https://itunes.apple.com/us/rss/topalbums/limit=10/json"
    }
  }
};