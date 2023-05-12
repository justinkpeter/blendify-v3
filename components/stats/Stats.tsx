import React, {ReactNode} from "react";

type StatsProps = {
    children: ReactNode;
};
export const Stats: React.FC<StatsProps> = ({ children }) => {
    return (
        <>
            <div className={' w-full flex h-screen relative content'}>
                {children}
            </div>
        </>
    );
};