import checkURL from "./checkURL";
const axios = require('axios').default;
export default async function submitHandler(e) {
    e.preventDefault();

    let url = document.getElementById("article-url").value;

    // check url on submit

    if (checkURL(url)) {
        document.getElementById("loader").classList.remove('d_none');
        document.getElementById("results").classList.add('d_none');
        const requestOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        // using axios to post the url to our backend server
        const res = await axios.post('http://localhost:8081/sentiment', JSON.stringify({ "url": url }), requestOptions)
            .then((res) => {
                // print the results of sentiment API to the html
                document.getElementById("loader").classList.add('d_none');
                document.getElementById("results").classList.remove('d_none');
                document.getElementById('text').innerHTML = res.data.sentence_list[0].text;
                document.getElementById('score_tag').innerHTML = res.data.score_tag;
                document.getElementById('agreement').innerHTML = res.data.agreement;
                document.getElementById('subjectivity').innerHTML = res.data.subjectivity;
                document.getElementById('confidence').innerHTML = res.data.confidence;
                document.getElementById('irony').innerHTML = res.data.irony;
            })
            .catch((error) => {
                console.error(error);
                console.log('also check if server is running')
            })
    } else {
        alert("Url is invalid, Please use a correct URL")
    }

}