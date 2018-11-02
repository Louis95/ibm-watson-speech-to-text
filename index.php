<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>File Upload with PHP</title>
    <script src="speech2Text.js" ></script>
</head>
<body>

    <input type="file" accept="audio/mp3" id="transcriptFile" />
    <button onclick="extractFile()">Transcribe</button>

   <div>
       <h3>Results After Transcription </h3>

       <p id="result"></p>


   </div>


    <!--<form action="Recognize.php" method="post" enctype="multipart/form-data">
        Upload a File:
        <input type="file" name="myfile" id="fileToUpload">
        <input type="submit" name="submit" value="Upload File Now" >
    </form>-->
</body>
</html>