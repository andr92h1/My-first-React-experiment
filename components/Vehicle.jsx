import Class from "./vehicle.module.css";

export const VehicleInfo = () => {
  return (
    <div class="Vehicle1" className={Class.vehicle} id="vehicle-component">
      <img
        src="https://play-lh.googleusercontent.com/Lj-hSgz9aLpL4bmDByJAhH-HbvjLhS0DU8E-v_tHeK647mQRtlW5YwdBVKNCiGLO-bE=s360-rw"
        alt="Vehicle"
        width="42"
        height="42"
      />
      <b>BE 2033 12</b>
      <p>Batery percentage:</p>
      <p>Location:</p>
      <p>Car Type:</p>
    </div>
  );
};
