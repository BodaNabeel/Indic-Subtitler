import axios from "axios";
import { toast } from "react-toastify";

export function formatFileSize(size) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(2)} ${units[i]}`;
}

export const fileToBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export function transitionToDashboard(router) {
  router.push("/dashboard");
}

export const handleTranscribe = async (file, sourceLang, targetLang) => {
  const base64Data = await fileToBase64(file);

  const requestData = {
    wav_base64: base64Data,
    source: sourceLang,
    target: targetLang,
  };

  try {
    const response = await axios.post(
      "https://kurianbenoy--seamless-m4t-speech-generate-seamlessm4t-speech.modal.run/",
      requestData
    );
    return response;
  } catch (error) {
    return error;
  }
};

export function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  const milliseconds = Math.floor((time % 1) * 1000);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")},${String(milliseconds).padStart(
    3,
    "0"
  )}`;
}

export function removeFileExtension(filename) {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex !== -1 && lastDotIndex !== 0) {
    return filename.substring(0, lastDotIndex);
  } else {
    return filename;
  }
}
