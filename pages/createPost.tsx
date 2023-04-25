import Popup from "@/components/Popup";
import { useState } from "react";
import Layout from "../components/Layout";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [media, setMedia] = useState("");
  const [content, setContent] = useState("");
  const [popup, setPopup] = useState({ message: "", visible: false });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(
      "https://antoinesrvt-gmailcom-antoine-servant.payloadcms.app/api/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          date: "00-00-00",
          author,
          media,
          content,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setPopup({ message: "Post added successfully!", visible: true });
      alert("Post added successfully!");
    } else {
      setPopup({
        message: "Error adding the post. Please try again.",
        visible: true,
      });
      alert(`Error: ${data.error}`);
    }

    setTitle("");
    setAuthor("");
    setMedia("");
    setContent("");

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setPopup({ message: "", visible: false });
    }, 3000);
  };

  return (
    <Layout title="Add Post">
      <Popup message={popup.message} visible={popup.visible} />
      <form
        className="container grid grid-col text-secondary"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="media">Media</label>
        <input
          type="text"
          id="media"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button type="submit">Add Post</button>
      </form>
    </Layout>
  );
};

export default CreatePost;
