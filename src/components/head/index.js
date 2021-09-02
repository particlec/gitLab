import "./index.css";

function Head() {
  return (
    <div className={"head-content"} style={{ position: "relative" }}>
      <div>
        <img
          className={"head-content-item-icon"}
          src={require("../../icon/slp-icon.png").default}
          alt={"l"}
        />
        <h className={"head-content-item-name"}>GitLab</h>
      </div>
      <div></div>

      {/*<div style={{ position: "absolute", marginLeft: "100px" }}>测试</div>*/}
    </div>
  );
}
// module.exports=Head;
export default Head;
