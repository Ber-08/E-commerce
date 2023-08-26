import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./search.css";

export default function Search() {
  return (
    <div className="s-wrapper ">
      <form className="s-container">
        <BiSearch className="s-s-icon" />
        <input type="text" placeholder="search here" />
        <button className="s-a-icon">
          <AiOutlineArrowRight />
        </button>
      </form>
    </div>
  );
}
