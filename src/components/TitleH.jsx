const getTitleLS = () => {
  return localStorage.getItem("title") || "Default Title";
};

const getSubtitleLS = () => {
  return localStorage.getItem("subtitle") || "Default Subtitle";
};

const TitleH = () => {
  return (
    <>
      <h2>{getSubtitleLS()}</h2>
      <h1>{getTitleLS()}</h1>
    </>
  );
};

export default TitleH;
