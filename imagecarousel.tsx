export default function ImageCarousel({
  images,
  ok,
  next,
  prev
}: Readonly<{
  images: ReadonlyArray<{ src: string; alt: string }>;
}>) {
  console.log(images[ok])
  return (
 <div style={{ display: 'flex', justifyContent: 'center', alignItems:"center" }}>

    <div onClick={prev}>
    <button disabled={ok == 0}> 
    Prev
 </button>
    </div>
      <div>
       <img src={images[ok]?.src} width="70%" />
    </div>
       <div onClick={next} >
    <button disabled={images.length -1 == ok}> 
    Next
 </button>
    </div>

  
    </div>
  );
}
