import React, { useEffect, useState, useContext, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import LoadingSpinner from "./LoadingSpinner";

const Displaynotes = () => {
  const context = useContext(NoteContext);
  const { getNotes, notes, updateNote_call } = context;
  const [loading,setloading] = useState(false);

  const [Note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  // const [notes, setNotes] = useState([]);

  useEffect(() => {
    setloading(true);
    getNotes();
    setloading(false);
  }, []);

  const ref = useRef("");
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleChange = (e) => {
    const value = setNote({ ...Note, [e.target.name]: e.target.value });
    console.log({ ...Note, [e.target.name]: e.target.value });
  };
  const HandleClick = (e) => {
    e.preventDefault();
    updateNote_call(Note.id, Note.etitle, Note.edescription, Note.etag);
  };
  return (
    <>
      <div className=" bg-slate-200 container-fluid py-5">
        {loading ?( <LoadingSpinner/>):(
          <main className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 container-fluid">
          {notes && notes.length !== 0
            ? notes.map((note) => {
                return (
                  <NoteItem
                    note={note}
                    updateNote={updateNote}
                    key={note._id}
                  />
                );
              })
            : (setTimeout(() => {
              <LoadingSpinner/>
            }, 0.002))}
        </main>
        )}
        <main className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 container-fluid">
          {notes && notes.length !== 0
            ? notes.map((note) => {
                return (
                  <NoteItem
                    note={note}
                    updateNote={updateNote}
                    key={note._id}
                  />
                );
              })
            : `Loading Notes...`}
        </main>
      </div>

      {/* <!-- Modal --> */}
      <div
        ref={ref}
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center"
                id="staticBackdropLabel"
              >
                Update Your Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Adding Form for Updations over here */}
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="etitle"
                  name="etitle"
                  className="form-control"
                  id="etitle"
                  placeholder="Enter New title"
                  onChange={handleChange}
                  value={Note.etitle}
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Tag
                </label>
                <input
                  type="etag"
                  name="etag"
                  className="form-control"
                  id="etag"
                  placeholder="Enter New title"
                  onChange={handleChange}
                  value={Note.etag}
                  minLength={5}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="edescription"
                  className="block text-gray-700 font-medium"
                >
                  Note
                </label>
                <textarea
                  id="edescription"
                  name="edescription"
                  rows="4"
                  className="w-full border border-gray-400 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  onChange={handleChange}
                  value={Note.edescription}
                  minLength={5}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
                onClick={HandleClick}
                disabled={
                  Note.etitle.length < 5 ||
                  Note.edescription.length < 5 ||
                  Note.etag.length < 5
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Displaynotes;
