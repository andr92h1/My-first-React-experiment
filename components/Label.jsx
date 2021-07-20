//import Class from "./label.module.css";

export const LabelInput = () => {
  return (
    <label class="FirstLabel" className={Class.label} id="filter-label">
      <div>
        <div class="Fuel">Fuel</div>
        <div class="Description">Filter cars by Batery Percentage</div>
      </div>
      <div class="InputCheckBox">
        <span class="Input">
          <input
            id="filterItem--checkbox-fuel_levels"
            name="batery levels"
            class="bateryPercentage"
            type="checkbox"
          >
            <span class="check" data-checkbox="true"></span>
          </input>
        </span>
      </div>
    </label>
  );
};
