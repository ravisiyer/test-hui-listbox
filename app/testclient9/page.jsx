"use client";
import Link from "next/link";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { getCookie, setCookie } from "cookies-next";

const peopleAllLanguages = [
  [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ],
  [
    { id: 11, name: "Hindi Durward Reynolds" },
    { id: 12, name: "Hindi Kenton Towne" },
  ],
  [
    { id: 21, name: "Sanskrit Durward Reynolds" },
    { id: 22, name: "Sanskrit Kenton Towne" },
    { id: 23, name: "Sanskrit Therese Wunsch" },
    { id: 24, name: "Sanskrit Benedict Kessler" },
    { id: 25, name: "Sanskrit Katelyn Rohan" },
    { id: 26, name: "Sanskrit id 26" },
    { id: 27, name: "Sanskrit id 27" },
  ],
];

export function Example({
  peopleLanguageIndex,
  selectedPeopleAllLanguages,
  setSelectedPeopleAllLanguages,
}) {
  function handleSelectAllClick() {
    let x = selectedPeopleAllLanguages.map(
      (selectedPeopleByLanguage, index) => {
        return index === peopleLanguageIndex
          ? [...peopleAllLanguages[peopleLanguageIndex]]
          : selectedPeopleByLanguage;
      }
    );
    setSelectedPeopleAllLanguages(x);
  }
  function handleClearAllClick() {
    let x = selectedPeopleAllLanguages.map(
      (selectedPeopleByLanguage, index) => {
        return index === peopleLanguageIndex ? [] : selectedPeopleByLanguage;
      }
    );
    setSelectedPeopleAllLanguages(x);
  }

  function onListBoxChange(value) {
    let x = selectedPeopleAllLanguages.map(
      (selectedPeopleByLanguage, index) => {
        return index === peopleLanguageIndex ? value : selectedPeopleByLanguage;
      }
    );
    setSelectedPeopleAllLanguages(x);
  }
  return (
    <Listbox
      value={selectedPeopleAllLanguages[peopleLanguageIndex]}
      onChange={onListBoxChange}
      multiple
    >
      <ListboxButton className="mb-2">Select Translators</ListboxButton>
      <div>
        <button
          onClick={handleSelectAllClick}
          className="border border-black rounded-md p-1"
        >
          Select All
        </button>
        <button
          onClick={handleClearAllClick}
          className="border border-black rounded-md p-1 ml-4"
        >
          Clear All
        </button>
      </div>
      {
        <div className="mt-2">
          <ListboxOptions static>
            {peopleAllLanguages[peopleLanguageIndex].map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="data-[selected]:bg-blue-400"
              >
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      }
    </Listbox>
  );
}

function Page() {
  // In code below, I had to add !== undefined to get around an error I was getting that JSON.parse
  // was given an undefined value. Original check which gave this error, was simply:
  // getCookie("selectedPeopleAllLanguages") ? JSON.parse(x) : ...
  // Don't know why undefined resolved to true in original check .. I thought undefined resolves to false
  // in such checks. Don't have time to investigate it and so will use the working code below.
  let x;
  const [selectedPeopleAllLanguages, setSelectedPeopleAllLanguages] = useState(
    (x = getCookie("selectedPeopleAllLanguages")) !== undefined
      ? JSON.parse(x)
      : [
          [peopleAllLanguages[0][0], peopleAllLanguages[0][1]],
          [peopleAllLanguages[1][0], peopleAllLanguages[1][1]],
          [peopleAllLanguages[2][0], peopleAllLanguages[2][1]],
        ]
  );

  function onSetSelectionsClick() {
    setCookie(
      "selectedPeopleAllLanguages",
      JSON.stringify(selectedPeopleAllLanguages)
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">Test9 Listbox component of headlessui/react</h2>
      <p>
        Adds saving selections to cookie and loading it from cookie; Improves UI
      </p>
      <div className="flex">
        {peopleAllLanguages.map((peopleByLanguage, index) => {
          return (
            <div key={`Ex-${index}`}>
              <p>{`LangaugeIndex ${index}`}</p>
              <Example
                peopleLanguageIndex={index}
                selectedPeopleAllLanguages={selectedPeopleAllLanguages}
                setSelectedPeopleAllLanguages={setSelectedPeopleAllLanguages}
              />
              <hr className="border border-black w-52 my-1" />
            </div>
          );
        })}
      </div>
      <p className="mt-4">
        Page component showing selected people by languages, from included
        Example components above.
      </p>
      {selectedPeopleAllLanguages.map((selectedPeopleByLanguage, index) => {
        return (
          <div
            key={`Pg-${index}`}
            className="flex flex-col justify-start items-start w-[600px]"
          >
            <p>{`LanguageIndex: ${index}, Number persons selected: ${selectedPeopleByLanguage.length}`}</p>
            <p className="">
              {selectedPeopleByLanguage.map((person) => person.name).join(", ")}
            </p>
          </div>
        );
      })}
      <button
        onClick={onSetSelectionsClick}
        className="my-4 p-2 border border-black rounded-md bg-black text-white active:scale-90"
      >
        Set selections Cookie
      </button>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </div>
  );
}
export default Page;
