import React, { useState } from "react";
import Navbar from "@Layouts/Navbar";
import Sidebar from "@Layouts/Sidebar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Modal from "react-modal";

const localizer = momentLocalizer(moment);

const AgendaItem = ({ event, onEdit, onDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <strong>{event.title}</strong>
      <p>{event.resource}</p>
      <p>Time: {event.time}</p>
      <button onClick={openModal} className="bg-blue-500 text-white">
        Edit
      </button>
      <button onClick={() => onDelete(event)} className="bg-red-500">
        Delete
      </button>

      {/* Modal for Edit */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Agenda"
      >
        <h2>Edit Agenda</h2>
        {/* Add your edit form or content here */}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

const Index = () => {
  // Events for the Calendar component
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Agenda 1",
      start: new Date(2023, 8, 25, 10, 0), // Perbaiki indeks bulan menjadi 8 (September) dan tambahkan getHours()
      end: new Date(2023, 8, 25, 11, 0), // Perbaiki indeks bulan menjadi 8 (September) dan tambahkan getHours()
      resource: "Agenda 1 Details",
      time: "10.00",
    },

    {
      id: 2,
      title: "Today",
      start: new Date(new Date().setHours(new Date().getHours() - 9)),
      end: new Date(new Date().setHours(new Date().getHours() - 4)),
      time: "11.00",
    },
    // Add more agenda items with dates
  ]);

  const handleEdit = (editedEvent) => {
    // Implement edit logic here
    // Anda dapat mengakses editedEvent untuk memperbarui data Anda
  };

  const handleDelete = (deletedEvent) => {
    const updatedEvents = events.filter(
      (event) => event.id !== deletedEvent.id
    );
    setEvents(updatedEvents);
  };

  return (
    <>
      <Navbar className="relative" />
      <div className="flex bg-slate-50">
        <Sidebar />
        <section className="h-[90vh] overflow-auto w-full">
          <div className="container mx-auto px-6 py-16">
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
                Ayo cek jadwalmu!
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Pantau jadwalmu dan modifikasi tanggal sesuai kebutuhanmu
              </p>

              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }} // Set the height of the calendar
                defaultDate={moment().toDate()}
                onSelectEvent={(event) => {
                  onEdit(event);
                }}
                views={["month", "week", "day"]} // Enable week and day views
                popup
                components={{
                  event: AgendaItem,
                }}
                eventPropGetter={(event) => ({
                  style: {
                    backgroundColor: "#abcdef",
                  },
                })}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
