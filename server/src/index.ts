import express from "express";
import cors from "cors";
import { ContactService } from "./services/ContactService";

const app = express();

app.use(cors());
app.use(express.json());

// Services
const contactService = new ContactService();

app.get("/contacts", async (req, res) => {
    const contacts = await contactService.getContacts();
    res.json(contacts);
});

app.get("/contacts/:id", async (req, res) => {
    const { id } = req.params;
    const contact = await contactService.getContactById(parseInt(id));

    res.json(contact);
});

app.post("/contacts", async (req, res) => {
    const contact = await contactService.createContact(req.body);
    res.json(contact);
});

app.post("/search", async (req, res) => {
    const contact = await contactService.getContactsByLastName(req.body);
    res.json(contact);
});

app.put("/contacts/:id", async (req, res) => {
    const { id } = req.params;
    const contact = await contactService.updateContact(parseInt(id), req.body);

    res.json(contact);
});

app.delete("/contacts/:id", async (req, res) => {
    const { id } = req.params;
    const contact = await contactService.deleteContact(parseInt(id));

    res.json(contact);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});