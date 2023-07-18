const API_URL = "/api";

const topics = [
  { value: "Industrie", label: "Industrie" },
  { value: "Mining", label: "Mining" },
  { value: "Warehouse", label: "Warehouse" },
  { value: "Automotive", label: "Automotive" },
  { value: "Speedway", label: "Speedway" },
  { value: "Airport", label: "Airport" },
  { value: "Store", label: "Store" },
  { value: "Forest", label: "Forest" },
];

const effects = [
  { value: "photorealistic", label: "photorealistic" },
  { value: "rendering", label: "rendering" },
  { value: "photography", label: "photography" },
  { value: "painting", label: "painting" },
  { value: "vector", label: "vector" },
  { value: "comic", label: "comic" },
  { value: "4K", label: "4K" },
  { value: "2K", label: "2K" },
];

const perspectives = [
  { value: "4:3", label: "4:3" },
  { value: "16:9", label: "16:9" },
  { value: "28mm", label: "28mm" },
  { value: "35mm", label: "35mm" },
  { value: "50mm", label: "50mm" },
];

const languages = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Italian", label: "Italian" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Dutch", label: "Dutch" },
  { value: "Swedish", label: "Swedish" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Finnish", label: "Finnish" },
  { value: "Danish", label: "Danish" },
  { value: "Arabic", label: "Arabic" },
  { value: "Chinese", label: "Chinese" },
  { value: "Japanese", label: "Japanese" },
  { value: "Korean", label: "Korean" },
  { value: "Russian", label: "Russian" },
];

export { topics, effects, perspectives, languages, API_URL };
