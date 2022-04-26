const users = [
    {userID :1, userName: 'Gaurav'},
    {userID :2, userName: 'gau'},
    {userID : 3, userName: 'pankaj'},
    {userID :4, userName: 'panku'},
    {userID :5, userName: 'gaukaj'},
];

const FindU = users.find((user)=> user.userID === 3);
console.log(FindU);