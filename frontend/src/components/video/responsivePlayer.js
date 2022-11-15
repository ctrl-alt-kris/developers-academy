import React from "react";
import ReactPlayer from "react-player";
import styles from "./responsivePlayer.module.scss";

const ResponsivePlayer = (props) => {
  return (
    <div className={`${styles.playerWrapper}`}>
      <ReactPlayer
        className={`${styles.reactPlayer}`}
        url={props.url}
        width="60%"
        height="60%"
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
