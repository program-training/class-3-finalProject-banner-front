import { BannersInterFace } from "../../utils/interfaces";

export const banners: BannersInterFace[] = [
    {
      _id: '1',
      image: {
        url: 'https://images.unsplash.com/photo-1513757378314-e46255f6ed16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFubmVyfGVufDB8fDB8fHww',
        alt: 'Banner 1',
      },
      text: 'Banner 1 Text',
      userName: 'user1',
      email: 'user1@example.com',
      password: 'password1',
      isAdmin: false,
    },
    {
      _id: '2',
      image: {
        url: 'https://images.unsplash.com/photo-1625662171891-9a3348f961f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D',
        alt: 'Banner 2',
      },
      text: 'Banner 2 Text',
      userName: 'user2',
      email: 'user2@example.com',
      password: 'password2',
      isAdmin: true,
    },
    {
        _id: '3',
        image: {
          url: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D',
          alt: 'Banner 2',
        },
        text: 'Banner 2 Text',
        userName: 'user2',
        email: 'user2@example.com',
        password: 'password2',
        isAdmin: true,
      },
    {
      _id: '4',
      image: {
        url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D',
        alt: 'Banner 8',
      },
      text: 'Banner 8 Text',
      userName: 'user8',
      email: 'user8@example.com',
      password: 'password8',
      isAdmin: false,
    },
  ];