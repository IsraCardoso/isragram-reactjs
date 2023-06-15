import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ImageUploader({
  variant = "",
  setImage,
  imagePreview,
  previewVariant = "",
  onSetReference,
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!onSetReference) {
      return;
    }
    onSetReference(inputRef?.current);
  }, [inputRef?.current]);

  const onClickUploadContainer = () => {
    inputRef?.current?.click();
  };

  const onSelectImage = () => {
    if (!inputRef?.current?.files?.length) {
      return;
    }
    const rawFile = inputRef?.current?.files[0];
    const fileReader = new FileReader();
    const readFile = fileReader.readAsDataURL(rawFile);
    fileReader.onloadend = () => {
      setImage({
        rawFile,
        preview: fileReader.result,
      });
    };
  };

  return (
    <div
      className={`imageUploaderContainer ${variant}`}
      onClick={onClickUploadContainer}
    >
      {imagePreview && (
        <div className="imagePreviewContainer">
          <Image
          width={120}
          height={120}
            src={imagePreview}
            alt="preview"
            className={`${previewVariant}`}
          />
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        className="hidden"
        onChange={onSelectImage}
      />
    </div>
  );
}
