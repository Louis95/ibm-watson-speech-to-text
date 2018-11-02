


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

