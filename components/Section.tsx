import { useStore, useAsync, If } from 'ax-react-lib';
import { useEffect, useState } from 'react';
import styles from '../styles/Section.module.css';
const mockup = {
    "kind": "youtube#searchListResponse",
    "etag": "jsaV0bm0f_jovjEJms5ad0W7U7Q",
    "nextPageToken": "CB4QAA",
    "regionCode": "US",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 30
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "1gEcumTzT194RcUopUvCkyIaZvM",
            "id": {
                "kind": "youtube#video",
                "videoId": "cE6wxDqdOV0"
            },
            "snippet": {
                "publishedAt": "2011-10-16T08:00:00Z",
                "channelId": "UC3N5y6UWKJaKqoU2b_0MfTQ",
                "title": "Lana Del Rey - Video Games",
                "description": "Lana Del Rey - Video Games (Official Music Video) Sign up for updates: http://smarturl.it/LanaDelRey.News Follow Lana Del Rey: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/cE6wxDqdOV0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/cE6wxDqdOV0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/cE6wxDqdOV0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "LanaDelReyVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2011-10-16T08:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1qhGxoDO7fbzO-9w6SZRQXwCtnM",
            "id": {
                "kind": "youtube#video",
                "videoId": "2_9WeZhp-KQ"
            },
            "snippet": {
                "publishedAt": "2012-02-11T13:30:27Z",
                "channelId": "UCdUDwzCX1oIHY9Yg5M_OmKg",
                "title": "Lana Del Rey ~ Video Games (Lyrics)",
                "description": "I DO NOT OWN THIS MUSIC, ALL RIGHTS GO TO LANA DEL REY** Hi guys, je voulais préciser que je suis française & que ma chaîne sera une série de ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2_9WeZhp-KQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2_9WeZhp-KQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2_9WeZhp-KQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "SongsAndC0",
                "liveBroadcastContent": "none",
                "publishTime": "2012-02-11T13:30:27Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1oCcXZteM97avLu2xrtkO4T-8hY",
            "id": {
                "kind": "youtube#video",
                "videoId": "o9kr9ZhydK0"
            },
            "snippet": {
                "publishedAt": "2014-05-07T02:42:24Z",
                "channelId": "UC6nvd0h78lplxcaNedHHGHw",
                "title": "The Amazing Spider-Man 2 Video Game - TASM2 suit free roam",
                "description": "Free roam gameplay of The Amazing Spider-Man 2 (2014) suit in The Amazing Spider-Man 2 Video Game, you unlock this suit automatically. My Twitter: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/o9kr9ZhydK0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/o9kr9ZhydK0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/o9kr9ZhydK0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "GameUnboxingReviews",
                "liveBroadcastContent": "none",
                "publishTime": "2014-05-07T02:42:24Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "nPGlQTixwPTb_btMDZhOh5Zh93A",
            "id": {
                "kind": "youtube#video",
                "videoId": "3fCdZzsP4U0"
            },
            "snippet": {
                "publishedAt": "2020-08-13T13:00:11Z",
                "channelId": "UCMi8tQF_L7rd6YcmSt7MXrQ",
                "title": "Sufjan Stevens - Video Game [Official Music Video - feat. Jalaiah]",
                "description": "Credits: Director Nicole Ginelli Starring Jalaiah Harmon Director of Photography Angelica Perez-Castro Assistant Camera Aimée Schroeppel Casey 2nd ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/3fCdZzsP4U0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/3fCdZzsP4U0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/3fCdZzsP4U0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sufjan Stevens",
                "liveBroadcastContent": "none",
                "publishTime": "2020-08-13T13:00:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qYEfEdi455ml45sHUadDdYcz6Fk",
            "id": {
                "kind": "youtube#video",
                "videoId": "WpBSr-cDn7A"
            },
            "snippet": {
                "publishedAt": "2020-09-23T03:28:57Z",
                "channelId": "UCAJUA8jHgKMWzfRBd53mWoA",
                "title": "Optimus Prime Multiple Transformation Jet Robot Car Game 2020 - Android Gameplay",
                "description": "Play the ultimate robot fighting game enclosing the transforming robot police car wars and the grand robotic battle of mech air-jet warriors in the best robot ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/WpBSr-cDn7A/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/WpBSr-cDn7A/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/WpBSr-cDn7A/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "DroidGameplaysTV",
                "liveBroadcastContent": "none",
                "publishTime": "2020-09-23T03:28:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "q8XpTF-klUJnENsNJVMw7oZhNAo",
            "id": {
                "kind": "youtube#video",
                "videoId": "XJawfE8eAew"
            },
            "snippet": {
                "publishedAt": "2017-06-30T23:07:27Z",
                "channelId": "UCex83nRMBJRBx8pHLx0jntA",
                "title": "MattyBRaps - Video Game (ft Ivey Meeks x JB) Official Music Video",
                "description": "\"Video Game\" Official Music Video by MattyBRaps featuring Ivey & JB! iTunes: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XJawfE8eAew/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XJawfE8eAew/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XJawfE8eAew/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "funniflix",
                "liveBroadcastContent": "none",
                "publishTime": "2017-06-30T23:07:27Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "301rK5cyPxU9GC1WT58O8CjkhEY",
            "id": {
                "kind": "youtube#video",
                "videoId": "nofmoT-0R_0"
            },
            "snippet": {
                "publishedAt": "2020-12-22T21:00:27Z",
                "channelId": "UCDlMf3zbdoWYzTwQsaD0fRA",
                "title": "FATHER SON BIKING VIDEO GAME! / Descenders",
                "description": "Father Son Video Game Time! This was a lot of fun! I hope you guys dug watching us mess around with Descenders. Anyone who checks out @Taco Game ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nofmoT-0R_0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nofmoT-0R_0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nofmoT-0R_0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AndrewSchrock",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-22T21:00:27Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "bJOMKoH9Ld6Qw4wNPn9BTv_gZLo",
            "id": {
                "kind": "youtube#video",
                "videoId": "DSSjGSoFfk0"
            },
            "snippet": {
                "publishedAt": "2018-09-13T11:00:01Z",
                "channelId": "UC0hWgcc02QfOJiSZ24c4uKQ",
                "title": "Parking Frenzy 2.0 3D Game #10 - Car Games Android IOS gameplay #carsgames",
                "description": "Parking Frenzy 2.0 3D Game #10 - Car Games Android IOS gameplay #carsgames Oddman Games : gaming channel about Android and IOS games, gameplay, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DSSjGSoFfk0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DSSjGSoFfk0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DSSjGSoFfk0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Oddman Games",
                "liveBroadcastContent": "none",
                "publishTime": "2018-09-13T11:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "c8PxDUKv-9QAZD9C8Lqpy8KDlM8",
            "id": {
                "kind": "youtube#video",
                "videoId": "w7TjPUzZF3I"
            },
            "snippet": {
                "publishedAt": "2019-02-16T04:00:05Z",
                "channelId": "UCL4xLe_SjcDccfpVeSRFGYQ",
                "title": "Booba Video game 🎮 Funny cartoons 🍭 Super ToonsTV",
                "description": "and makes booba happy Booba is Domovenok, a fiction funny creature in Russian culture, he lives inside houses and comes out when humans are ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/w7TjPUzZF3I/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/w7TjPUzZF3I/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/w7TjPUzZF3I/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Super Toons TV",
                "liveBroadcastContent": "none",
                "publishTime": "2019-02-16T04:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "3jQvr5UXKm_kgrGLT6S6SwUjRYo",
            "id": {
                "kind": "youtube#video",
                "videoId": "Vx2NHi7ZTw8"
            },
            "snippet": {
                "publishedAt": "2019-04-26T12:00:05Z",
                "channelId": "UCwOGO9gT1y0IvzPqKal4loQ",
                "title": "MOM STOLE MY VIDEO GAMES ! Let&#39;s Play !? Ryan&#39;s Mommy hides video games from Ryan &amp; Daddy!",
                "description": "MOM STOLE MY VIDEO GAMES Let's Play !? Ryan's Mommy hides video games from Ryan & Daddy! We have to PLAY a video game to get our video games ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Vx2NHi7ZTw8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Vx2NHi7ZTw8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Vx2NHi7ZTw8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "VTubers",
                "liveBroadcastContent": "none",
                "publishTime": "2019-04-26T12:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BVfSASeYuUKNV9h8vO3d-HsJ7x4",
            "id": {
                "kind": "youtube#video",
                "videoId": "mKnDpCuyR2s"
            },
            "snippet": {
                "publishedAt": "2021-04-03T18:30:18Z",
                "channelId": "UCvO9Xk3bheuxEemvknCj72g",
                "title": "10 Video Game Moments Where You Were Screwed Either Way",
                "description": "Not every game-changing choice gives you the warm and fuzzies. For more awesome content, check out: http://whatculture.com/gaming Catch us on Facebook ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/mKnDpCuyR2s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/mKnDpCuyR2s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/mKnDpCuyR2s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "WhatCulture Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-03T18:30:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "KOsI1A4ihEc7M7LXQrLM84dHdfA",
            "id": {
                "kind": "youtube#video",
                "videoId": "CNwPE-LhDHk"
            },
            "snippet": {
                "publishedAt": "2017-10-27T15:10:51Z",
                "channelId": "UCgcfvFY_vzGgDwpYreA5bhg",
                "title": "super viral video Real story Dangerous train accident in India!!",
                "description": "The elimination of all unmanned level crossings to be speeded-up in a big way. These are now targeted to be eliminated within a year compared with the earlier ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CNwPE-LhDHk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CNwPE-LhDHk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CNwPE-LhDHk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ANZAR G",
                "liveBroadcastContent": "none",
                "publishTime": "2017-10-27T15:10:51Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "G2qIk3k9veJtY9FRJI3Wtxe9fkE",
            "id": {
                "kind": "youtube#video",
                "videoId": "ReBYWIWAsx4"
            },
            "snippet": {
                "publishedAt": "2021-03-28T11:30:02Z",
                "channelId": "UCvO9Xk3bheuxEemvknCj72g",
                "title": "8 Secret Video Game Cutscenes That Change EVERYTHING",
                "description": "Little-known gaming moments you need to see. For more awesome content, check out: http://whatculture.com/gaming Catch us on Facebook at: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ReBYWIWAsx4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ReBYWIWAsx4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ReBYWIWAsx4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "WhatCulture Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-28T11:30:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Q27eDVq5h_UJ5gU9K1t_bK-E3Vs",
            "id": {
                "kind": "youtube#video",
                "videoId": "yAABZ7g1oIc"
            },
            "snippet": {
                "publishedAt": "2021-04-02T22:30:02Z",
                "channelId": "UC_uuCO-tZMc73_qRvr46OFA",
                "title": "Open Season the video game isn’t very good",
                "description": "New videos EVERY WEEKEND! MindPulp is everything you want it to be AND more. Quality gaming content on some of the weirdest games in existence. What?",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/yAABZ7g1oIc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/yAABZ7g1oIc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/yAABZ7g1oIc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Mind Pulp",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-02T22:30:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "r6IAZs54wqfWG_7-Let9G2oHMNU",
            "id": {
                "kind": "youtube#video",
                "videoId": "zr3fY9_GwT8"
            },
            "snippet": {
                "publishedAt": "2021-03-29T11:15:04Z",
                "channelId": "UCvO9Xk3bheuxEemvknCj72g",
                "title": "9 Video Game Franchises Returning On PS5, Xbox Series XS &amp; Switch",
                "description": "Bioshock, GTA, Metroid Prime - there's a LOT to look forward to. For more awesome content, check out: http://whatculture.com/gaming Catch us on Facebook at: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/zr3fY9_GwT8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/zr3fY9_GwT8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/zr3fY9_GwT8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "WhatCulture Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-29T11:15:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qshQI_p7dMQYkwx5rH2NMfw2adM",
            "id": {
                "kind": "youtube#video",
                "videoId": "GVvwlR3IQxM"
            },
            "snippet": {
                "publishedAt": "2020-09-05T00:00:12Z",
                "channelId": "UCT5OzL9HLn1pafF75Wkfqlw",
                "title": "Troll Quest Video Games,Scary Teacher 3D,Siren Head Field,Patty Pursuit,Siren Granny Mod,HillClimb2",
                "description": "Troll Quest Video Games,Scary Teacher 3D,Siren Head Field,Patty Pursuit,#SirenGranny Mod,Hill Climb 2,Garfield Rush,#TempleRun2 #Game24hFunny ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GVvwlR3IQxM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GVvwlR3IQxM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GVvwlR3IQxM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Game24hFunny",
                "liveBroadcastContent": "none",
                "publishTime": "2020-09-05T00:00:12Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "zVWgwvq2bAdplpKDQ8dWSF51kRM",
            "id": {
                "kind": "youtube#video",
                "videoId": "uoLbWkDJqiI"
            },
            "snippet": {
                "publishedAt": "2021-01-01T16:00:14Z",
                "channelId": "UCfguohQ13Uez5UWqJbZA5Qg",
                "title": "Princess Peach vs. Amy Rose - Video Game Rap Battle",
                "description": "About VideoGameRapBattles How's it going everyone? Cam here, rapper and creator of VideoGameRapBattles. Video Game Rap Battles is a series that pits ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/uoLbWkDJqiI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/uoLbWkDJqiI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/uoLbWkDJqiI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Cam Steady",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-01T16:00:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ThYNJwm7L_SWrQeY5SCukUva46o",
            "id": {
                "kind": "youtube#video",
                "videoId": "KbTSjakI36Q"
            },
            "snippet": {
                "publishedAt": "2020-07-23T05:17:23Z",
                "channelId": "UCJJIUFarxaS0Jat8HU8H4Ag",
                "title": "Video Game - Running Barbie Games Subway Princess Runner - Crazy Gudiya Gadi wala game",
                "description": "This is subway surfers game running game. The demand for is subway princess runner video increasing day by day. Doll Fun race 3d has most highly ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/KbTSjakI36Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/KbTSjakI36Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/KbTSjakI36Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Barbie Games for Girls",
                "liveBroadcastContent": "none",
                "publishTime": "2020-07-23T05:17:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "UIi1YhuzqfocL-5Uw4gi3sGqTmw",
            "id": {
                "kind": "youtube#video",
                "videoId": "kp0hXcDQfok"
            },
            "snippet": {
                "publishedAt": "2018-12-26T10:30:01Z",
                "channelId": "UC7e1XWjOlYy8XlNMeVxeKNg",
                "title": "Rat-A-Tat |&#39;Video Game in Real Life Animation for Kids Cartoons&#39;| Chotoonz Kids Funny Cartoon Videos",
                "description": "In Video Game in Real Life Animation for Kids Cartoons of Rat a Tat, a funny, scary, and hilarious #cartoon compilation for kids, watch out for the mice brothers ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/kp0hXcDQfok/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/kp0hXcDQfok/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/kp0hXcDQfok/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Chotoonz TV - Funny Cartoons for Kids",
                "liveBroadcastContent": "none",
                "publishTime": "2018-12-26T10:30:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dtSCB5imgjapdh0gOTwQfqT0cJY",
            "id": {
                "kind": "youtube#video",
                "videoId": "97aKcHqK0L0"
            },
            "snippet": {
                "publishedAt": "2020-07-02T14:00:04Z",
                "channelId": "UCttUlwTvqWQXRAaTcxeG9Zg",
                "title": "Projota - VIDEOGXME",
                "description": "Eu já montei até uma sala só de videogame E ela vem passar a night Na dança do Fortnite pra acender o meu Free Fire, que fogo ela tem Lolzin, se quiser é só ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/97aKcHqK0L0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/97aKcHqK0L0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/97aKcHqK0L0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ProjVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2020-07-02T14:00:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ll78HYHE0i49DZ4HudUgb-V_0t0",
            "id": {
                "kind": "youtube#video",
                "videoId": "vfQR4ki3dOI"
            },
            "snippet": {
                "publishedAt": "2021-03-25T21:59:05Z",
                "channelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
                "title": "Top 10 New Games of April 2021",
                "description": "Humankind Platform : PC, Stadia Release Date : April 22, 2021 Century: Age of Ashes Platform : PC Release Date : April TBC Oddworld: Soulstorm Platform ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vfQR4ki3dOI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vfQR4ki3dOI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vfQR4ki3dOI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "gameranx",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-25T21:59:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xMKfSDQn_-8knKjRUU4tqYqlhP8",
            "id": {
                "kind": "youtube#video",
                "videoId": "ZpPogZujkbA"
            },
            "snippet": {
                "publishedAt": "2021-03-28T10:00:15Z",
                "channelId": "UCnBgzvne3WyXz_aBgWD9vCg",
                "title": "Vidi-O-Game : Vidi &amp; Isyana kuak kejahatan Nino RAN",
                "description": "MENONTON KONTEN INI DAPAT MENYEBABKAN SENYUMAN, SERANGAN BAHAGIA, FANTASI DAN KEINGINAN NONTON LAGI DAN LAGI Vidi-O-Game ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZpPogZujkbA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZpPogZujkbA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZpPogZujkbA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Vidi Aldiano",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-28T10:00:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "AJ-9UsOQe4Iv-0SlMD2K7zOwPNQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "FbdlPlOXtYc"
            },
            "snippet": {
                "publishedAt": "2021-03-30T15:00:04Z",
                "channelId": "UCaWd5_7JhbQBe4dknZhsHJg",
                "title": "Top 10 Times Video Game Streamers Got What They Deserved",
                "description": "Whether it happened while streaming or off camera, all of these gamers ended up suffering the consequences of their actions. Unfortunately, not every streamer ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FbdlPlOXtYc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FbdlPlOXtYc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FbdlPlOXtYc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "WatchMojo.com",
                "liveBroadcastContent": "none",
                "publishTime": "2021-03-30T15:00:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "CpNO6adE1HT8jIk4g59Uq0CyAYc",
            "id": {
                "kind": "youtube#video",
                "videoId": "ifai1WJJ8Z0"
            },
            "snippet": {
                "publishedAt": "2021-01-30T19:16:37Z",
                "channelId": "UCo_IB5145EVNcf8hw1Kku7w",
                "title": "Game Theory: Video Games Will NEVER Be The Same...",
                "description": "Our world has been reshaped by this pandemic. Instead of talking about all of the terrible things, I thought for today we'd focus on one of the silver linings of this ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ifai1WJJ8Z0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ifai1WJJ8Z0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ifai1WJJ8Z0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "The Game Theorists",
                "liveBroadcastContent": "none",
                "publishTime": "2021-01-30T19:16:37Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "9b4Mu7mPmKV8addjiTRGo4UtOLM",
            "id": {
                "kind": "youtube#video",
                "videoId": "9xbyx1iw3cE"
            },
            "snippet": {
                "publishedAt": "2019-04-18T18:45:00Z",
                "channelId": "UCUAL--p3qAa27luR0IYbjZA",
                "title": "Pencilmate&#39;s Video Game Shenanigans!",
                "description": "NO PAIN, NO GAME - Pencilmate's gotta dodge all the video game blocks and balls that are popping up around him! Turn on the Notification Bell ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9xbyx1iw3cE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9xbyx1iw3cE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9xbyx1iw3cE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Pencilmation",
                "liveBroadcastContent": "none",
                "publishTime": "2019-04-18T18:45:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "T3A9DDFXiSIfDTxl4xFtZKW45g4",
            "id": {
                "kind": "youtube#video",
                "videoId": "ZtHCnXMjIXY"
            },
            "snippet": {
                "publishedAt": "2017-08-09T05:42:09Z",
                "channelId": "UCxz2cC4_n4uWiTaBL9l-tLw",
                "title": "Subway Surfers Gameplay PC - First play",
                "description": "▻Presented by Kiloo Games and Sybo Games. +DASH as fast as you can! +DODGE the oncoming trains! #SubwaySurfers #Beijing #CartoonsMeee.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZtHCnXMjIXY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZtHCnXMjIXY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZtHCnXMjIXY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Cartoons Mee",
                "liveBroadcastContent": "none",
                "publishTime": "2017-08-09T05:42:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "tbpjQEyy98wbLoJFNmarXfRr8j0",
            "id": {
                "kind": "youtube#video",
                "videoId": "zWz6v-UAs8Q"
            },
            "snippet": {
                "publishedAt": "2020-12-11T03:19:06Z",
                "channelId": "UCqDS7KWjAPKv-7ZSlro9OiQ",
                "title": "The Game Awards 2020 Official Stream (4K) - Video Game&#39;s Biggest Night Live!",
                "description": "Video game's biggest night is LIVE on YouTube in 4K. With appearances by Keanu Reeves, Christopher Nolan, Gal Gadot, Tom Holland, Brie Larson, Reggie ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/zWz6v-UAs8Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/zWz6v-UAs8Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/zWz6v-UAs8Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "thegameawards",
                "liveBroadcastContent": "none",
                "publishTime": "2020-12-11T03:19:06Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "y_V4Suyb9WCtbIvzJgkTRiMmDLQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "uNPestUiX4Y"
            },
            "snippet": {
                "publishedAt": "2021-02-26T10:00:15Z",
                "channelId": "UCnBgzvne3WyXz_aBgWD9vCg",
                "title": "Vidi-O-Game : Vidi sih kenal siapa pacar Chef Renatta",
                "description": "VidiAldiano #RenattaMoeloek #ChefRenatta MENONTON KONTEN INI DAPAT MENYEBABKAN SENYUMAN, SERANGAN BAHAGIA, FANTASI DAN ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/uNPestUiX4Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/uNPestUiX4Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/uNPestUiX4Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Vidi Aldiano",
                "liveBroadcastContent": "none",
                "publishTime": "2021-02-26T10:00:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "D1tukAGWaMisMdO2CiFh-cLCb_o",
            "id": {
                "kind": "youtube#video",
                "videoId": "yxl_ASJ51IE"
            },
            "snippet": {
                "publishedAt": "2020-10-23T11:59:51Z",
                "channelId": "UCmWZB57dUwFfj847-4y63JA",
                "title": "Video Game Heroes w/ Blaze! | Blaze and the Monster Machines",
                "description": "Blaze and AJ are on a quest to get the magic key in Blaze's video game! They use math to create a Monster Machine shield, a sledgehammer, and a sword!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/yxl_ASJ51IE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/yxl_ASJ51IE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/yxl_ASJ51IE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Blaze and the Monster Machines",
                "liveBroadcastContent": "none",
                "publishTime": "2020-10-23T11:59:51Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "m9PQquv8vX2GoIk5CEai3OCIZQw",
            "id": {
                "kind": "youtube#video",
                "videoId": "-bd9yGiALkA"
            },
            "snippet": {
                "publishedAt": "2021-04-02T15:00:01Z",
                "channelId": "UCfguohQ13Uez5UWqJbZA5Qg",
                "title": "AN AMONG US AIRSHIP RAP BATTLE | Video Game Rap Battle | Cam Steady [Among Us Song]",
                "description": "About Cam Steady Welcome to the official VideoGameRapBattles YouTube channel! I'm Cam Steady, rapper and creator of VideoGameRapBattles. Video ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-bd9yGiALkA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-bd9yGiALkA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-bd9yGiALkA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Cam Steady",
                "liveBroadcastContent": "none",
                "publishTime": "2021-04-02T15:00:01Z"
            }
        }
    ]
}


export default function Section(props: {
    title: string,
    keyword: string,
}) {
    const [isReady] = useStore<boolean>('gapi');
    const [items, setItems] = useState([]);
    const [windowWidth] = useStore('windowWdith', window.innerWidth)
    useAsync(async () => {
        if (isReady) {
            try {
                const cache = localStorage.getItem(props.title);
                if (cache) {
                    setItems(JSON.parse(cache));
                    return
                }
                const { result } = await gapi.client.youtube.search.list({
                    part: 'id,snippet',
                    q: props.keyword,
                    maxResults: 30
                })
                setItems(result.items)
                localStorage.setItem(props.title, JSON.stringify(result.items))
            } catch (e) {
                console.log(e)
            }
        }
    }, [isReady])


    // if (items.length === 0) return <div></div>
    let index = 0;
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.main}>
                    <h2>{props.title}</h2>
                    <section>
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <If condition={windowWidth > 1500}>
                            <Item data={items[index++]} />
                            <Item data={items[index++]} />
                        </If>
                    </section>
                    <section>
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <Item data={items[index++]} />
                        <If condition={windowWidth > 1500}>
                            <Item data={items[index++]} />
                            <Item data={items[index++]} />
                        </If>
                    </section>
                </div>
                <div className={styles.rank}>
                    <h2>{'More'}</h2>
                    <section>
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                        <RankItem data={items[index++]} />
                    </section>
                </div>
            </div>
        </section>
    )
}

function Item(props: { data: any }) {
    const [, setPlayID] = useStore('playID')
    const { snippet, id } = props.data ?? {};

    if (!snippet) {
        return (
            <div className={styles.items} >
                <div className='placeholder' style={{ width: '180px', height: '100px', marginBottom: '1rem' }} />
                <div className='placeholder' style={{ width: '180px', height: '2rem' }} >
                </div>
            </div>
        )
    }

    return (
        <div className={styles.items} style={{ width: snippet?.thumbnails?.medium?.width / 2 }}
            onClick={() => {
                setPlayID(id.videoId)
            }}
        >
            <img src={snippet?.thumbnails?.medium?.url ?? '/404.png'} width={snippet?.thumbnails?.medium?.width / 2} />

            <div className={styles.itemTitle}>
                <span className={styles.title} title={snippet?.title}>{snippet?.title}</span>
                <br />
                <span className={styles.author}>{snippet?.channelTitle}</span>
            </div>
        </div>
    )
}

function RankItem(props: { data: any }) {
    const [, setPlayID] = useStore('playID')
    const { snippet, id } = props.data ?? {};
    return (
        <div className={styles.rankItems}>
            <span
                className={styles.title}
                onClick={() => {
                    setPlayID(id.videoId)
                }}
                title={snippet?.title}>
                {snippet?.title ?? '-'}
            </span>
        </div>
    )
}