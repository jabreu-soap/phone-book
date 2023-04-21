import { Contact } from "../../infra/types";
import { Item } from "./item-list";

interface ListProps {
    contacts: Contact[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

export function List(props: ListProps) {
    return (
        <div className="bg-white border border-gray-300 rounded-md ">
            {props.contacts.map(contact => (
                <Item 
                    key={contact.id}
                    contact={contact}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}/>
            ))}
        </div>
    );
}