import * as React from "react";
import Svg, { G, Ellipse } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={234} height={240} {...props}>
    <G
      data-name="Ellipse 3"
      fill="none"
      stroke="#f8f8f5"
      strokeLinejoin="round"
      strokeWidth={30}
      opacity={0.51}
    >
      <Ellipse cx={117} cy={120} rx={117} ry={120} stroke="none" />
      <Ellipse cx={117} cy={120} rx={102} ry={105} />
    </G>
  </Svg>
);

export default SvgComponent;
