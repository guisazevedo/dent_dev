import React from "react";

const Contact = () => {
  return (
    <div>
      <label htmlFor="comment">Comments:</label>
      <textarea className="form-control" id="comment" name="text"></textarea>
    </div>
  );
};

export default Contact;
