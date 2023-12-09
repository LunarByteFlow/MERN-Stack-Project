import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [Note, setNote] = useState({
    title: "No title Added here",
    description: "No description Added here",
    tag: "general",
  });
  const HandleAddNotesOnClick = (e) => {
    e.preventDefault();
    addNote(Note._id, Note.title, Note.description, Note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const handleChange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center container-fluid bg-slate-400">
        <form className="bg-white rounded-lg p-8 shadow-lg w-96 space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Add a New Note 
          </h2>
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm text-gray-600">
              Note Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              minLength={5}
              className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400"
              placeholder="Enter note title"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="tag" className="text-sm text-gray-600">
              Category
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400"
              placeholder="Enter category"
              minLength={5}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm text-gray-600">
              Note Content
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400"
              placeholder="Enter note content"
              rows="4"
              minLength={5}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={HandleAddNotesOnClick}
              className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300"
              disabled={
                Note.title.length < 5 ||
                Note.description.length < 5 ||
                Note.tag.length < 5
              }
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNote;
