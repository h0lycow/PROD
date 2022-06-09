import {useState,useEffect} from 'react'
import client from '../comps/apollo-client'
import { gql } from '@apollo/client'

import styles from '../styles/Home.module.css'

import HabitForm from '../comps/HabitForm'
import HabitList from '../comps/HabitList'

const LOCAL_STORAGE_KEY='prod-habits'

//Apollo
export const getStaticProps=async()=>{
  const { data } = await client.query({
    query: gql`
      {
        users{
          name
        }
      }
    `
  });
  return {
    props: {
      data
    }
 }
}


export default function Home({data}) {
  // console.log(data)
  const [habits, setHabits] = useState([]);

  useEffect(()=>{
    let storageHabits=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageHabits.length>0){
      setHabits(storageHabits)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(habits))
  },[habits])

  const addHabit=(habit)=>{
    setHabits([habit, ...habits])
  }

  const upHabit=(id)=>{
    setHabits(
      habits.map(habit => {
        if (habit.id === id) {
          return {
            ...habit,
            up: habit.up+1
          };
        }
        return habit;
      })
    );
  }

  const downHabit=(id)=>{
    setHabits(
      habits.map(habit => {
        if (habit.id === id) {
          return {
            ...habit,
            down: habit.down+1
          };
        }
        return habit;
      })
    );
  }

  const removeHabit=(id)=> {
    setHabits(habits.filter(habit => habit.id !== id));
  }

  return (
    <div>
      <HabitForm addHabit={addHabit}/>
      <HabitList 
      habits={habits} 
      upHabit={upHabit}
      downHabit={downHabit}
      removeHabit={removeHabit}
      />
    </div>
  )
}