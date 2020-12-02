import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@emsi.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'othman lachab',
    email: 'oth@emsi.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'chemlal salim',
    email: 'sal@emsi.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
