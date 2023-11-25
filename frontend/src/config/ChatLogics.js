export const getSender = (loggedUser, users)=>{
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
}

export const getProfilePic = (loggedInUser, chatUsers) => {
    const otherUser = chatUsers.find(user => user._id !== loggedInUser._id);
    if (otherUser) {
      return otherUser.pic;
    }
    return 'default-profile-pic.jpg';
};