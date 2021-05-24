let role = 'moderator';

switch (role) { //role = variable
    case 'guest':
        console.log('guest user');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User')
}

if (role === 'guest') console.log('guest');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Uknown User');