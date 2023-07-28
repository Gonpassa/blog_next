import MyDropzone from "./Dropzone";
import RemoveInput from "./RemoveInput";
export default function ImageInput({
    type,
    id,
    value,
    handleChange,
    removeInput,
}) {
    return (
        <div className="flex flex-col justify-between mb-4" key={id}>
            <label
                htmlFor={id}
                className="font-bold flex justify-between items-center mb-2"
            >
                Image
                <RemoveInput removeInput={removeInput} id={id} key={id} />
            </label>
            <MyDropzone
                className="p-14 border-2 border-dashed border-zinc-150 rounded mt-2 hover:cursor-pointer"
                name={type}
                id={id}
                handleChange={handleChange}
            />
        </div>
    );
}
