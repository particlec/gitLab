import React, { useState } from "react";
import { TabBar, TabContent, TabBarItem } from "./styled";

function TabPane(props) {
  return <div>{props.children}</div>;
}

function Tabs(props) {
  const [currentIndex, setCurrentIndex] = useState(props.defaultActiveKey);

  const onChange = (activeKey) => {
    if (typeof props.onChange === "function") props.onChange(activeKey);
    setCurrentIndex(activeKey);
  };

  return (
    <div>
      <TabBar>
        {React.Children.map(props.children, (element, index) => {
          let { disabled, tab } = element.props;
          return (
            <TabBarItem
              className={currentIndex === element.key ? "active" : ""}
              onClick={() => onChange(element.key)}
              key={element.key}
              disabled={disabled}
            >
              {tab}
              {element.key}
            </TabBarItem>
          );
        })}
      </TabBar>
      <TabContent>
        {React.Children.map(props.children, (element, index) => {
          return (
            <div
              key={element.key}
              style={{
                display: currentIndex === element.key ? "block" : "none",
              }}
            >
              {element}
            </div>
          );
        })}
      </TabContent>
    </div>
  );
}

export { Tabs, TabPane };

// 点击的按钮不同，展现的内容不同
//
