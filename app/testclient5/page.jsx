"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export function Example({ selectedPeople, setSelectedPeople }) {
  function handleSelectAllClick() {
    setSelectedPeople([...people]);
  }
  function handleClearAllClick() {
    setSelectedPeople([]);
  }
  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
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
            {people.map((person) => (
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
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <div className="flex flex-col justify-center items-center bg-black"> */}
        <h2 className="">Test5 Listbox component of headlessui/react</h2>
        <p>Adds Select All and Clear All buttons</p>
        <Example
          selectedPeople={selectedPeople}
          setSelectedPeople={setSelectedPeople}
        />
        <hr className="border border-black m-1 w-full" />
        <p className="mt-4">
          Page component showing selected people from included Example component
          above.
        </p>
        <p className="">
          {selectedPeople.map((person) => person.name).join(", ")}
        </p>
      </div>
    </>
  );
}
export default Page;
