import { faPhone, faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { Contact } from "../../infra/types";

interface ItemProps {
    contact: Contact;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

export function Item(props: ItemProps) {
    return (
        <div className="flex flex-row justify-between items-center  p-3 border-b">
            <div className="flex flex-col gap-1">
                <span className="font-medium text-2xl">{props.contact.firstName} {props.contact.lastName}</span>
                <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faPhone} className="w-3 h-3 text-gray-400"/>
                <span className="font-medium text-base text-gray-500">{props.contact.phoneNumber}</span>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <Button
                    theme="danger" 
                    size="small"
                    onClick={() => props.onDelete(props.contact.id)} >
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </Button>

                <Button
                    theme="info" 
                    size="small"
                    onClick={() => props.onEdit(props.contact.id)} >
                    <FontAwesomeIcon icon={faPen}/>
                </Button>
            </div>
        </div>
    );
}