import { useEffect, useRef, useState } from "react";

import {
  FaPlus,
  FaNotesMedical,
  FaArrowRightArrowLeft,
  FaRegKeyboard,
} from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import InputHeader from "@/components/InputHeader";
import TermInput from "@/components/TermInput";

import "./App.css";

export interface Term {
  term: string;
  definition: string;
}

function App() {
  const header = useRef<HTMLDivElement>(null);
  const [terms, setTerms] = useState<Term[]>([
    { term: "", definition: "" },
    { term: "", definition: "" },
  ]);

  const addTerm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTerms([...terms, { term: "", definition: "" }]);
  };

  const removeTerm = (index: number) => {
    // e.preventDefault();
    if (terms.length > 2) {
      const newTerms = [...terms];
      newTerms.splice(index, 1);
      setTerms(newTerms);
    }
  };

  const setTerm = (index: number, newTerm: string) => {
    console.log(terms);
    
    const newTerms = [...terms];
    newTerms[index].term = newTerm;
    setTerms(newTerms);
  };

  const setDefinition = (index: number, newDefinition: string) => {
    const newTerms = [...terms];
    newTerms[index].definition = newDefinition;
    setTerms(newTerms);
  };

  function stickyFunction() {
    if (header.current) {
      if (window.scrollY >= 1) {
        header.current.classList.add("header-sticky");
      } else {
        header.current.classList.remove("header-sticky");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => stickyFunction());
    return () => {
      window.addEventListener("scroll", () => stickyFunction());
    };
  }, []);

  return (
    <div className="text-black">
      <header ref={header} className="py-10 sticky top-0">
        <div className="container flex flex-row justify-between items-center">
          <div className="">
            <p className="text-xl font-bold">Create a new study set</p>
            <p className="text-[#939bb4] text-sm font-semibold">notice save</p>
          </div>
          <button className="create-btn">Create</button>
        </div>
      </header>
      <form className="container pt-10">
        <section>
          <div className="header-form flex flex-col gap-7">
            <div className="">
              <InputHeader
                labels="Please enter a title"
                placeholder="Enter a title..."
                area={false}
              />
            </div>
            <div className="flex flex-row gap-7">
              <div className="w-1/2">
                <InputHeader
                  labels="Description"
                  placeholder="Add a description..."
                  area={true}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-5">
                <div className="">
                  <InputHeader
                    labels="School Name"
                    placeholder="School Name"
                    area={false}
                  />
                </div>
                <div className="">
                  <InputHeader
                    labels="Course"
                    placeholder="Course Name"
                    area={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container flex flex-row justify-between py-12">
            <div className="left-group-btn flex gap-4">
              <button>
                <FaPlus /> Import
              </button>
              <button>
                <FaPlus /> Add diagram
              </button>
              <button>
                <FaNotesMedical /> Create from notes
              </button>
            </div>
            <div className="right-group-btn flex gap-4">
              <button>
                <IoSettingsOutline />
              </button>
              <button>
                <FaArrowRightArrowLeft />
              </button>
              <button>
                <FaRegKeyboard />
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            {terms.map((item, index) => {
              return (
                <div key={index}>
                  <TermInput
                    index={index}
                    removeTerm={removeTerm}
                    valueTerm={item}
                    setTerm={setTerm}
                    setDefinition={setDefinition}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full bg-white flex items-center justify-center">
            <div className=" py-8 flex flex-col w-max hover:text-[#ffcd1f]">
              <button
                onClick={addTerm}
                className="h-full text-base font-bold uppercase"
              >
                <FaPlus /> ADD CARD
              </button>
              <span className="h-1 bg-[#4ed3d3] w-full block"></span>
            </div>
          </div>
        </section>
        <div className="mt-8 w-full flex justify-end">
          <button className="create-btn py-5 px-8 text-base">Create</button>
        </div>
      </form>
    </div>
  );
}

export default App;
