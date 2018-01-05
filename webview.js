module.exports = (Franz) => {
    function getMessages() {
        const unreadNode = document
            .getElementById('latesttab_header')
            .getElementsByClassName('streamUnreadCount')[0];
        let unread = parseInt(unreadNode.innerHTML);
        Franz.setBadge(unread);
    }

    Franz.loop(getMessages);
}
