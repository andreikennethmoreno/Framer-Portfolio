type TitleProps = {
    title: string;
    textColor?: string;
};

export default function Title({title, textColor}: TitleProps) {
    return (
        <>
            <h1 className={`thin-font xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[7rem] text-[4rem] text-[${textColor}]`}>
             {title}
            </h1>
        </>
    )
}