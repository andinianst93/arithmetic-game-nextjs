"use client"
import React, {useState, useEffect} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useToast } from "@/components/ui/use-toast"
import { generateRandomMathProblem } from '@/utils/problems'
import next from 'next'

export default function Game() {
  const router = useRouter();
  const {toast} = useToast();
  const searchParams = useSearchParams();
  const gameKey = searchParams.get('key');
  const [gameData, setGameData] = useState<any>(null);
  const [problem, setProblem] = useState("");
  const [answer, setAnswer] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if(gameKey) {
      const storedGameData = localStorage.getItem(gameKey);
      if(storedGameData){
        setGameData(JSON.parse(storedGameData));
      } else {
        router.push('/');
      }
    }
  }, [gameKey, router]);

  const nextProblem = () => {
    const types = Object.keys(gameData).filter((key) => gameData[key]);
    if (types.length > 0) {
      const randomType = types[Math.floor(Math.random() * types.length)];
      const { problem, answer } = generateRandomMathProblem(randomType) as { problem: string; answer: number };
      setProblem(problem);
      setAnswer(answer);
      setUserAnswer("");
    }
  }
  const endGame = () => {
    toast({
      title: 'Game over!',
      description: `Your final score is ${score}.`,
    });
    localStorage.setItem('latestScore', score.toString());
    router.push('/game/score');
  }

  useEffect(() => {
    if(gameData){
      nextProblem();
    }
  }, [gameData]);

  useEffect(() => {
    if(timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      endGame();
    }
  }, [timeLeft]);

  const checkAnswer = () => {
    if(parseInt(userAnswer) === answer) {
      setScore(score + 1);
      nextProblem();
    } else {
      toast ({
        title: 'Incorrect answer',
        description: `The correct answer was ${answer}. Try the next one!`,
        variant: 'destructive'
      })
      nextProblem();
    }
  }  

  return (
    <>
      <div className='flex justify-between items-center gap-4'>
        <p className='md:text-2xl text-lg font-semibold'>Time left: {timeLeft} seconds</p>
        <div className='md:text-2xl text-lg font-semibold'>Score: {score}</div>
      </div>
      <div className='mt-6'>
        <div className='grid grid-cols-3 bg-gray-100 dark:bg-gray-900 p-4'>
          <p className='md:text-4xl text-xl'>{problem} = </p>
            <Input
              type='text'
              value={userAnswer}
              onChange = {(e) => setUserAnswer(e.target.value)}
              className='col-span-2'
            />
        </div>
          <Button className="mt-6 w-full" onClick={checkAnswer}>
            Submit answer
          </Button>
      </div>
    </>
  )
}
