import { ReactNode } from "react";

type ContentType = {
    content: ReactNode;
  };

export default function ContentLayout ({content}:  ContentType) {
    return (
        <>
            <div className=" sticky z-30  bg-base-100 min-h-screen">
                {content}
            </div>
        </>
    )
}