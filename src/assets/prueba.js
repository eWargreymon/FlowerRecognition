
// Your code will go here
// open up your console - if everything loaded properly you should see the correct version number

console.log('ml5 version:', ml5.version);
var res;
function loadModel(){
    const classifier = ml5.imageClassifier('assets/my_model/model.json', modelLoaded);
    function modelLoaded() {
        console.log('Model Loaded!');
        classifier.classify(document.getElementById('image'), (err, results) => {
            document.getElementById("salida").innerHTML = results[0]['label']
            document.getElementById("prob").innerHTML = results[0]['confidence']
        });
        
    }
}
