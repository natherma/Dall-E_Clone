import {surpriseMePrompts} from '../constant'

export function getRandomPrompt(prompt)
{
   const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
   return surpriseMePrompts[randomIndex]; 
} 