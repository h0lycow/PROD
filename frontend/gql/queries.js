import { gql } from "@apollo/client";

//Habit
const getHabitsQ = gql`
  query GetHabits($uid:ID){
      habits(uid:$uid){
          id
          name
          up
          down
      }
  }
`
const addHabitM = gql`
mutation($name:String!,$uid:ID!){
  addHabit(name:$name,uid:$uid){
    name
  }
}
`
const delHabitM = gql`
  mutation($id:ID){
    delHabit(id:$id){
      name
    }
  }
`
const updateHabitM = gql`
mutation($id:ID!,$name:String,$up:Int,$down:Int){
  updateHabit(id:$id,name:$name,up:$up,down:$down){
    name
  }
}
`
//.Todo
const getTodosQ = gql`
query GetTodos($uid:ID){
  todos(uid:$uid){
    name
    id
    check
  }
}
`
const addTodoM = gql`
mutation($uid:ID!,$name:String!){
  addTodo(name:$name,uid:$uid){
    name
    id
    check
  }
}
`
const delTodoM = gql`
mutation($id:ID!){
  delTodo(id:$id){
    name
  }
}
`
const updateTodoM = gql`
mutation($id:ID!,$name:String,$check:Boolean){
  updateTodo(id: $id,name: $name,check: $check){
    name
  }
}
`
//Daily
const getDailyQ = gql`
query GetDailies($uid:ID){
  dailies(uid:$uid){
    id
    name
    iat
  }
}
`
const addDailyM = gql`
mutation($name:String!,$uid:ID!){
  addDaily(name:$name,uid:$uid){
    id
  }
}
`

const delDailyM = gql`
mutation($id:ID!){
  delDaily(id:$id){
    id
  }
}
`

const checkDailyM = gql`
mutation($id:ID!){
  checkDaily(id:$id){
    id
  }
}
`
const uncheckDailyM = gql`
mutation($id:ID!){
  uncheckDaily(id:$id){
    id
  }
}
`

//User
const loginQ = gql`
query($email:String!,$password:String!){
  login(email:$email,password:$password){
    status
    id
    token
  }
}
`
const addUserM = gql`
mutation($name:String!,$username: String!,$email: String!,$password: String!){
  addUser(name:$name,username:$username,email:$email,password:$password){
    login{
      id
      status
      token
    }
  }
}
`

//Timer
const getTimersQ = gql`
query GetTimers($uid:ID){
  timers(uid:$uid){
    id
    name
    genre
    category
    start
    end
  }
}`
const addTimerM = gql`
mutation($uid:ID!,$name:String,$genre:String,$category:String,$start:String,$end:String){
  addTimer(uid:$uid,name:$name,genre:$genre,category:$category,start:$start,end:$end){
    name
  }
}
`

const delTimerM = gql`
mutation($id:ID!){
  delTimer(id:$id){
    name
  }
}
`


export {
  getHabitsQ,
  addHabitM,
  delHabitM,
  updateHabitM,
  getTodosQ,
  addTodoM,
  delTodoM,
  updateTodoM,
  loginQ,
  addUserM,
  getTimersQ,
  addTimerM,
  delTimerM,
  getDailyQ,
  addDailyM,
  delDailyM,
  checkDailyM,
  uncheckDailyM
}
