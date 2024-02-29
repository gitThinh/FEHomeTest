import * as React from "react";

import { FaGripLines, FaRegTrashCan, FaArrowRight } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";

interface IAppProps {
  index: number;
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  const inputFileBtn = React.useRef<HTMLInputElement>(null);
  const multiOptionDiv = React.useRef<HTMLDivElement>(null);
  const addPicDiv = React.useRef<HTMLDivElement>(null);
  const btnShowMultiOption = React.useRef<HTMLDivElement>(null);

  const handleRemoveOptionBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (multiOptionDiv.current && btnShowMultiOption.current && addPicDiv.current) {
      if (multiOptionDiv.current.classList.contains("block")) {
        multiOptionDiv.current.classList.remove("block");
        multiOptionDiv.current.classList.add("hidden");
        btnShowMultiOption.current.classList.remove("hidden");
        btnShowMultiOption.current.classList.add("block");
      } else {
        multiOptionDiv.current.classList.add("block");
        multiOptionDiv.current.classList.remove("hidden");
        btnShowMultiOption.current.classList.remove("block");
        btnShowMultiOption.current.classList.add("hidden");
        addPicDiv.current.classList.add("hidden");
        addPicDiv.current.classList.remove("block");
      }
      multiOptionDiv.current.getElementsByTagName("input");
    }
  };

  const handleAddPicBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (addPicDiv.current && multiOptionDiv.current && btnShowMultiOption.current) {
      if (addPicDiv.current.classList.contains("block")) {
        addPicDiv.current.classList.remove("block");
        addPicDiv.current.classList.add("hidden");
      } else {
        addPicDiv.current.classList.add("block");
        addPicDiv.current.classList.remove("hidden");
        btnShowMultiOption.current.classList.remove("hidden");
        btnShowMultiOption.current.classList.add("block");
        multiOptionDiv.current.classList.add("hidden");
        multiOptionDiv.current.classList.remove("block");
      }
    }
  };

  return (
    <div className="container rounded-lg bg-[#ffffff]">
      <div className="headerTerm p-5 flex flex-row justify-between border-b items-center">
        <p className="text-[#939bb4] text-base font-bold">{props.index}</p>
        <div className="w-[350px] h-8 rounded-3xl bg-black"></div>
        <div className="flex flex-row gap-6">
          <button className="border-none bg-white p-1">
            <FaGripLines />
          </button>
          <button className="border-none bg-white p-1">
            <FaRegTrashCan />
          </button>
        </div>
      </div>
      <div className="border-b py-7 px-5">
        <div className="flex flex-row gap-6">
          <div className="w-1/2">
            <input
              type="text"
              className="input-focus w-full outline-none text-[#282e3e] text-lg leading-6"
              placeholder="Enter definition"
            />
            <span className="bg-black w-full h-[2px] block my-2"></span>
            <div className="flex flex-row justify-between">
              <p className="text-[#939bb4] text-xs font-semibold">TERM</p>
              <p className="text-[#3ccfcf] uppercase text-xs font-semibold cursor-pointer">
                CHOOSE LANGUAGE
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              className="input-focus w-full outline-none text-[#282e3e] text-lg leading-6"
              placeholder="Enter definition"
            />
            <span className="bg-black w-full h-[2px] block my-2"></span>
            <div className="flex flex-row justify-between">
              <p className="text-[#939bb4] text-xs font-semibold">TERM</p>
              <p className="text-[#3ccfcf] uppercase text-xs font-semibold cursor-pointer">
                CHOOSE LANGUAGE
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleAddPicBtn}
              className="p-5 border border-dashed border-gray-700 bg-white hover:bg-slate-200"
            >
              <SlPicture />
            </button>
          </div>
        </div>
        <div className="flex justify-end" ref={btnShowMultiOption}>
          <button onClick={handleRemoveOptionBtn} className="text-[#586380] font-semibold leading-6 hover:text-[#282e3e]">Add multiple choice options</button>
        </div>
      </div>
      <div className="">
        <div ref={multiOptionDiv} className="hidden">
          <div className="multi-options py-12 px-5 flex flex-row gap-10 border-b">
            <div className="text-[#282e3e] flex flex-col gap-4 w-[45%]">
              <p className="uppercase text-sm font-semibold">
                MULTIPLE CHOICE OPTIONS
              </p>
              <p className="leading-6">
                With your Quizlet Plus subscription, you can add multiple-choice
                answers to questions.
              </p>
              <p className="leading-6">
                These added options will appear as randomly ordered
                multiple-choice distractors in Learn and Test to help you go
                beyond memorization.
              </p>
              <button
                onClick={handleRemoveOptionBtn}
                className="p-0 gap-3 text-sm font-semibold hover:text-[#3ccfcf] active:text-[#ffcd1f]"
              >
                <FaRegTrashCan /> Remove options
              </button>
            </div>
            <div className="w-[55%] flex flex-col gap-14">
              <div className="">
                <input
                  type="text"
                  className="input-focus w-full outline-none text-[#282e3e] text-lg leading-6"
                  placeholder="Multiple choice option 1"
                />
                <span className="bg-black w-full h-[2px] block my-2"></span>
                <div className="flex flex-row justify-between">
                  <p className="text-[#939bb4] text-xs font-semibold uppercase">
                    Multiple choice option
                  </p>
                </div>
              </div>
              <div className="">
                <input
                  type="text"
                  className="input-focus w-full outline-none text-[#282e3e] text-lg leading-6"
                  placeholder="Multiple choice option 2"
                />
                <span className="bg-black w-full h-[2px] block my-2"></span>
                <div className="flex flex-row justify-between">
                  <p className="text-[#939bb4] text-xs font-semibold uppercase">
                    Multiple choice option
                  </p>
                </div>
              </div>
              <div className="">
                <input
                  type="text"
                  className="input-focus w-full outline-none text-[#282e3e] text-lg leading-6"
                  placeholder="Multiple choice option 3"
                />
                <span className="bg-black w-full h-[2px] block my-2"></span>
                <div className="flex flex-row justify-between">
                  <p className="text-[#939bb4] text-xs font-semibold uppercase">
                    Multiple choice option
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={addPicDiv} className="image-show py-12 px-5 border-b hidden">
          <div className="input-and-addpic flex flex-row items-center gap-12">
            <div className="w-1/4">
              <div className="flex flex-row justify-between items-center">
                <input
                  type="text"
                  className="w-full outline-none text-[#282e3e] text-lg leading-6"
                  placeholder="Multiple choice option 1"
                />
                <FaArrowRight />
              </div>
              <span className="bg-black w-full h-[2px] block my-2"></span>
            </div>
            <div className="upload-pic">
              <input
                type="file"
                name=""
                id=""
                className="hidden"
                ref={inputFileBtn}
              />
              <button
                onClick={() => {
                  inputFileBtn.current && inputFileBtn.current.click();
                }}
                className="bg-[#3ccfcf] text-white text-sm font-semibold"
              >
                Or upload your own image
              </button>
            </div>
          </div>
          <div className="show-resulf"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
