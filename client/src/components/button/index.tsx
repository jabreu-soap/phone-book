type Theme = 'primary' | 'danger' | 'info' | 'success' | 'secondary';
type Size = 'small' | 'flex';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    size: Size;
    theme: Theme;
}

function getTheme(theme: Theme) {
    switch (theme) {
        case 'primary':
            return 'bg-blue-500 text-white';
        case 'danger':
            return 'bg-red-600 text-white';
        case 'info':
            return 'bg-blue-300 text-white';
        case 'success':
            return 'bg-green-600 text-white';
        case 'secondary':
            return 'bg-gray-300 text-gray-700';
    }
}

function getSize(size: Size) {
    switch (size) {
        case "small":
            return "h-10 w-10";
        default:
            return "h-10";
    }
}

export function Button(props: ButtonProps) {
    return (
        <button 
            className={`${getTheme(props.theme)} ${getSize(props.size)} p-2 rounded-md font-medium`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}