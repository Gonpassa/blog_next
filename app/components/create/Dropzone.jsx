import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

export default function MyDropzone({ className, name, id }) {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback((acceptedFiles) => {
        setFiles((prevFiles) => [
            ...acceptedFiles.map((file) => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file),
                });
            }),
        ]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div className="dropzone flex flex-col justify-center items-center">
            <div
                {...getRootProps({
                    className: className,
                    name: name,
                    id: id,
                })}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Dragndrop some files here, or click to select files</p>
                )}
            </div>
            {/* Preview */}

            <div className="relative w-[120%] h-44">
                {files.map((file, i) => (
                    <Image src={file.preview} alt="" fill={true} key={i} />
                ))}
            </div>
        </div>
    );
}
