import {FC} from "react";
// @ts-ignore
import redDot from "../img/redDot.svg"

interface TextForMainPageI {
    text: string[];
}


export const TextForMainPage: FC<TextForMainPageI> = ({
    text
}) => {

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "90px",
                gap: "16px",
            }}
            // className="bullet-list"
        >
            {
                text.map((item, index) => (
                    <TextItem key={index} text={item} />
                    // <div key={index} className="bullet-item">
                    //     <span className="bullet-dot" />
                    //     <span className="bullet-text">{item}</span>
                    // </div>
                ))
            }
        </div>
    )
}

const TextItem = ({text}) => {

    return (
        <div
            style={{
                display: "flex",
                gap: "8px",
                width: "275px",
                fontSize: "18px",
                lineHeight: "100%",
                fontWeight: 400,
                color: "#fff"
            }}
        >
            <div>
                <img
                    src={redDot}
                    alt={""}
                />
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}