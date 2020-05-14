const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");
const fetch = require("node-fetch-polyfill");

document.body.innerHTML = ``;
// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://localhost:3000";
/**
 * BEFORE YOU START:
 * 1. Run `npm install -g json-server`
 * 2. In this directory, run `json-server db.json`
 * 		to serve your back end API
 * 3. In your broser, go to http://localhost:3000/comments,
 * 		to view the available data
 */

/**
 * Exercise 1
 *
 * create an async function {getComments}, which 
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */

const getComments = async() => {
    return await fetch(baseURL + "/comments").then((response) => response.json());
}

/**
 * Exercise 2
 *
 * create an async function {postComment}, which takes {newComment} as an argument,
 * and posts it to the comments URL.
 *
 * This function should return the data recieved
 * from the server if successful, or "Oops something went wrong!" if not.
 *
 * Don't forget to handle errors.
 */
const post = (object) => {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(object),
    };
    return configObject;
}

const postComment = async(newComment) => {
    return await fetch("http://localhost:3000/comments", post(newComment))
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw "Oops something went wrong!"
            }
        })
        .catch((error) => error);
}


/**
 * Exercise 3
 *
 * Create an async function {patchComment}, which takes {comment}
 * and {newCommentBody} as arguments.
 *
 * It should send a patch request to update the comment in the database with
 * the newCommentBody as the new body value.
 *
 * This function should return the updated object if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
const patch = (newCommentBody) => {
    const patched = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ body: newCommentBody }),
    }
    return patched;
};

const patchComment = async(comment, newCommentBody) => {
    return await fetch(`http://localhost:3000/comments/${comment.id}`, patch(newCommentBody))
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw "Oops we couldn't update that!";
            }
        })
        .catch((errorDetails) => errorDetails);
}



/**
 * Exercise 4
 *
 * create an async function {putComment}, which takes {comment} as an argument,
 * and makes a put request with the new comment data.
 *
 * This function should return the updated comment if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
const put = (comment) => {
    const patched = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(comment),
    }
    return patched;
};

const putComment = async(comment) => {
    return await fetch(`http://localhost:3000/comments/${comment.id}`, put(comment))
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw "Oops we couldn't update that!"
            }
        })
        .catch((errorDetils) => errorDetils);
}


/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {comment} as an argument,
 * and deletes the selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" if not.
 *
 * Don't forget to handle errors.
 */



const deleteComment = async(comment) => {
    return await fetch(`http://localhost:3000/comments/${comment.id}`, { method: "DELETE" })
        .then((response) => {
            if (response.ok) {
                response.json();
            } else {
                throw "That could not be deleted!";
            }
        })
        .then((response) => console.log("Deleted"))
        .catch((errorDetils) => errorDetils);
}
describe("HTTP requests", () => {
  // Exercise 1
  test("getComments should resolve with an array of comments", async () => {
    const data = await getComments();

    expect(Array.isArray(data)).toBe(true);
  });

  // Exercise 2
  test("postComment should add a new comment", async () => {
    const oldComments = await getComments();

    const newComment = await postComment({
      body: `Comment ${oldComments.length + 1}`,
    });
    const newComments = await getComments();

    expect(newComments.length).toEqual(oldComments.length + 1);
    expect(Boolean(newComment.id)).toBe(true);
    expect(newComment.body).toBe(`Comment ${oldComments.length + 1}`);
  });

  // Exercise 3
  test("patchComment should modify one comment", async () => {
    const oldComments = await getComments();
    const firstComment = oldComments[0];

    const updated = await patchComment(firstComment, "Update this comment");

    const newComments = await getComments();
    const newFirstComment = newComments[0];

    expect(firstComment.body).not.toEqual(newFirstComment.body);
    expect(updated.body).toEqual(newFirstComment.body);
    expect(updated.body).toEqual("Update this comment");
  });

  test("patchComment should resolve with 'Oops we couldn't update that!' if the server responds with an error", async () => {
    const message = await patchComment({ id: Math.random() });
    expect(message).toEqual("Oops we couldn't update that!");
  });

  // Exercise 4
  test("putComment should replace one comment", async () => {
    const oldComments = await getComments();
    const firstComment = oldComments[0];

    const updated = await putComment({
      id: firstComment.id,
      nobody: "Replace this comment",
    });

    const newComments = await getComments();
    const newFirstComment = newComments[0];

    expect(newFirstComment.body).toBe(undefined);
    expect(updated.body).toEqual(newFirstComment.body);
    expect(updated.nobody).toEqual(newFirstComment.nobody);
    expect(updated.nobody).toEqual("Replace this comment");
  });

  test("putComment should resolve with 'Oops we couldn't update that!' if the server responds with an error", async () => {
    const message = await putComment({ id: Math.random() });
    expect(message).toEqual("Oops we couldn't update that!");
  });

  // Exercise 5
  test("deleteComment should delete the comment", async () => {
    const oldComments = await getComments();
    const firstComment = oldComments[0];

    await deleteComment(firstComment);

    const newComments = await getComments();

    expect(newComments.length).toEqual(oldComments.length - 1);
  });

  test("deleteComment should resolve with 'That could not be deleted!' if the server responds with an error", async () => {
    const message = await deleteComment({ id: Math.random() });
    expect(message).toEqual("That could not be deleted!");
  });
});
