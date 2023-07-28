import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { BsCardImage } from "react-icons/bs";

export default function MyDropzone({ className, name, id, handleChange }) {
    const [files, setFiles] = useState([]);
    const [rejected, setRejected] = useState([]);
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        setFiles((prevFiles) => [
            ...acceptedFiles.map((file) => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file),
                });
            }),
        ]);
        handleChange(acceptedFiles[0], name);
        if (rejectedFiles?.length) {
            setRejected([...rejectedFiles]);
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
        },
        maxSize: 1024 * 10000,
    });

    return (
        <div className="dropzone flex flex-col justify-center items-center">
            <div
                {...getRootProps({
                    className: className,
                    name: name,
                    id: id,
                    value: files[0],
                })}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <div>
                        <BsCardImage className="text-4xl text-center w-full" />
                        <p className="text-center text-md ">
                            <span className="font-semibold text-sky-400">
                                Upload a file
                            </span>{" "}
                            or drag and drop
                        </p>
                    </div>
                )}
            </div>
            {/* Preview */}

            <div className="relative w-[120%] h-44">
                {files.map((file, i) => (
                    <Image
                        src={file.preview}
                        alt=""
                        fill={true}
                        key={i}
                        onLoad={() => URL.revokeObjectURL(file.preview)}
                    />
                ))}
            </div>
        </div>
    );
}
