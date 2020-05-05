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
