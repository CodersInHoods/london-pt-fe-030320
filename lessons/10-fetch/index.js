const BOOKS_URL = "http://localhost:3000/books";

const newBookForm = document.querySelector("form");
const pageButtons = document.querySelector("#page-buttons");
const pageControls = document.querySelector("#page-controls");
const upPageButton = pageControls.querySelector("button:nth-of-type(2)");
const downPageButton = pageControls.querySelector("button");
const defaultSortButton = pageControls.querySelector("#default");
const pagesSortButton = pageControls.querySelector("#pages");

const getBooks = () => fetch(BOOKS_URL).then((response) => response.json());

const postBook = (newBook) =>
  fetch(BOOKS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newBook),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  });

const replaceBook = (book) =>
  fetch(`${BOOKS_URL}/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...book }),
  });

const updateBook = (book) =>
  fetch(`${BOOKS_URL}/${book.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ pages: book.pages + 1 }),
  });

const deleteBook = (book) =>
  fetch(`${BOOKS_URL}/${book.id}`, { method: "DELETE" });

const API = {
  getBooks,
  deleteBook,
  updateBook,
  replaceBook,
  postBook,
};

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(newBookForm);

  const newBook = {
    title: newBookForm.title.value,
    author: newBookForm.author.value,
    pages: parseInt(newBookForm.pages.value),
  };

  API.postBook(newBook)
    .then((book) => renderBook(book))
    .catch((errorDetails) => {
      console.error("OOPS", errorDetails);
    });
});

const renderBooks = (books) => {
  document.querySelectorAll(".book").forEach((bookEl) => bookEl.remove());

  books
    .filter((book, i) => {
      const zeroedPage = currentPage - 1;
      const startingPageBookIndex = zeroedPage * booksPerPage;
      console.log(
        "index",
        i,
        "currentPage",
        zeroedPage,
        "startingPageBookIndex",
        startingPageBookIndex
      );

      if (i < startingPageBookIndex) {
        return false;
      }
      if (i < startingPageBookIndex + booksPerPage) {
        return true;
      }

      return false;
    })
    .forEach((book) => renderBook(book));
};

const renderBook = (book) => {
  const div = document.createElement("div");

  div.className = "book";

  const h1 = document.createElement("h1");

  h1.innerText = book.title;

  const p = document.createElement("p");
  p.innerText = `${book.pages} pages`;

  p.addEventListener("click", () => {
    API.updateBook(book).then(() => {
      book.pages++;
      p.innerText = `${book.pages} pages`;
    });
  });

  const authorInput = document.createElement("input");

  authorInput.value = book.author;

  const saveAuthorButton = document.createElement("button");

  saveAuthorButton.innerText = "Save author button";

  saveAuthorButton.addEventListener("click", () => {
    book.author = authorInput.value;

    API.replaceBook(book);
  });

  const deleteButton = document.createElement("button");

  deleteButton.innerText = "delete this book";

  deleteButton.addEventListener("click", () => {
    API.deleteBook(book).then(() => {
      div.remove();
    });
  });

  div.append(h1, p, authorInput, saveAuthorButton, deleteButton);

  document.body.append(div);
};

let allBooks = [];
let pages = 0;
let booksPerPage = 3;
let currentPage = 1;

const SORT_OPTIONS = {
  DEFAULT: 1,
  PAGES: 2,
};

let sortOption = SORT_OPTIONS.DEFAULT;

const setSortOption = (newSortOption) => {
  sortOption = newSortOption;

  if (sortOption === SORT_OPTIONS.DEFAULT) {
    allBooks.sort((bookA, bookB) => {
      return bookA.id - bookB.id;
    });
  } else if (sortOption === SORT_OPTIONS.PAGES) {
    allBooks.sort((bookA, bookB) => {
      return bookB.pages - bookA.pages;
    });
  }

  renderBooks(allBooks);
};

defaultSortButton.addEventListener("click", () => {
  setSortOption(SORT_OPTIONS.DEFAULT);
});
pagesSortButton.addEventListener("click", () => {
  setSortOption(SORT_OPTIONS.PAGES);
});

upPageButton.addEventListener("click", () => setCurrentPage(currentPage + 1));
downPageButton.addEventListener("click", () => setCurrentPage(currentPage - 1));

const displayPageButtons = (numberOfPages) => {
  for (let index = 1; index <= numberOfPages; index++) {
    const pageButton = document.createElement("button");

    pageButton.innerText = index;

    pageButton.addEventListener("click", () => {
      setCurrentPage(index);
    });

    pageButtons.append(pageButton);
  }
};

const setCurrentPage = (newPageNumber) => {
  currentPage = newPageNumber;
  upPageButton.disabled = false;
  downPageButton.disabled = false;

  if (currentPage > pages) {
    currentPage = pages;
    upPageButton.disabled = true;
  } else if (currentPage < 1) {
    currentPage = 1;
    downPageButton.disabled = true;
  }

  renderBooks(allBooks);
};

API.getBooks().then((books) => {
  pages = Math.ceil(books.length / booksPerPage);
  displayPageButtons(pages);
  allBooks = books;
  renderBooks(allBooks);

  const titles = [];

  allBooks.forEach((book) => {
    titles.push(book.title);
  });

  for (let index = 0; index < books.length; index++) {
    const element = array[index];
    titles.push(element.title);
  }

  const onlyTitles = books.map((book) => book.title);

  for (let index = 0; index < books.length; index++) {
    const element = array[index];
    if (element.pages > 500) {
      titles.push(element.title);
    }
  }

  const onlyTitlesOfLongBooks = books
    .filter((book) => book.pages > 500)
    .map((book) => book.title);
});
