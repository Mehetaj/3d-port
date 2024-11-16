
interface Props {
    children: JSX.Element | string | JSX.Element[]
}

const Container = ({children} : Props) => {
    return (
        <div className="container mx-auto px-2 ">
            {children}
        </div>
    );
};

export default Container;