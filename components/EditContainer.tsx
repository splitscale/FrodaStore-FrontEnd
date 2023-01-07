import React, { useState } from "react";
import axios from "axios";
import { UrlContainer } from "../lib/container/UrlContainer";

interface Props {
  container: UrlContainer;
  onEdit: (editedContainer: UrlContainer) => void;
}

export const EditContainer: React.FC<Props> = ({ container, onEdit }) => {
  const [title, setTitle] = useState(container.title);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const editedContainer = { ...container, title };
      const url = `http://jsonplaceholder.typicode.com/posts/${container.id}`;
      await axios.put(url, editedContainer);
      onEdit(editedContainer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        value={title}
        className="py-1 w-50 mr-1"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-info py-1">Save</button>
    </form>
  );
};
