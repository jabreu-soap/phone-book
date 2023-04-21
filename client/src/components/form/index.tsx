import { Input } from "..";
import { useState } from "react"
import { Contact } from "../../infra/types";

interface FormProps {
    onChange: (contact: Contact) => void;
    contact?: Contact;
}

export function Form(props: FormProps) {

    const [contact, setContact] = useState<Contact>({
        id: props?.contact?.id ?? 0,
        firstName: props?.contact?.firstName ?? "",
        lastName: props?.contact?.lastName ?? "",
        phoneNumber: props?.contact?.phoneNumber ?? "",
    });

    function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        const updatedContact = {
            ...contact,
            [name]: value,
        };

        setContact(updatedContact);
        props.onChange(updatedContact);
    }

    return (
        <form>
            <div className="py-2">
                <label>First Name</label>
                <Input 
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleFieldChange}
                    placeholder="Fist Name" />
            </div>

            <div className="py-2">
                <label>Last Name</label>
                <Input 
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleFieldChange}
                    placeholder="Last Name" />
            </div>

            <div className="py-2">
                <label>Phone Number</label>
                <Input 
                    name="phoneNumber"
                    value={contact.phoneNumber}
                    onChange={handleFieldChange}
                    placeholder="Phone Number" />
            </div>
        </form>
    );

}