import React from 'react'
import './HomeScreen.css'
import Nav from "./Nav";
import Row from "./Row";

function SignScreen() {

    const imageUrls = {
        "ViewVoyage ORIGINALS": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/274px-Hitler_portrait_crop.jpg",
        "https://assets.editorial.aetnd.com/uploads/2009/10/adolf-hitler-gettyimages-119505258.jpg",
        "https://www.interfax.ru/ftproot/textphotos/2012/01/20/hit.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8iId50lrY1pdmtjDSvOucKVP1HDt4eKhmAkpDf9Arw&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bundesarchiv_Bild_102-13774%2C_Adolf_Hitler.jpg/180px-Bundesarchiv_Bild_102-13774%2C_Adolf_Hitler.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Adolf_Hitler_Berghof-1936.jpg/220px-Adolf_Hitler_Berghof-1936.jpg",
        "https://avatars.dzeninfra.ru/get-zen_doc/1917783/pub_60dcd38b828fb32711effa21_60dcd419104ca22aea67676e/scale_1200",
        "https://avatars.dzeninfra.ru/get-zen_doc/1857554/pub_5dba56d88d5b5f00b1fe9cf8_5e0847963d008800b3b74d0c/scale_1200",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWhEorpqX7zrDBktplbL5IR64ZnEJbAm_vI5389uQOw&s"
    ],
        "Trending Now": [
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg"
        ],
        "Top Rated": [
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg"
        ],
        "Action Movies": [
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg"
        ],
        "Comedy Movies": [
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg"
        ],
        "Horror Movies": [
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg"
        ],
        "Romance Movies": [
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg"
        ],
        "Documentaries": [
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg",
            "https://static01.nyt.com/images/2023/11/26/multimedia/26israel-hamas-ghandour-htbf/26israel-hamas-ghandour-htbf-videoSixteenByNineJumbo1600.jpg"
        ]

    };
    return (
        <div className="homeScreen">
            <Nav />
            <Row
                title="ViewVoyage ORIGINALS"
                imageUrls={imageUrls["ViewVoyage ORIGINALS"]}
                isLargeRow
            />
            <Row title="Trending Now" imageUrls={imageUrls["Trending Now"]}/>
            <Row title="Top Rated" imageUrls={imageUrls["Top Rated"]}/>
            <Row title="Action Movies" imageUrls={imageUrls["Action Movies"]}/>
            <Row title="Comedy Movies" imageUrls={imageUrls["Comedy Movies"]}/>
            <Row title="Horror Movies" imageUrls={imageUrls["Horror Movies"]}/>
            <Row title="Romance Movies" imageUrls={imageUrls["Romance Movies"]}/>
            <Row title="Documentaries" imageUrls={imageUrls["Documentaries"]}/>
        </div>
    );
}

export default SignScreen;