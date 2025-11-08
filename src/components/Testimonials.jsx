import React from 'react'

const quotes = [
  {id:1, text:'She transformed our house into a home — thoughtful, beautiful and utterly livable.', author:'— A. Martinez'},
  {id:2, text:'Every detail felt curated. We still stop to admire the tile work.', author:'— J. Patel'},
  {id:3, text:'The project felt like a collaboration with an artist and a friend.', author:'— L. Gomez'}
]

export default function Testimonials(){
  const [i, setI] = React.useState(0)
  React.useEffect(()=>{
    const t = setInterval(()=> setI(x => (x+1)%quotes.length), 4500)
    return ()=>clearInterval(t)
  },[])

  return (
    <section className="py-16 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h4 className="serif text-xl font-bold">What Clients Say</h4>
        <div className="mt-6 p-6 bg-white/60 rounded-lg shadow">
          <p className="italic text-lg">“{quotes[i].text}”</p>
          <p className="mt-4 signature text-sm">{quotes[i].author}</p>
        </div>
      </div>
    </section>
  )
}
