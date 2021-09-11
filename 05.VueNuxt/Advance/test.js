const axios = require('axios');

const fetchMovieApi = () => {
    axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=aa45d6530789eeb04c4b3be829e256fa&targetDt=20210101')
    .then(({data})=>{
        console.log(data)
    })
}

console.log(fetchMovieApi())
