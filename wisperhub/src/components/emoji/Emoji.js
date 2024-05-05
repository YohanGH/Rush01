import React, { useState } from "react";
import styles from "./Emoji-style.css";
import PropTypes from "prop-types";

export default function Emoji({
  messageText,
  setMessageText,
  toogleEmoji,
  setToogleEmoji,
}) {
  const emoji = [
    "🙂​",
    "😂",
    "😝",
    "😁",
    "😱",
    "👉",
    "🙌",
    "🍻",
    "🔥",
    "🌈",
    "☀",
    "🎈",
    "🌹",
    "💄",
    "🎀",
    "⚽",
    "🎾",
    "🏁",
    "😡",
    "👿",
    "🐻",
    "🐶",
    "🐬",
    "🐟",
    "🍀",
    "👀",
    "🚗",
    "🍎",
    "💝",
    "💙",
    "👌",
    "❤",
    "😍",
    "😉",
    "😓",
    "😳",
    "💪",
    "💩",
    "🍸",
    "🔑",
    "💖",
    "🌟",
    "🎉",
    "🌺",
    "🎶",
    "👠",
    "🏈",
    "⚾",
    "🏆",
    "👽",
    "💀",
    "🐵",
    "🐮",
    "🐩",
    "🐎",
    "💣",
    "👃",
    "👂",
    "🍓",
    "💘",
    "💜",
    "👊",
    "💋",
    "😘",
    "😜",
    "😵",
    "🙏",
    "👋",
    "🚽",
    "💃",
    "💎",
    "🚀",
    "🌙",
    "🎁",
    "⛄",
    "🌊",
    "⛵",
    "🏀",
    "🎱",
    "💰",
    "👶",
    "👸",
    "🐰",
    "🐷",
    "🐍",
    "🐫",
    "🔫",
    "👄",
    "🚲",
    "🍉",
    "💛",
    "💚",
  ];

  const handleEmoji = () => {
    setToogleEmoji(!toogleEmoji);
  };

  function handleEmote(emote) {
    setMessageText(`${messageText}${emote}`);
  }

  return (
    <div>
      <button className="buttonEmoteMenu" type="button" onClick={handleEmoji}>
        🙂​
      </button>
      <div className={toogleEmoji === true ? "containerEmoji" : "none"}>
        {emoji.map((emote) => (
          <button
            className="emote"
            type="button"
            onClick={() => handleEmote(emote)}
            key={emote}
          >
            {emote}
          </button>
        ))}
      </div>
    </div>
  );
}
Emoji.propTypes = {
  setMessageText: PropTypes.func.isRequired,
  setToogleEmoji: PropTypes.func.isRequired,
  toogleEmoji: PropTypes.bool.isRequired,
  messageText: PropTypes.string.isRequired,
};
