import React from 'react';

export const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'username',
    headerName: 'Username',
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell-name-img">
          <img className="cell-img" src={params.row.img} alt="pfp" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },

  {
    field: 'email',
    headerName: 'Email Address',
    width: 300,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cell-user-status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Active',
    username: 'Snow',
    email: 'snowy@yandex.com',
    age: 35,
  },
  {
    id: 2,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Away',
    username: 'StinkMeaner',
    email: 'hoodboi67@yandex.com',
    age: 55,
  },
  {
    id: 3,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Offline',
    username: 'Jamie Lee',
    email: 'lee.prawl96@yandex.com',
    age: 27,
  },
  {
    id: 4,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Active',
    username: 'StangerHere',
    email: 'resident.weedDealer@proton.com',
    age: '',
  },
  {
    id: 5,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Away',
    username: 'Yeti',
    email: 'scway.yeti@gmail.com',
    age: 32,
  },
  {
    id: 6,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Offline',
    username: 'LameFame',
    email: 'lamar79@gmail..com',
    age: 43,
  },
  {
    id: 7,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Offline',
    username: 'Jamie Lee',
    email: 'lee.prawl96@yandex.com',
    age: 27,
  },
  {
    id: 8,
    img: 'https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829',
    status: 'Active',
    username: 'Yeti',
    email: 'scway.yeti@gmail.com',
    age: 32,
  },
];
