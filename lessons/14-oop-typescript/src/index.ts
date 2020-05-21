import Face from "./interfaces/Face.interface";
import FaceClass from "./classes/Face.class";
import Color from "./enums/Color.enum";

const faces: Face[] = [
  {
    eyes: 2,
    mouth: true,
    width: 20,
    eyeColor: Color.Black,
  },
  {
    eyes: 3,
    mouth: false,
    eyeColor: Color.Red,
  },
];

faces.forEach((faceObject: Face) => {
  const newFace = new FaceClass(faceObject.eyes, faceObject.eyeColor);

  console.log(newFace);
});

const generateNewFace: (numEyes: number) => Face = (numEyes: number) => {
  return {
    eyes: numEyes,
    width: Math.random() * 20,
    eyeColor: Color.Black,
    mouth: false,
  };
};

const newFace = generateNewFace(5);
