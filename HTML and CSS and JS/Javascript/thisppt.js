//DEFINATION-THIS IS THE OBJECT THAT IS EXECUTING THE CURRENT FUNCTION.

//2 simple rules
//1)method ->obj(if the function is the part of an object we call that function method)
//2)function->global(window-browser,global-node)

//example-1(method)
let video = {
  title: "KGF",
  Play() {
    console.log(this);
  },
};
video.Play();

//example-2 with different function
let video1 = {
  title: "KGF",
  Play() {
    console.log(this);
  },
};
video1.stop = function () {
  console.log(this);
};
video1.stop();

//example-3 (function)
let video3 = {
  title: "KGF",
  Play() {
    console.log(this);
  },
};
function playVideo() {
  console.log(this);
}
playVideo();

//example-4(using constructor)
let video4 = {
  title: "KGF",
  Play() {
    console.log(this);
  },
};
function Video(title) {
  this.title = title;
  console.log(this);
}
let v = new Video("KGF-2");

//example-5(adding array to it)
let video5 = {
  title: "KGF-2",
  Actors: ["YASH", "SANJAYDUTT", "SRINIDHI SHETTY"],
  showActors() {
    this.Actors.forEach(function (Actors) {
      console.log(Actors);
    });
  },
};
video5.showActors();
