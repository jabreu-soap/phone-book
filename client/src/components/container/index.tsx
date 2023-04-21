interface ContainerProps {
    children: React.ReactNode;
}

export function Container(props: ContainerProps) {

    return (
        <div className="w-full max-w-3xl">
            {props.children}
        </div>
    );
}