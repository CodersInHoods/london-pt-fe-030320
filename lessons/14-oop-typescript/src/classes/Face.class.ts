import Eye from "./Eye.class";
import Color from "../enums/Color.enum";

export class Face {

    private element: HTMLElement = document.createElement("div");
    private eyes: Eye[] = [];

    constructor(private numEyes: number, eyeColor: Color) {
        this.element.className = 'face';

        for (let index = 0; index < numEyes; index++) {
            
            const newEye = new Eye(index, eyeColor)
            
            this.eyes.push(newEye)

            this.element.append(newEye.element)
        }

        document.body.append(this.element)
    }
}

// export class Face {
//     private numEyes: number;

//     constructor(numEyes: number) {
//         this.numEyes = numEyes;
//     }
// }

export default Face