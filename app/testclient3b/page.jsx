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

export function Example() {
  let selectedPeople = [people[0], people[1]];

  return (
    <Listbox defaultValue={selectedPeople} name="test" multiple>
      {/* <ListboxButton>Select Translators</ListboxButton> */}
      <p>Select Translators</p>
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
    </Listbox>
  );
}

function Page() {
  const [showData, setShowData] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let msg = "";
    // msg += e.target["test[0][name]"].value;  // Works
    const form = e.target;
    const formData = new FormData(form);
    let count = 0;
    for (let key of formData.keys()) {
      count++;
      // msg += `${count}:${key}, `; // works
      // for (let keyValue of formData.entries()) {
      //   // console.log(keyValue);
      //   msg += keyValue; // works
    }
    let numSelections = count ? Math.floor(count / 2) : 0;
    msg += `${numSelections} selections: `;
    for (let i = 0; i < numSelections; i++) {
      let key = `test[${i}][name]`;
      msg += formData.get(key) + ", ";
    }
    setShowData(msg);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">Test3b Listbox component of headlessui/react</h2>
      <p>
        Uncontrolled component; form and name; List (submit) button in page
        parent component lists selections
      </p>
      <div className="flex flex-col justify-start items-start">
        <form onSubmit={handleSubmit} className="max-w-60  mx-auto">
          <div className="flex flex-col justify-center items-start">
            <Example />
            <button className="border border-black rounded-md px-2 my-2">
              List Selections
            </button>
          </div>
        </form>
        <p>{showData}</p>
      </div>
    </div>
  );
}
export default Page;
