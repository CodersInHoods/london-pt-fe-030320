export class Eye {
  private _element: HTMLElement = document.createElement("div");

  public get element() {
    return this._element;
  }

  constructor(eyeIndex: number, color: string) {
    this._element.className = "eye";

    this._element.style.left = `${3 + eyeIndex * 2}em`;

    this._element.style.background = color;

    document.body.append(this._element);
  }
}

export default Eye;
