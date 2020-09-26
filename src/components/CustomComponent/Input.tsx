import React from 'react';

// Construct types for component props
interface InputProps {
    type?: string;
    value?: string;
    onChange?: (newValue: string) => void;
    label?: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    type,
    value = '',
    onChange = () => {},
    label = '',
    className,
    inputClassName,
    labelClassName,
    placeholder = '',
}) => {
    className = `Input-Wrapper${className ? ' ' + className : ''}`;
    inputClassName = `Input-Container${inputClassName ? ' ' + inputClassName : ''}`;
    labelClassName = `Input-Label${labelClassName ? ' ' + labelClassName : ''}`;

    return (
        <React.Fragment>
            <div className={className}>
                <input
                    type="text"
                    value={value}
                    onChange={({ currentTarget: {value} }) => onChange(value)}
                    className={inputClassName}
                    placeholder={placeholder}
                />
                <p
                    className={labelClassName}
                    data-has-value={!!value}
                >{label}</p>
            </div>
        </React.Fragment>
    );
};

export default Input;