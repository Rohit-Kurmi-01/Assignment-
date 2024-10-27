

interface InputFieldProps {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, id, placeholder , value = '' , onChange }) => {
    return (
        <div className="input-container">
            <label htmlFor={id} className="block text-gray-700">{label}</label>
            <input type={type} id={id} className="w-full px-3 py-2 border rounded" placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    );
};

export default InputField;