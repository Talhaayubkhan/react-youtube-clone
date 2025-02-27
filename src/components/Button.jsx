import { buttonList } from "../utils/constant";
const Button = () => {
  return (
    <div className="mt-5">
      {buttonList.map((button) => (
        <button
          key={button.id}
          className="px-4 py-3 text-lg font-semibold rounded-lg ml-4 bg-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Button;
