import React, { useState, useEffect } from 'react';

/**
 * Simple image uploader that shows the selected image inside a rounded
 * circle using Tailwind CSS.
 *
 * Props
 * -----
 * onChange?: (file: File | null) => void   // optional callback to receive the selected file
 *
 * Usage
 * -----
 * <ImageUpload onChange={(file) => console.log(file)} />
 */
export default function ImageUpload({ onChange }) {
  const [preview, setPreview] = useState(null);   // URL for <img> preview
  const [file, setFile] = useState(null);         // the raw File object

  // Clean up the object URL when the component is removed or a new file is chosen
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleSelect = (e) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    onChange?.(selected);

    // Revoke previous preview URL
    if (preview) URL.revokeObjectURL(preview);
    if (selected) setPreview(URL.createObjectURL(selected));
    else setPreview(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Preview circle */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-700 bg-slate-900 flex items-center justify-center">
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-slate-400 text-sm">No image</span>
        )}
      </div>

      {/* File input */}
      <label className="cursor-pointer inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md">
        <span className="text-sm font-medium">Choose Image</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleSelect}
        />
      </label>
    </div>
  );
}
