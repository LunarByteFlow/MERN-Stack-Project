import React, { useContext} from "react";
import NoteContext from "../context/notes/NoteContext";
import Alert from "../components/Alert";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note,updateNote } = props;

  const handleDeleteNote = () => {
    deleteNote(note._id);
    <Alert/>
  };
  return (
    <>
      <div>
        <div className="bg-pink-200 rounded-lg p-6 hover:bg-pink-300 transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold text-pink-800 mb-2">
            {note.title}
          </h2>
          <p className="text-gray-700">{note.tag}</p>

          <p className="text-gray-700">{note.description}</p>
          <i
            className="fa-solid fa-trash mx-2 cursor-pointer"
            onClick={handleDeleteNote}
          ></i>
          <i
            className="fa-regular fa-pen-to-square mx-2 cursor-pointer btn "
            type="button" onClick = {()=>{updateNote(note)}}
            data-bs-toggle="modal" // This will invoke the modal dialog.
            data-bs-target="#staticBackdrop" // This will invoke the modal dialog.
          ></i>
        </div>



      </div>

      {/* <!-- Button trigger modal --> */}

      
    </>
  );
};

export default NoteItem;
