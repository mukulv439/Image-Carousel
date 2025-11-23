import { useState } from 'react';

import ImageCarousel from './ImageCarousel';

const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];

export default function App() {
  const [message, setMessage] = useState('Image Carousel');
  const [data , setData] = useState(0);

const next = () => 
{
  if(data < images.length)
  {
    setData((prev)=>
    
    prev+1 
    )
  }
}

const prev = ()=> 
{
  if(data > 0)
  {
    setData((prev)=>
    
    prev-1 
    )
  }
}
  return (
    <div>
      <h1>{message}</h1>
      <ImageCarousel images={images}  ok={data} next={next} prev={prev}/>
    </div>
  );
}
