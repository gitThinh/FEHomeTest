import * as React from "react";

interface IAppProps {
  imageItem: string;
  nameItem: string;
  detailItem: string;
  priceItem: string;
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="border-radius-50 bg-[#D9D9D9] w-[325px] px-8 relative flex flex-col">
      <div className="absolute translate-y-[-50%] left-1/2 translate-x-[-50%] w-[260px]">
        <img src={props.imageItem} alt="" />
      </div>
      <div className="mt-[100px] text-black flex-1 flex flex-col">
        <p className="font-bold text-2xl mb-1 h-8">{props.nameItem}</p>
        <p className="font-normal text-[15px]">
          {props.detailItem}
        </p>
      </div>
      <div className="flex w-max mx-auto gap-4 my-5">
        <div className="rounded-lg bg-black w-max p-1 cursor-pointer">
          <img
            src="/src/assets/images/CartIconWhite.png"
            alt=""
            className="w-4 aspect-square"
          />
        </div>
        <div className="rounded-lg bg-black w-max p-1 cursor-pointer">
          <img
            src="/src/assets/images/HeatIcon.png"
            alt=""
            className="w-4 aspect-square"
          />
        </div>
      </div>
      <div className="bg-black w-max mx-auto rounded-lg px-6 py-1 translate-y-1/2">
        <p className="text-lg font-bold text-white">{props.priceItem}</p>
      </div>
    </div>
  );
};

export default index;
