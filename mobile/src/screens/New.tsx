import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import BackButton from "../components/BackButton";
import CheckBox from "../components/CheckBox";
import colors from "tailwindcss/colors";

const availableWeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default function New() {
  const [ weekDays, setWeekDays ] = useState<number[]>([])

  function handleToggleWeekDay(weekDayIndex:number){
    if (weekDays.includes(weekDayIndex)){
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    }else{
      setWeekDays(prevState => [...prevState,weekDayIndex ])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}
      >

        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Create Habit
        </Text>

        <Text className="mt-6 text-white font-extrabold text-base">
          What are you up to?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600 "
          placeholder="Exercise, sleep well, etc."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="font-semibold mt-4 mb-4 text-white text-base">
          How Often?
        </Text>

        {
          availableWeekDays.map((weekDay,index) => (
            <CheckBox 
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))
        }

        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          activeOpacity={0.7}
        >
          <Feather 
            name="check"
            size={20}
            color={colors.white}
          />

          <Text className="font-semibold text-base text-white ml-2 ">
            Confirm
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
