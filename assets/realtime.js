
// Your code will go here
// open up your console - if everything loaded properly you should see the correct version number
let classifier,video,resultsP,canvas;
console.log('ml5 version:', ml5.version);   
if(window.location.href.includes("camara")){
    function setup() {
        if(window.location.href.includes("camara")){
            canvas = createCanvas(300,300)
            // Create a camera input
            video = createCapture(VIDEO);
            // Initialize the Image Classifier method with MobileNet and the video as the second argument
            classifier = ml5.imageClassifier('assets/my_model/model.json', video, modelReady);
            resultsP = createP('Loading model and video...');
        }
    }

    function modelReady() {
        if(window.location.href.includes("camara")){
            console.log('Model Ready');
            classifyVideo();
        }
    }
    
    // Get a prediction for the current video frame
    function classifyVideo() {
        if(window.location.href.includes("camara")){
            classifier.classify(gotResult);
        }
    }
    
    // When we get a result
    function gotResult(err, results) {
        // The results are in an array ordered by confidence.
        if(window.location.href.includes("camara")){
            resultsP.html(`${results[0].label  } ${nf(results[0].confidence, 0, 2)}`);
            classifyVideo();
        }
    }
}
