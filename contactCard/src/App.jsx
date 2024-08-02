import ContctCard from "./components/contactCard";

export default function App() {
  const contacts = [
    { name: "Sarika EP", phone: "8590696062", email: "epsarika2004@gmail.com", image: "./sarika-photo-copy.jpg" },
    { name: "Sarika EP", phone: "8590696062", email: "epsarika2004@gmail.com", image: "./sarika-photo-copy.jpg" },
    { name: "Sarika EP", phone: "8590696062", email: "epsarika2004@gmail.com", image: "./sarika-photo-copy.jpg" },
    { name: "Sarika EP", phone: "8590696062", email: "epsarika2004@gmail.com", image: "./sarika-photo-copy.jpg" },
    { name: "Sarika EP", phone: "8590696062", email: "epsarika2004@gmail.com", image: "./sarika-photo-copy.jpg" },
  ];
  return (
    <div>
      <header>
        <h1>Contact Cards</h1>
        <hr />
      </header>

      <div className="contact-cards">
        {contacts.map((contact) => {
          return (
            <ContctCard name={contact.name} phone={contact.phone} email={contact.email} image={contact.image} />
          );
        })}
      </div>
    </div>
  );
}