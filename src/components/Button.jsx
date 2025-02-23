import { buttonList } from "../utils/constant";
const Button = () => {
  return (
    <div className="mt-4">
      {buttonList.map((button) => (
        <button
          key={button.id}
          className="px-4 py-3 rounded-lg mt-3 ml-4 bg-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Button;
