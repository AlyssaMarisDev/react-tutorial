import { ChangeEvent, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

interface MoneyInputProps {
  onChange: (value: number) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: string;
  register?: UseFormRegister<any>;
  name: string;
  required?: boolean;
}

const MoneyInput = forwardRef<HTMLInputElement, MoneyInputProps>(
  (
    {
      onChange,
      label,
      placeholder = "0.00",
      className = "",
      disabled = false,
      error,
      register,
      name,
      required = false,
    },
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      // Allow empty input
      if (inputValue === "") {
        onChange(0);
        return;
      }

      // Only allow numbers and one decimal point
      if (!/^\d*\.?\d{0,2}$/.test(inputValue)) {
        return;
      }

      // Convert to number and update parent component
      const numericValue = parseFloat(inputValue);
      onChange(numericValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Allow: backspace, delete, tab, escape, enter
      if (
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Tab" ||
        e.key === "Escape" ||
        e.key === "Enter"
      ) {
        return;
      }

      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "a" || e.key === "c" || e.key === "v" || e.key === "x")
      ) {
        return;
      }

      // Handle decimal point
      if (e.key === ".") {
        const input = e.currentTarget;
        // Prevent if there's already a decimal point
        if (input.value.includes(".")) {
          e.preventDefault();
          return;
        }
        return;
      }

      // Prevent any other key if it's not a number
      if (!/^\d$/.test(e.key)) {
        e.preventDefault();
      }
    };

    return (
      <div className={`form-group ${className}`}>
        {label && (
          <label className="form-label">
            {label} {required && <span className="text-danger">*</span>}
          </label>
        )}
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            type="text"
            className={`form-control ${error ? "is-invalid" : ""}`}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            inputMode="decimal"
            ref={ref}
            {...(register && register(name, { valueAsNumber: true }))}
          />
        </div>
        {error && <div className="text-danger">{error}</div>}
      </div>
    );
  }
);

MoneyInput.displayName = "MoneyInput";

export default MoneyInput;
