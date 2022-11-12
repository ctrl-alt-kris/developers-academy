import React from "react";
import ReactPlayer from "react-player";
import styles from "./responsivePlayer.module.scss";

const ResponsivePlayer = (props) => {
  return (
    <div className={`${styles.playerWrapper}`}>
      <ReactPlayer
        className={`${styles.reactPlayer}`}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
        controls={true}
        onProgress={(played) => {
          props.onProgress(played);
        }}
        onPause={(played) => {
          props.onPause(played);
        }}
      />
    </div>
  );
};
export default ResponsivePlayer;
