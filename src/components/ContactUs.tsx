interface ContactUsProps {
    tittle: string;
    type?: "white" | "black";
    onOpenForm: () => void;
}

function ContactUs({ tittle, type = "white", onOpenForm }: ContactUsProps) {
    return (
        <div className="contactUs-container">
            <div className={`contactUs ${type === "white" ? "type-white" : "type-black"}`}>
                <span className="point"></span>{tittle}
            </div>
            <span className={`line ${type === "white" ? "type-white" : "type-black"}`}></span>
            <div
                className={`contactUs-info ${type === "white" ? "type-white" : "type-black"}`}
                onClick={onOpenForm}
                style={{ cursor: "pointer" }}
            >
                СВЯЗАТЬСЯ С НАМИ
            </div>
        </div>
    );
}

export default ContactUs;
