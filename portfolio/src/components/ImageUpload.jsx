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
    <div className="flex flex-col items-center gap-6">
      {/* Preview circle */}
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 flex items-center justify-center shadow-2xl shadow-red-900/20 relative group">
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <i className="fa-solid fa-user text-5xl text-slate-700"></i>
            <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Upload</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
           <i className="fa-solid fa-camera text-white text-2xl"></i>
        </div>
      </div>

      {/* File input */}
      <label className="cursor-pointer group flex items-center gap-3 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-red-600/20 active:scale-95">
        <i className="fa-solid fa-cloud-arrow-up"></i>
        <span>Select Photo</span>
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
