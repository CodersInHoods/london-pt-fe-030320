const loadButton = document.querySelector("button");

loadButton.addEventListener("click", async () => {
  const loadingMessage = document.createElement("div");
  loadingMessage.innerText = "Loading please wait...";

  document.body.append(loadingMessage);

  const handleData = (data) => {
    console.log("data being handled", data);
    loadingMessage.remove();

    return data.books.map((bookTitle) => {
      const bookTitleElement = document.createElement("div");
      bookTitleElement.innerText = bookTitle;

      document.body.append(bookTitleElement);

      return bookTitleElement;
    });
  };

  const data = await fetchDataFromServer();
  const bookElements = handleData(data);
  console.log(bookElements);
  const value = await fetchDataFromServer();
  console.log("something else", value);

  //   fetchDataFromServer()
  //     .then(handleData)
  //     .then((bookElements) => {
  //       console.log(bookElements);
  //       return fetchDataFromServer()
  //     })
  //     .then((value) => {
  //         console.log("something else", value)
  //     })
});

const fetchDataFromServer = () => {
  const bookData = {
    books: [
      "harry p",
      "harry royal",
      "harry kane",
      "harry enfield",
      "harry styles",
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bookData);
    }, 2000);
  });

  // setTimeout(() => {
  //     const bookData = {
  //         books: [
  //             "harry p",
  //             "harry royal",
  //             "harry kane",
  //             "harry enfield",
  //             "harry styles",
  //         ]
  //     }

  //     doneCallback(bookData)
  // }, 1000)
};

const BOOKS_URL = "https://www.reddit.com/r/books.json";

// const promise = fetch(BOOKS_URL)

// fetch(BOOKS_URL)
//   .then((response) => response.json())
//   // .then(books => renderBooks(books))

//   .then((redditData) => {
//     console.log(redditData);
//     return redditData.data.children.map((child) => child.data.title);
//   })
//   .then((postTitles) => {
//     postTitles.map((bookTitle) => {
//       const bookTitleElement = document.createElement("div");
//       bookTitleElement.innerText = bookTitle;

//       document.body.append(bookTitleElement);
//     });
//   });

const displaySuccessMessage = (response) => {
  const success = document.createElement("div");

  if (response.headers.get("content-type").includes("json")) {
    console.log("we've got some json", response);
  } else {
    console.log(
      "we've got somerhing else",
      response.headers.get("content-type")
    );
  }

  success.innerText = `Response from ${response.url} was successful with a status of ${response.status}`;

  document.body.append(success);
};

const displayErrorMessage = (response) => {
  const success = document.createElement("div");

  success.style.color = "red";

  success.innerText = `Response from ${response.url} was UNsuccessful with a status of ${response.status}`;

  document.body.append(success);
};

// promise.then((response) => {
//     if (response.ok) {
//         displaySuccessMessage(response)
//     } else {
//         displayErrorMessage(response)
//     }
// })
// fetch("https://www.reddit.com/r/books").then((response) => {
//     if (response.ok) {
//         displaySuccessMessage(response)
//     } else {
//         displayErrorMessage(response)
//     }
// })
// fetch("http://localhost:5000/erghouer").then((response) => {
//     if (response.ok) {
//         displaySuccessMessage(response)
//     } else {
//         displayErrorMessage(response)
//     }
// })

const getRedditData = async () => {
  const response = await fetch(BOOKS_URL);
  const redditData = await response.json();
  console.log(redditData);
  const postTitles = redditData.data.children.map((child) => child.data.title);
  postTitles.map((bookTitle) => {
    const bookTitleElement = document.createElement("div");
    bookTitleElement.innerText = bookTitle;

    document.body.append(bookTitleElement);
  });

//   fetch(BOOKS_URL)
//     .then((response) => response.json())
//     // .then(books => renderBooks(books))

//     .then((redditData) => {
//       console.log(redditData);
//       return redditData.data.children.map((child) => child.data.title);
//     })
//     .then((postTitles) => {
//       postTitles.map((bookTitle) => {
//         const bookTitleElement = document.createElement("div");
//         bookTitleElement.innerText = bookTitle;

//         document.body.append(bookTitleElement);
//       });
//     });
};
