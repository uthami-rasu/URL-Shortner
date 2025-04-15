import Select, { components } from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOptions } from "../Utils/filterSlice";

const options = [
  { value: "49960de5", label: "Facebook" },
  { value: "bbcc74f6", label: "Instgram" },
  { value: "razz3", label: "Razz 3" },
  { value: "razz4", label: "Razz 4" },
  { value: "razz5", label: "Razz 5" },
  { value: "razz6", label: "Razz 6" },
  { value: "razz7", label: "Razz 7" },
  { value: "razz8", label: "Razz 8" },
  { value: "razz9", label: "Razz 9" },
  { value: "razz10", label: "Razz 10" },
];

// Custom Option with tick ✅
const CustomOption = (props) => {
  const { isSelected, label, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 scrollbar-custom"
    >
      <span>{isSelected ? "☑️" : "⬜"}</span>
      <span>{label}</span>
    </div>
  );
};

const CustomValueContainer = ({ children, ...props }) => {
  const [values, input] = children;

  return (
    <components.ValueContainer {...props}>
      <div
        className={`w-full ${
          props.hasValue
            ? "flex flex-wrap overflow-y-auto max-h-[48px] pr-2 scrollbar-hide scrollbar-custom"
            : "flex items-center" // <-- add flex center for placeholder
        }`}
      >
        {values}
        {input}
      </div>
    </components.ValueContainer>
  );
};

const Filter = () => {
  const selectedOptions = useSelector(
    (store) => store?.filters.selectedOptions
  );

  const filterOptions = useSelector((store) => store?.filters.filterOptions);

  const testOptions = filterOptions.map((item) => ({
    value: item.shortUrl,
    label: item?.name || `No Title(${item.shortUrl})`,
  }));

  console.log(testOptions);

  const dispatch = useDispatch();

  const handleChange = (selected) => {
    dispatch(setSelectedOptions(selected));
  };

  return (
    <div className="w-full p-4 flex  flex-col justify-between items-center gap-4 md:flex-row">
      <h1 className="text-2xl font-semibold font-[Poppins]">Filters</h1>

      <div className="flex items-center gap-2 w-full md:w-1/3">
        <span className="py-2 text-white rounded-md">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/filter--v1.png"
            alt="filter--v1"
          />
        </span>

        <Select
          options={testOptions || []}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          value={selectedOptions}
          onChange={handleChange}
          placeholder="Search or select"
          noOptionsMessage={() => "No matches"}
          className="w-full text-center font-[Poppins] scrollbar-custom"
          components={{
            Option: CustomOption,
            ValueContainer: CustomValueContainer,
          }}
          styles={{
            control: (base, state) => ({
              ...base,
              minHeight: "48px",
              borderRadius: "0.5rem",
              borderColor: state.isFocused ? "#60a5fa" : base.borderColor,
              boxShadow: state.isFocused ? "0 0 0 1px orange" : base.boxShadow,
              textAlign: "center",
              "&:hover": {
                borderColor: "orangered",
              },
            }),
            placeholder: (base) => ({
              ...base,
              textAlign: "left",
              width: "100%",
              color: "#9ca3af", // nice subtle grey color
            }),
            // ❌ REMOVE `valueContainer` here
            multiValue: (base) => ({
              ...base,
              backgroundColor: "#e0f2fe",
              borderRadius: "9999px",
              padding: "2px 8px",
              fontSize: "14px",
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: "#0369a1",
              fontWeight: "500",
            }),
            multiValueRemove: (base) => ({
              ...base,
              color: "#0369a1",
              ":hover": {
                backgroundColor: "orangered",
                color: "#0c4a6e",
              },
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
