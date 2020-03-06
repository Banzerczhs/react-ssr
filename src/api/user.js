const getUserData = () => (
  {
    name : 'banzer',
    age : 12,
    phone : '17354380652'
  } 
)

export const fetchUserData = () => {
  // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
  return new Promise((res,rej)=>{
    setTimeout(() => {
      res(getUserData());  
    },500);
  })
  // In the case of a real world API call, you'll normally run into a Promise like this:
  // API.getUser().then(user => callback(user))
}
