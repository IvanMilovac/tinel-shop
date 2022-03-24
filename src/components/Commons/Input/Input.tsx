import classnames from "classnames";
import React from "react";

import "./Input.scss";

interface IProps {
  inputClass?: string;
  label?: string;
  error?: string;
  type?:
    | "text"
    | "checkbox"
    | "email"
    | "password"
    | "file"
    | "date"
    | "select";
  placeholder?: string;
  name: string;
  onChange: (e: any) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.Ref<any>;
  value?: string;
  options?: any;
}

export const Input: React.FC<IProps> = React.forwardRef((props, ref) => {
  const { inputClass = "input", label, error, onKeyUp, ...rest } = props;
  return (
    <div className={inputClass}>
      <div className="input__label-container">
        {label && (
          <label htmlFor={rest.name} className="input__label">
            {label}
          </label>
        )}
        {error && (
          <p className={classnames("input__error", error && "error")}>
            {error}
          </p>
        )}
      </div>
      {rest?.type !== "select" ? (
        <input
          {...rest}
          ref={ref}
          onKeyUp={onKeyUp}
          className={classnames("input__input", error && "input-error")}
        />
      ) : (
        <select
          {...rest}
          name="gender"
          className={classnames("input__input", error && "input-error")}
          ref={ref}
        >
          {rest?.options?.map((item: any) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
});
