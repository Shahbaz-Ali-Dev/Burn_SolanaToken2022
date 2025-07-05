import { FC } from "react";

interface TruncatedStringProps {
    str: string;
    maxLength?: number; // Make maxLength optional
}

const truncateString: FC<TruncatedStringProps> = ({ str, maxLength = 10 }): string => {
    if (str.length <= maxLength) return str;

    const start = str.slice(0, Math.ceil(maxLength / 2));
    const end = str.slice(-Math.floor(maxLength / 2));

    return `${start}...${end}`;
};
export default truncateString;
