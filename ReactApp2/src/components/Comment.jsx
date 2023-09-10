import React, { useState } from "react";

const Comment = ({ comment, addReply }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [newReply, setNewReply] = useState("");

  const handleNewReplyChange = (event) => {
    setNewReply(event.target.value);
  };

  const handleAddReply = () => {
    addReply(comment.id, newReply);
    setNewReply("");
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <p>
        <strong>{comment.author}</strong> posted on{" "}
        {new Date(comment.timestamp).toLocaleString()} with {comment.points}{" "}
        points
      </p>
      <p>{comment.body}</p>
      {comment.replies && comment.replies.length > 0 && (
        <button onClick={() => setShowReplies(!showReplies)}>
          {showReplies ? "Hide replies" : "Show replies"}
        </button>
      )}
      <br />
      <br />
      {showReplies &&
        comment.replies.map((reply) => (
          <div key={reply.id}>
            <hr style={{ border: "1px solid grey" }} />
            <Comment comment={reply} addReply={addReply} />
          </div>
        ))}
      <br />
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="new-reply">Add a reply:</label>
        <br />
        <textarea
          id="new-reply"
          value={newReply}
          onChange={handleNewReplyChange}
          rows="3"
          cols="50"
        />
        <br />
        <button onClick={handleAddReply}>Reply</button>
      </form>
    </div>
  );
};

const Comments = ({ comments }) => {
  const [commentData, setCommentData] = useState(comments);

  const addReply = (commentId, newReply) => {
    const commentIndex = commentData.findIndex(
      (comment) => comment.id === commentId
    );
    const newCommentData = [...commentData];
    const replyId = (Math.floor(Math.random() * 1000) + 1).toString();
    const newReplyObj = {
      id: replyId,
      author: "You",
      body: newReply,
      timestamp: new Date().toString(),
      points: "0",
    };
    if (!newCommentData[commentIndex].replies) {
      newCommentData[commentIndex].replies = [];
    }
    newCommentData[commentIndex].replies.push(newReplyObj);
    setCommentData(newCommentData);
  };

  return (
    <div>
      {commentData.map((comment) => (
        <div key={comment.id}>
          <hr style={{ border: "1px solid black" }} />
          <Comment comment={comment} addReply={addReply} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
