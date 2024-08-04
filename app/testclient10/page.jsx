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
  // Code works with increasing and decreasing number of languages in this constant variable.
  [
    { id: 21, name: "Sanskrit Durward Reynolds" },
    { id: 22, name: "Sanskrit Kenton Towne" },
    { id: 23, name: "Sanskrit Therese Wunsch" },
    { id: 24, name: "Sanskrit Benedict Kessler" },
    { id: 25, name: "Sanskrit Katelyn Rohan" },
    { id: 26, name: "Sanskrit id 26" },
    { id: 27, name: "Sanskrit id 27" },
  ],
  // [{ id: 31, name: "Telugu Durward Reynolds" }],
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
  function createEmpty2DArray(num2Delements) {
    let arr = [];
    for (let x = 0; x < num2Delements; x++) arr[x] = [];
    return arr;
  }
  // If number of languages increases (or decreases) and we have an old cookie with different number of languages
  // the program will not work without ignoring the cookie (or deleting it).
  // Trying out one simple solution. It works.
  let initialSelectedPeopleAllLanguages;
  let x = getCookie("selectedPeopleAllLanguages");
  if (x === undefined) {
    //cookie has not been found/returned
    initialSelectedPeopleAllLanguages = createEmpty2DArray(
      peopleAllLanguages.length
    );
  } else {
    const tmp = JSON.parse(x);
    if (peopleAllLanguages.length === tmp.length) {
      initialSelectedPeopleAllLanguages = tmp;
    } else {
      // Number of languages has increased or decreased since we had saved the cookie.
      // The program will not work properly with this cookie.
      // So let's take easy route of ignoring the cookie.
      // When user saves the cookie with new selections, the cookie selection will be picked up
      // as cookie number of languages will match peopleAll... number of languages.
      initialSelectedPeopleAllLanguages = createEmpty2DArray(
        peopleAllLanguages.length
      );
    }
  }

  const [selectedPeopleAllLanguages, setSelectedPeopleAllLanguages] = useState(
    initialSelectedPeopleAllLanguages
  );
  function onSetSelectionsClick() {
    setCookie(
      "selectedPeopleAllLanguages",
      JSON.stringify(selectedPeopleAllLanguages)
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">Test10 Listbox component of headlessui/react</h2>
      <p>
        Allows user to save selections in a cookie, handles increase or decrease
        in number of languages.
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
