type TitleProps = {
    title: string;
    className?: string;
};

export default function SubTitle({title, className}: TitleProps) {
    return (
        <>
             <h1 className={`thin-font text-9xl lg:text-9xl text-[#031728] ${className}`}>
             {title}
            </h1>
        </>
    )
}