import Color from "../enums/Color.enum";

export interface Face {
    eyes: number;
    mouth: boolean;
    width?: number;
    eyeColor: Color;
}

export default Face