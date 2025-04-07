import { IChannel, IChat, IMessage, IUser } from "./types";
import avatar1 from "./../assets/images/avatar1.png";
import avatar2 from "./../assets/images/avatar2.png";
import avatar3 from "./../assets/images/avatar3.png";
import avatar4 from "./../assets/images/avatar4.png";
import avatar5 from "./../assets/images/avatar5.png";
import avatar6 from "./../assets/images/avatar6.png";
import chatLogo from "./../assets/images/logo.png";

export const USERS_MOCK: IUser[] = [
  {
    id: 0,
    firstName: "Orlando",
    lastName: "Diggs",
    avatar: avatar1,
  },
  {
    id: 1,
    firstName: "Carmen",
    lastName: "Velasco",
    avatar: avatar2,
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Jensen",
    avatar: avatar3,
  },
  {
    id: 3,
    firstName: "Alex",
    lastName: "Lee",
    avatar: avatar4,
  },
  {
    id: 4,
    firstName: "Leo",
    lastName: "Gill",
    avatar: avatar5,
  },
  {
    id: 5,
    firstName: "Britney",
    lastName: "Cooper",
    avatar: avatar6,
  },
];

export const CHANNELS_MOCK: IChannel[] = [
    {
      id: 0,
      name: "# general",
    },
    {
      id: 1,
      name: "# support",
    },
    {
      id: 2,
      name: "# marketing",
    },
    {
      id: 3,
      name: "# thailand",
    },
    {
      id: 4,
      name: "# bali",
    },
    {
      id: 5,
      name: "# poland",
    },
    {
      id: 6,
      name: "# australia",
    },
    {
      id: 7,
      name: "# jobs",
    },
    {
      id: 8,
      name: "# startups",
    },
    {
      id: 9,
      name: "# italy",
    },
    {
      id: 10,
      name: "# freelance",
    },
];

export const CHATS_MOCK: IChat[] = [
    {
      id: 0,
      name: "Chat 1",
      avatar: chatLogo,
    },
    {
      id: 2,
      name: "Chat 2",
      avatar: chatLogo,
    },
    {
      id: 3,
      name: "Chat 3",
      avatar: chatLogo,
    },
    {
      id: 4,
      name: "Chat 4",
      avatar: chatLogo,
    },
    {
      id: 5,
      name: "Chat 5",
      avatar: chatLogo,
    },
    {
      id: 6,
      name: "Chat 6",
      avatar: chatLogo,
    },
    {
      id: 7,
      name: "Chat 7",
      avatar: chatLogo,
    },
];

export const MESSAGES_MOCK: IMessage[] = [
    {
      id: 0,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie neque vel lectus dictum, mollis sodales velit sagittis. Phasellus tincidunt suscipit eros non mattis. Aenean porttitor porttitor elit. Etiam dui odio, molestie quis vestibulum at, placerat et ipsum. Vivamus sit amet sagittis lacus, at dictum risus. In posuere odio eu pulvinar auctor. Duis euismod rhoncus ipsum, non malesuada dolor sagittis in. Ut varius nunc justo. Praesent imperdiet mi at nisi cursus, nec volutpat risus tempus. Donec faucibus at turpis ac fringilla.`,
      userId: USERS_MOCK[0].id,
      user: USERS_MOCK[0],
      createdAt: new Date(),
    },
    {
        id: 1,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie neque vel lectus dictum, mollis sodales velit sagittis. Phasellus tincidunt suscipit eros non mattis. Aenean porttitor porttitor elit. Etiam dui odio, molestie quis vestibulum at, placerat et ipsum. Vivamus sit amet sagittis lacus, at dictum risus. In posuere odio eu pulvinar auctor. Duis euismod rhoncus ipsum, non malesuada dolor sagittis in. Ut varius nunc justo. Praesent imperdiet mi at nisi cursus, nec volutpat risus tempus. Donec faucibus at turpis ac fringilla.`,
        userId: USERS_MOCK[1].id,
        user: USERS_MOCK[1],
        createdAt: new Date(),
    },
  ];