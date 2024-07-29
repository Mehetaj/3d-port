interface TitleProps {
    heading: string;
    description: string;
}

const Title: React.FC<TitleProps> = ({ heading, description }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center mt-12">
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="text-gray-600 font-semibold">{description}</p>
        </div>
    );
};

export default Title;