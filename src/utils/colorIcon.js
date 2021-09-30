import ColorIconStyle from "./style";

function ColorIcon({ item }) {
  let data = ["#ffebee", "#eee", "#e0f2f1", "#e3f2fd", "#f3e5f5", "#e8eaf6"];

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomColor = () => {
    return data[randomNumber(0, 5)];
  };

  const cutOutString = () => {
    return item?.name ? item?.name[item?.name.lastIndexOf("/") + 1] : null;
  };

  return (
    <ColorIconStyle className={randomColor()}>







      <p className={"p2"}>{cutOutString()}</p>
    </ColorIconStyle>
  );
}
export default ColorIcon;
