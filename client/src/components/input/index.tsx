interface InputProps {
    icon?: React.ReactNode;
    placeholder: string;
    value: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {

    function handleOnChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
        if(props.onChange)
            props.onChange(e);
    }

    return (
        <div className="flex flex-row items-center gap-2 w-full border border-gray-300 rounded-md bg-white">
            {props.icon}
            <input 
                name={props.name}
                type="text" 
                className="w-full outline-none font-medium p-2 rounded-md" 
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleOnChangeValue}/>
        </div>
    )
}