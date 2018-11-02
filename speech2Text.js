


function extractFile() {

    let input = document.getElementById('transcriptFile');

    let file = input.files[0]; //accessing selected file

    //console.log(file);
    //console.log("This ");

    if(!file) {
        //raise and error somewhere
    }else {
        transcribeFile(file);
    }

}

function transcribeFile(file) {
    let results = document.getElementById('result');

    let headers = new Headers(); //creating a new header object
    let user= "c17a629b-a1fd-476f-87cf-3869c3ff0abd"; // ibm watson speech to text username
    let password= "lEQvDlNJTBeI"; //ibm watson speech to text password
    //let header = {'Content-Type': 'audio/flac','Transfer-Encoding': 'chunked'};
    //let query = '?keywords=several,tornadoes,touch&max_alternatives=3&keywords_threshold=0.5';
    let url = 'https://stream.watsonplatform.net/speech-to-text/api/v1/recognize';  //ibm watson speech to text url

    headers.set('Authorization', 'Basic ' + btoa(user + ":" + password));
    headers.set('Content-Type', 'audio/mp3'); // audio type. (can be modified to include other audio extension example audio/flac, audio/ogg
   // headers.set('Transfer-Encoding', 'chunked');

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: file
    }).then((response) => {

        return response.json(); //transform data into json
    }).then((json) => {

        let all_alternatives = json.results.map(function(e){return e.alternatives}); //looping through json to create a new array of alternatives (formatted objects)

        all_alternatives = [].concat.apply([],all_alternatives); //merging all alternatives into one array

        let all_transcripts = all_alternatives.map(function (e) { //looping through all_alternatives to create a new string array of transcripts and assigning it to all_transcript
            return e.transcript;
        });

        let text = all_transcripts.join(" "); //joining all strings from all_transcript array


        results.innerText = text;



    }).catch((error) => {
        console.log(error)
    })
}

/*function ibmresults(json) {

}*/
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
>>>>>>> a31bea1556318dbce2d9a4c2c3fa02ae81b7f69c
