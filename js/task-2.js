const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
]

const userState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user,
  )

  return Promise.all(updatedUsers)
}

const logger = (updatedUsers) => console.table(updatedUsers)

userState(users, 'Mango').then(logger)
userState(users, 'Lux').then(logger)
