"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { useToast } from '@/components/ui/use-toast'
import { LinkedinShare, TwitterShare, WhatsappShare, TelegramShare } from 'react-share-kit';


export default function Score() {
  const router = useRouter();
  const { toast } = useToast();
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const latestScore = localStorage.getItem('latestScore');
    if (latestScore) {
      setScore(parseInt(latestScore));
    } else {
      router.push('/');
    }
  }, [router]);

  const titleToShare = `My final score: ${score}`;
  const shareUrl = 'https://math.andini-anissa.dev';


  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Game Over!</h1>
        <p className="text-xl mt-4">Your final score is: {score}</p>
        <div className='flex gap-2 items-center justify-center my-6'>
          <p>Share:</p>
          <LinkedinShare url={shareUrl} size={34}/>
          <TwitterShare url={shareUrl} title={titleToShare} size={34}/>
          <WhatsappShare url={shareUrl} title={titleToShare} size={34}/>
          <TelegramShare url={shareUrl} title={titleToShare} size={34}/>
        </div>
        <Button variant='default' className="mt-4" onClick={() => router.push('/')}>
          Play Again
        </Button>
      </div>
    </>
  );
}
