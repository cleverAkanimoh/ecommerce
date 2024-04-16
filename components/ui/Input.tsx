"use client";

import {
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const FormFieldClassName =
  "peer block w-full h-10 rounded-md border-2 border-purple-100 py-[9px] pl-10 text-sm outline-2 font-lusitana placeholder:text-gray-500 text-gray-700 focus:ring-purple-950 focus:ring-2 focus:border-transparent";

type InputProps = {
  Icon: React.ElementType;
  className?: string;
  type?: string;
  label?: string;
  helpText?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string;
  value?: string | number | readonly string[];
  id?: string;
  error?: string;
  defaultValue?: string | number | readonly string[];
  maxWidth?: string;
  optional?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

export const Input = ({
  Icon,
  className,
  type,
  label,
  helpText,
  maxWidth,
  placeholder,
  name,
  value,
  id,
  error,
  onChange,
  defaultValue,
  optional = false,
  readOnly = false,
  disabled = false,
}: InputProps) => {
  const [seePass, setSeePass] = React.useState(false);

  return (
    <div className={`${className} space-y-1`}>
      <LabelWithHelpText
        id={id}
        label={label}
        optional={optional}
        helpText={helpText}
      />

      <fieldset className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          {name}
        </label>
        <input
          type={type === "password" ? (seePass ? "text" : "password") : type}
          id={id}
          name={name}
          value={value}
          step={type === "number" ? "0.01" : undefined}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          style={{ maxWidth }}
          className={FormFieldClassName}
          disabled={disabled}
          readOnly={readOnly}
          required={!optional}
          aria-describedby={`${name}-error`}
        />
        <Icon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        {type === "password" && (
          <button
            type="button"
            title={seePass ? "hide" : "see"}
            onClick={() => setSeePass(!seePass)}
          >
            {seePass ? (
              <EyeSlashIcon className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            ) : (
              <EyeIcon className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            )}
          </button>
        )}
      </fieldset>
      <div id={id} aria-live="polite" aria-atomic="true">
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export const LabelWithHelpText = ({
  label,
  optional,
  id,
  helpText,
}: {
  label?: string;
  optional?: boolean;
  id?: string;
  helpText?: string;
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="flex gap-0.5 px-1 w-fit">
          <span className="capitalize xs:text-sm">{label}</span>
          {optional ? (
            <span className="text-gray-400 text-[10px]">{"(optional)"}</span>
          ) : (
            <span className="text-red-500 text-[10px]">*</span>
          )}
          {helpText && (
            <div className="relative h-fit group z-[500]">
              <p className="absolute invisible opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -left-3 bottom-6 w-56 xs:w-48 m-auto text-sm text-gray-700 bg-white p-2 rounded-md border border-purple-100 transition-all duration-300 after:size-3 after:bg-white after:border-b after:border-r after:border-purple-100 after:absolute after:rotate-45 after:left-3 after:-bottom-1.5 after:rounded-none font-lusitana">
                {helpText}
              </p>
              <InformationCircleIcon className="w-5 xs:w-3.5 text-gray-400 group-hover:text-black cursor-pointer" />
            </div>
          )}
        </label>
      )}
    </>
  );
};
