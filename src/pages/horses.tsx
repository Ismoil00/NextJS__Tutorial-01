import Image from "next/image";

// Next.js Default Image Component Benefits:
// 1. This optimizes the image size!
// 2. It uses 'lazy-loading' by default!
export default function HorsePage() {
  return (
    <div style={{textAlign: "center", padding: "20px"}}>
      <h1>Horses:</h1>
    {
      ['1','2','3','4','5'].map((each:any) => {
        return(
          <div key={each}>
            <Image src={`/horse${each}.jpg`} alt={`Horse${each}`} width="280" height="280"/>
          </div>
        )
      })
    }
    </div>
  )
}

