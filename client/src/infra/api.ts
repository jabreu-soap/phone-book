import axios, { AxiosInstance } from "axios";
import { Contact } from "./types";

class Api {
    private api : AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:3000",
        });
    }

    getContacts = async () => {
        const { data } = await this.api.get<Contact[]>("/contacts");
        return data;
    }

    getContactById = async (id: number) => {
        const { data } = await this.api.get<Contact>(`/contacts/${id}`);
        return data;
    }

    getContactsByLastName = async (lastName: string) => {
        const { data } = await this.api.post<Contact[]>("/search", { lastName });
        return data;
    };

    createContact = async (contact: Contact) => {
        if(contact.id) {
            return this.updateContact(contact);
        }
        const { data } = await this.api.post<Contact>("/contacts", contact);
        return data;
    };

    updateContact = async (contact: Contact) => {
        const { data } = await this.api.put<Contact>(`/contacts/${contact.id}`, contact);
        return data;
    };

    deleteContact = async (id: number) => {
        const { data } = await this.api.delete<Contact>(`/contacts/${id}`);
        return data;
    };
}

export default new Api();