import { Control } from "react-hook-form";
import { IFormData } from "../../pages/Login/type";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<IFormData, any>;
    name: "email" | "password";
    errorMessage?: string;
}