import Image from "next/image";

export default function PublicInput({
  iconImage,
  inputType,
  inputPlaceholder,
  InputInitialValue,
  showValidationMessage = false,
  validationMessage = "",
  onInputValueChange,
}) {
  return (
    <div className="publicInputContainer">
      <div className="publicInput">
        {/* iconImage */}
        <Image
          src={iconImage}
          alt="icon"
          className="publicInputIcon"
          width={20}
          height={20}
        />
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          value={InputInitialValue}
          onChange={onInputValueChange}
        />
      </div>
      <div>
        {showValidationMessage && (
          <p className="validationMessage">{validationMessage}</p>
        )}
      </div>
    </div>
  );
}
