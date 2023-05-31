import React from "react";
import ReactPlayer from "react-player";
import styles from "./responsivePlayer.module.scss";

const ResponsivePlayer = (props) => {
  return (
    <div className={`${styles.playerWrapper}`}>
      <ReactPlayer
        className={`${styles.reactPlayer}`}
        url={props.url}
        width="100%"
        height="90%"
        controls={true}
      />
    </div>
  );
};
export default ResponsivePlayer;
