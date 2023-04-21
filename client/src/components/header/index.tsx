import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {

    return (
        <div className="flex flex-row justify-center items-center gap-4 py-8">
            <FontAwesomeIcon icon={faAddressBook} className="h-10 w-10"/>
            <h1 className="text-5xl font-medium">Phone Book App</h1>
        </div>
    );
}