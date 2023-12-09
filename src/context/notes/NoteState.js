import NoteContext from "./NoteContext";
import { useState } from "react";
import axios from 'axios';

const NoteState = (props) => {
  const host_url = "http://localhost:5000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);


  const getNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notes/fetchnotes', {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMmRiM2U5MzZhZGMwNGE0NDkzY2M0In0sImlhdCI6MTY5MzYzOTMzMn0.ge-YB0drvdi_JVRc5BJF2KBgCR2lNwOLAzrnYWeZczo', // Replace with your actual token
        },
      });
  
    const jsonData = response.data;
    setNotes(jsonData.notes);
    console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  

  
    // Functionality to Add a Note.
  const addNote = async (title, description, tag) => {
    try {
      // API CALL
      const response = await fetch(`http://localhost:5000/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMmRiM2U5MzZhZGMwNGE0NDkzY2M0In0sImlhdCI6MTY5MzYzOTMzMn0.ge-YB0drvdi_JVRc5BJF2KBgCR2lNwOLAzrnYWeZczo",
        },
        body: JSON.stringify({ title, description, tag }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to add note");
      }
  
      const newNote = await response.json();
  
      // Update notes state with the new note using the spread operator
      setNotes(notes.concat(newNote));
      // setNotes([...notes, newNote]);
    } catch (error) {
      console.error(error);
      // Handle error appropriately
    }
  };


  // const addNote = async (title, description, tag) => {
  //   try {
  //     // API CALL
  //     const response = await axios.post(
  //       "http://localhost:5000/api/notes/addnotes",
  //       {
  //         title,
  //         description,
  //         tag,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "auth-token":
  //             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMmRiM2U5MzZhZGMwNGE0NDkzY2M0In0sImlhdCI6MTY5MzYzOTMzMn0.ge-YB0drvdi_JVRc5BJF2KBgCR2lNwOLAzrnYWeZczo",
  //         },
  //       }
  //     );
  
  //     if (response.status !== 200) {
  //       throw new Error("Failed to add note");
  //     }
  
  //     const newNote = response.data;
  
  //     // Update notes state with the new note using the spread operator
  //     setNotes([...notes, newNote]);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error appropriately
  //   }
  // };
  
  
  
  
  
  
  

  

  // Delete a Note.
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host_url}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMmRiM2U5MzZhZGMwNGE0NDkzY2M0In0sImlhdCI6MTY5MzYzOTMzMn0.ge-YB0drvdi_JVRc5BJF2KBgCR2lNwOLAzrnYWeZczo",
      },
    });
    const json = response.json();
    console.log(json);
    console.log(`Deleting Note with id` + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Update a Note.
  const updateNote_call = async (id, title, description, tag) => {
    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to Edit Note in Client.
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);

    //API CALL
    const response = await fetch(`${host_url}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMmRiM2U5MzZhZGMwNGE0NDkzY2M0In0sImlhdCI6MTY5MzYzOTMzMn0.ge-YB0drvdi_JVRc5BJF2KBgCR2lNwOLAzrnYWeZczo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, updateNote_call, deleteNote, getNotes,setNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
