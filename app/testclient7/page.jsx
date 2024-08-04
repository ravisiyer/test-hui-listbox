"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

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
  // selectedPeopleByLanguage,
  // setSelectedPeopleByLanguage,
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
  // const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);
  const [selectedPeopleAllLanguages, setSelectedPeopleAllLanguages] = useState([
    [peopleAllLanguages[0][0], peopleAllLanguages[0][1]],
    [peopleAllLanguages[1][0], peopleAllLanguages[1][1]],
    [peopleAllLanguages[2][0], peopleAllLanguages[2][1]],
  ]);
  // const [selectedPeopleByLanguage0, setSelectedPeopleByLanguage0] = useState([
  //   peopleAllLanguages[0][0],
  //   peopleAllLanguages[0][1],
  // ]);
  // const [selectedPeopleByLanguage1, setSelectedPeopleByLanguage1] = useState([
  //   peopleAllLanguages[1][0],
  //   peopleAllLanguages[1][1],
  // ]);
  // const [selectedPeopleByLanguage2, setSelectedPeopleByLanguage2] = useState([
  //   peopleAllLanguages[2][0],
  //   peopleAllLanguages[2][1],
  // ]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <div className="flex flex-col justify-center items-center bg-black"> */}
        <h2 className="">Test7 Listbox component of headlessui/react</h2>
        <p>
          3 ListBoxes which use same state variable holding 2D array of
          selections; Number of Listboxes hardcoded
        </p>
        <Example
          peopleLanguageIndex={0}
          selectedPeopleAllLanguages={selectedPeopleAllLanguages}
          setSelectedPeopleAllLanguages={setSelectedPeopleAllLanguages}
        />
        <hr className="border border-black w-52 my-1" />
        <Example
          peopleLanguageIndex={1}
          // selectedPeopleByLanguage={selectedPeopleByLanguage1}
          // setSelectedPeopleByLanguage={setSelectedPeopleByLanguage1}
          selectedPeopleAllLanguages={selectedPeopleAllLanguages}
          setSelectedPeopleAllLanguages={setSelectedPeopleAllLanguages}
        />
        <hr className="border border-black w-52 my-1" />
        <Example
          peopleLanguageIndex={2}
          // selectedPeopleByLanguage={selectedPeopleByLanguage2}
          // setSelectedPeopleByLanguage={setSelectedPeopleByLanguage2}
          selectedPeopleAllLanguages={selectedPeopleAllLanguages}
          setSelectedPeopleAllLanguages={setSelectedPeopleAllLanguages}
        />
        <hr className="border border-black m-1 w-full" />
        <p className="mt-4">
          Page component showing selected people by languages, from included
          Example components above.
        </p>
        {selectedPeopleAllLanguages.map((selectedPeopleByLanguage, index) => {
          return (
            <p>{`LanguageIndex: ${index}, Number persons selected: ${selectedPeopleByLanguage.length}`}</p>
          );
        })}
        {/* <p>Language0 (English)</p>
        <p className="">
          {selectedPeopleByLanguage0.map((person) => person.name).join(", ")}
        </p>
        <p>Language1 (Hindi)</p>
        <p className="">
          {selectedPeopleByLanguage1.map((person) => person.name).join(", ")}
        </p>
        <p>Language2 (Sanskrit)</p>
        <p className="">
          {selectedPeopleByLanguage2.map((person) => person.name).join(", ")}
        </p> */}
      </div>
    </>
  );
}
export default Page;
