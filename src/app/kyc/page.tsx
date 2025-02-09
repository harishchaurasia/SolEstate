"use client";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "@/components/NavBar";

import {
  faIdCard,
  faFilePdf,
  faCamera,
  faDollarSign,
  faBriefcase,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Webcam from "react-webcam";

const VerificationPage = () => {
  const [formData, setFormData] = useState({
    govId: "",
    income: "",
    address: "",
    occupation: "",
    documentType: "Government ID",
  });
  const [idPhoto, setIdPhoto] = useState<File | null>(null);
  const [incomeStatement, setIncomeStatement] = useState<File | null>(null);
  const [bankStatement, setBankStatement] = useState<File | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setCapturedPhoto(imageSrc || null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    console.log(idPhoto, incomeStatement, bankStatement, capturedPhoto);
  };
  return (
    <div>
      {" "}
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232]">
        <div className="w-full max-w-xl bg-gradient-to-br from-[#323232] via-[#b5593d] to-[#ef8508] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-white">
            Verification Form
          </h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Document Type Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Document Type:
              </label>
              <select
                value={formData.documentType}
                onChange={(e) =>
                  setFormData({ ...formData, documentType: e.target.value })
                }
                className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none"
              >
                <option>Government ID</option>
                <option>Passport</option>
                <option>Driving License</option>
              </select>
            </div>
            {/* Government ID */}
            <div className="relative">
              <FontAwesomeIcon
                icon={faIdCard}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder={`${formData.documentType} Number`}
                value={formData.govId}
                onChange={(e) =>
                  setFormData({ ...formData, govId: e.target.value })
                }
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>

            {/* Upload ID Photo */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Upload {formData.documentType} Photo:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setIdPhoto)}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-purple-800 file:text-white hover:file:bg-purple-700"
                required
              />
            </div>
            {/* Address */}
            <div className="relative">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>

            {/* Occupation */}
            <div className="relative">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={(e) =>
                  setFormData({ ...formData, occupation: e.target.value })
                }
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>
            {/* Income */}
            <div className="relative">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="number"
                placeholder="Annual Income ($)"
                value={formData.income}
                onChange={(e) =>
                  setFormData({ ...formData, income: e.target.value })
                }
                className="w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none"
                required
              />
            </div>

            {/* Upload Income Statement */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Upload Income Statement (PDF):
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileChange(e, setIncomeStatement)}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-purple-800 file:text-white hover:file:bg-purple-700"
                required
              />
            </div>
            {/* Upload Bank Statement */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Upload Bank Statement (PDF):
              </label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileChange(e, setBankStatement)}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-purple-800 file:text-white hover:file:bg-purple-700"
                required
              />
            </div>

            {/* Live Photo Capture */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Take a Live Photo:
              </label>
              {!capturedPhoto ? (
                <div className="relative">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="rounded-lg w-full"
                  />
                  <button
                    type="button"
                    onClick={capturePhoto}
                    className="mt-2 bg-purple-800 p-2 w-full rounded-lg hover:bg-purple-700"
                  >
                    <FontAwesomeIcon icon={faCamera} className="mr-2" />
                    Capture Photo
                  </button>
                </div>
              ) : (
                <div>
                  <img
                    src={capturedPhoto}
                    alt="Captured"
                    className="w-full rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setCapturedPhoto(null)}
                    className="mt-2 bg-gray-700 p-2 w-full rounded-lg hover:bg-gray-600"
                  >
                    Retake Photo
                  </button>
                </div>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-800 text-white p-3 rounded-lg hover:bg-purple-700"
            >
              Submit Verification
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
