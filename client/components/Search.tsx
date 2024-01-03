"use client";
import * as React from "react";
import { Input } from "./ui/input";

type searchInputProps = {
  value: string,
  onChange: (value: string) => void,
  placeholder: string
};

const Search: React.FC<searchInputProps> = ({
  value,
  onChange,
  placeholder
}) => {
  return (
    <div className="w-full flex items-center px-3 border shadow-sm mx-3 rounded-3xl ">
      <i className="fi fi-rr-search leading-[0] text-base text-zinc-500" />
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="border-none w-full shadow-none focus-visible:ring-0 leading-3"
      />
    </div>
  );
};

export default Search;
