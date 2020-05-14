const fs = require("fs");
const path = require("path");
const htmlString = fs.readFileSync(
	path.resolve(__dirname, "../index.html"),
	"utf8"
);

const htmlNode = document.createElement('html');
htmlNode.innerHTML = htmlString;

jest.dontMock("fs");

describe('', () => {
  test("has p element", () => {
    expect(htmlNode.querySelector("p")).not.toBe(null);
  });
  
})

