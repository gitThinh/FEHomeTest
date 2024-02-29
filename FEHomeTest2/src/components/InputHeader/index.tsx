import * as React from "react";

interface IAppProps {
  labels: string;
  placeholder: string;
  area: boolean;
}

const index: React.FunctionComponent<IAppProps> = (props) => {
  const [text, setText] = React.useState("");
  const inputBox: React.RefObject<HTMLInputElement | HTMLTextAreaElement> =
    React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const addBorrder = () => {
    if (inputBox.current) {
      inputBox.current.addEventListener("focus", function () {
        if (inputBox.current)
          inputBox.current.parentElement?.classList.add("add-border-bottom");
      });
      inputBox.current.addEventListener("blur", function () {
        if (inputBox.current && text.length === 0)
          inputBox.current.parentElement?.classList.remove("add-border-bottom");
      });
    }
  };

  React.useEffect(() => {
    addBorrder();
  }, []);

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden h-full">
      <label className="flex flex-col px-4 py-1 min-h-12 h-full">
        {text.length > 0 && (
          <span className="text-[#586380] text-xs font-semibold">
            {props.labels}
          </span>
        )}
        {!props.area ? (
          <input
            ref={inputBox as React.RefObject<HTMLInputElement>}
            value={text}
            type="text"
            placeholder={props.placeholder}
            className="flex-1 outline-none text-[#282e3e] font-semibold block"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        ) : (
          <textarea
          ref={inputBox as React.RefObject<HTMLTextAreaElement>}
            value={text}
            placeholder={props.placeholder}
            className="flex-1 outline-none text-[#282e3e] font-semibold h-full"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        )}
      </label>
    </div>
  );
};

export default index;
