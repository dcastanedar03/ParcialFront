/*import {useState} from "$preact/hooks";
import {FunctionComponent} from "preact";
import {JSX} from "preact";

export const Form: FunctionComponent = () => {
    const [error, setError] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const submitHandler = async (
        e: JSX.TargetedeEvent<HTMLFormElement, Event>
    ) => {
        e.preventDefault();
        const errorMsg: string[] = [];
        if (name === ""){
            error.Msg.push("Invalid contact. A field is empty, email is invalid, or the email is already in use.")
        }
        if (email === ""){
            error.Msg.push("Invalid contact. A field is empty, email is invalid, or the email is already in use.")
        }
        if (errorMsg.length > 0) setError(errorMsg.join(" | "));
        else {
            setError("");
            e.currentTarget.submit();
        }
    };
}; */