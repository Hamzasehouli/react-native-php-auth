import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={393}
    height={264.052}
    {...props}
  >
    <Path
      data-name="wave-haikei(2)"
      d="m0 264.052 13.1-15.4c13.1-15.4 39.3-46.209 65.5-53.691 26.2-7.408 52.4 8.435 78.6 18.337s52.4 13.863 78.6 16.87c26.2 3.081 52.4 5.281 78.6-.733 26.2-5.941 52.4-20.171 65.5-27.212l13.1-7.115V0H0Z"
      fill="#fff"
      opacity={0.96}
    />
  </Svg>
);

export default SvgComponent;
