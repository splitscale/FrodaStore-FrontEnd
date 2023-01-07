import React, { useState } from "react";
import axios from "axios";
import { UrlContainer } from "../lib/container/UrlContainer";

interface Props {
  link: UrlContainer;
  onEdit: (editedLink: UrlContainer) => void;
}

export const EditLink: React.FC<Props> = ({ link, onEdit }) => {
  const [title, setTitle] = useState(link.title);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const editedContainer = { ...link, title };
      const url = `http://jsonplaceholder.typicode.com/posts/${link.id}`;
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
