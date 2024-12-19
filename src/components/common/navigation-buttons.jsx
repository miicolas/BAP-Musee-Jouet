import { House, Undo } from "lucide-react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const NavigationButtons = ({
  onUndoClick,
  canUndo,
  buttonBgColor,
  buttonBorderColor,
}) => (
  <div className="flex gap-4">
    <Link to="/choice-avatar">
      <button
        className={`p-4 font-bold rounded-full text-white ${buttonBgColor} ${buttonBorderColor}`}
      >
        <House size={24} />
      </button>
    </Link>
    <button
      onClick={onUndoClick}
      disabled={!canUndo}
      className={classNames(
        `p-4 font-bold rounded-full text-white ${buttonBgColor} ${buttonBorderColor}`,
        !canUndo ? "opacity-50 cursor-not-allowed" : "",
      )}
    >
      <Undo size={24} />
    </button>
  </div>
);
