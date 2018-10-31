function extractFile() {

    let input = document.getElementById('transcriptFile');

    let file = input.files[0];

    console.log(file);
    console.log("This");

    if(!file) {
        //raise and error somewhere
    }else {
        transcribeFile(file);
    }

}

function transcribeFile(file) {
    let results = document.getElementById('results');
    let headers = new Headers();
    let user= "c17a629b-a1fd-476f-87cf-3869c3ff0abd";
    let password= "lEQvDlNJTBeI";
    //let header = {'Content-Type': 'audio/flac','Transfer-Encoding': 'chunked'};
    let query = '?keywords=several,tornadoes,touch&max_alternatives=3&keywords_threshold=0.5';
    let url = 'https://stream.watsonplatform.net/speech-to-text/api/v1/recognize';

    headers.set('Authorization', 'Basic ' + btoa(user + ":" + password));
    headers.set('Content-Type', 'audio/mp3');
   // headers.set('Transfer-Encoding', 'chunked');

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: file
    }).then((response) => {
        console.log('here now');
        console.log(response.body);
        return response.json();
    }).then((json) => {
        console.log('here 2');
        results.innerText = JSON.stringify(json);
        console.log(JSON.stringify(json))
    }).catch((error) => {
        console.log(error)
    })
}