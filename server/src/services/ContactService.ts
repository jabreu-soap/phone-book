import { PrismaClient } from "@prisma/client";

class ContactService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    /*
    * Get all contacts
    */
    async getContacts() {
        return await this.prisma.contact.findMany();
    }

    /*
    * Get a contact by id
    */
    async getContactById(id: number) {
        return await this.prisma.contact.findUnique({
            where: {
                id
            }
        });
    }

    /*
    * Get a contact by last name
    */
    async getContactsByLastName(data: any) {
        const { lastName } = data;
        
        return await this.prisma.contact.findMany({
            where: {
                lastName: {
                    contains: lastName
                }
            }
        });
    }

    /*
    * Create a new contact
    */
    async createContact(data: any) {
        const {
            firstName,
            lastName,
            phoneNumber
        } = data;

        return await this.prisma.contact.create({
            data: {
                firstName,
                lastName,
                phoneNumber
            }
        });
    }

    /*
    * Update a contact
    */
    async updateContact(id: number, data: any) {
        const {
            firstName,
            lastName,
            phoneNumber
        } = data;
        
        return await this.prisma.contact.update({
            where: {
                id
            },
            data: {
                firstName,
                lastName,
                phoneNumber
            }
        });
    }

    /*
    * Delete a contact
    */
    async deleteContact(id: number) {
        return await this.prisma.contact.delete({
            where: {
                id
            }
        });
    }
}

export {
    ContactService
};