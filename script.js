const messageContainer = document.querySelectorAll(".flex-box");
const markAllRead = document.querySelector(".markall-btn");
const privateMsgBox = document.querySelector(".private-msg-box");

function isPrivateMessage(msgBox) {
  return msgBox.classList.contains("private-msg-box");
}

let unreadMessagesCountField = document.querySelector(".count");

function updateUnreadMessagesCount() {
  const unreadMessages = document.querySelectorAll(".unread");
  const unreadMessagesCount = Array.from(unreadMessages).filter(
    (msg) => !isPrivateMessage(msg)
  ).length;
  unreadMessagesCountField.textContent = unreadMessagesCount;
}

function markMessageAsRead(msgBox) {
  msgBox.classList.remove("unread");
  const notifySymbol = msgBox.querySelector("#notify-symbol");
  if (notifySymbol) {
    notifySymbol.remove();
  }
}

messageContainer.forEach((msgBox) => {
  msgBox.addEventListener("click", () => {
    markMessageAsRead(msgBox);
    updateUnreadMessagesCount();
  });
});

markAllRead.addEventListener("click", () => {
  messageContainer.forEach((msgBox) => {
    markMessageAsRead(msgBox);
  });
  unreadMessagesCountField.textContent = 0;
});
