export const LabelInput = () => {
  return (
    <label className="FirstLabel" id="filter-label">
      <div>
        <div className="Fuel">Fuel</div>
        <div className="Description">Filter cars by Batery Percentage</div>
      </div>
      <div className="InputCheckBox">
        <span className="Input">
          <input
            id="filterItem--checkbox-fuel_levels"
            name="batery levels"
            className="bateryPercentage"
            type="checkbox"
          />
          <span className="check" data-checkbox="true"></span>
        </span>
      </div>
    </label>
  );
};
