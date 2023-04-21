
import { useEffect, useState, useRef } from "react";
import { 
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  Button,
  Container,
  Header,
  Input,
  List,
} from "./components";
import api from "./infra/api";
import { Contact } from "./infra/types";
import { Modal } from "./components/modal";
import { Form } from "./components/form";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact>();
  const [search, setSearch] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, SetIsDeleting] = useState(false);
  const timingSearchRef = useRef<number>();

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    if(timingSearchRef.current)
      clearTimeout(timingSearchRef.current);

    timingSearchRef.current = setTimeout(async () => {
      const filteredContacts = await api.getContactsByLastName(search);
      setContacts(filteredContacts);
    }, 300);
  }, [search]);

  async function fetchContacts () {
    const contacts = await api.getContacts()
    setContacts(contacts);
  }

  function handleCloseModal() {
    setIsAdding(false);
    setIsEditing(false);
    SetIsDeleting(false);
    setSearch("");
    setContact(undefined);
  }

  async function handlePrepareEdit(id: number) {
    const contact = await api.getContactById(id);
    setContact(contact);
    setIsEditing(true);
  }

  async function handlePrepareDelete(id: number) {
    const contact = await api.getContactById(id);
    setContact(contact);
    SetIsDeleting(true);
  }

  async function handleSaveContact(item?: Contact) {
    if(!item) return;
    await api.createContact(item);
    handleCloseModal();
    await fetchContacts();
  }

  async function handleDeleteContact(item?: Contact) {
    if(!item) return;
    await api.deleteContact(item.id);
    handleCloseModal();
    await fetchContacts();
  }

  return (
    <>
      <section className="h-screen w-screen bg-gray-200 flex flex-row justify-center items-start">

        {/* Container */}
        <Container>

          {/* Header */}
          <Header />

          {/* Actions */}
          <div className="flex flex-row justify-between items-center px-4 py-4">
            <span className="text-3xl font-medium">Contacts</span>
            <Button 
              theme="primary" 
              size="flex"
              onClick={() => setIsAdding(true)} >
                + Add Contact
            </Button>
          </div>

          {/* Filter */}
          <div className="px-4">
            <Input 
              placeholder="Search for contact by last name..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={
                <FontAwesomeIcon icon={faSearch} className="text-gray-500 pl-2"/>
              }/>
          </div>

          {/* Contacts */}
          <div className="p-4">
            <List 
              contacts={contacts} 
              onDelete={(id) => handlePrepareDelete(id)} 
              onEdit={(id) => handlePrepareEdit(id)} />
          </div>

        </Container>
        
        {/* Create and Update Form */}
        {(isAdding || isEditing) && (
          <Modal
            buttons={(
              <>
                <Button theme="success" size="flex" onClick={() => handleSaveContact(contact)}>{isEditing ? "Update" : "Create"}</Button>
                <Button theme="secondary" size="flex" onClick={handleCloseModal}>Cancel</Button>
              </>
            )}>
            <Form onChange={(item) => setContact(item)} contact={isEditing ? contact : undefined}/>
          </Modal>
        )}

        {/* Delete Popup Warning */}
        {isDeleting && (
          <Modal
            buttons={(
              <>
                <Button theme="danger" size="flex" onClick={() => handleDeleteContact(contact)}>Delete</Button>
                <Button theme="secondary" size="flex" onClick={handleCloseModal}>Cancel</Button>
              </>
            )}>
            <div className="flex flex-col">
              <span>Are you sure you whant delete the this contact?</span>
              <span className="font-medium text-xl">{`${contact?.firstName} ${contact?.lastName}`}</span>
            </div>
          </Modal>
        )}

      </section>

    </>
  )
}

export default App
