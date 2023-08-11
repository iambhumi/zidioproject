import { EditModeBtns, LayoutBtns } from "./LayoutBtns";
import { useEffect, useState } from "react";
import { FaEllipsis, FaUser } from "react-icons/fa6";
import { FaEdit, FaSortAmountDownAlt } from "react-icons/fa";

function DropDown({ setEditMode, setDropDownOn }) {
  useEffect(() => {
    function closeDropdown(e) {
      if (e.target.closest('.layout-opt-btn')) return;
      if (e.target.closest('.layout-dropdown')) return;
      setDropDownOn(false);
    }
    window.addEventListener('click', closeDropdown);

    return () => {
      window.removeEventListener('click', closeDropdown);
    }
  });

  const clickEditBtn = () => {
    setEditMode(true);
    setDropDownOn(false);
  }

  return (
    <div className="layout-dropdown">
      <div><button type="button" onClick={clickEditBtn}><FaEdit></FaEdit> Edit Layout</button></div>
      <div><button type="button"><FaSortAmountDownAlt /> Sort Layout</button></div>
    </div>
  );
}

function LayoutController({ currentIndex, goToSection }) {
  const [ dropDownOn, setDropDownOn ] = useState(false);
  const [ editMode, setEditMode ] = useState(false);

   return (
    <div className={`layout-div${editMode ? ' edit' : ''}`}>
      <div className="layout-btn-div">
        <button type="button" className="layout-btn" onClick={() => { goToSection(0) }}>
          <FaUser />
        </button>
      </div>
      { editMode 
        ? <EditModeBtns goToSection={goToSection} currentIndex={currentIndex} setEditMode={setEditMode} /> 
        : <LayoutBtns goToSection={goToSection} /> }
      <button type="button" className="layout-opt-btn" onClick={() => { setDropDownOn(!dropDownOn) }}>
        <FaEllipsis />
      </button>
      { dropDownOn && <DropDown setEditMode={setEditMode} setDropDownOn={setDropDownOn} />}
    </div>
  );
}

export default LayoutController;