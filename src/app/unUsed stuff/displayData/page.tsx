import { sql } from '@vercel/postgres'


export default async function getData() {
    // let data

    // try {
    //     data = await sql`SELECT * FROM pets`
    //   } catch (e: any) {
    //     if (e.message === `relation "Pets" does not exist`) {
    //       console.log('Table does not exist')
    //     }
    //     else {
    //         throw e
    //       }
    const { rows } = await sql`SELECT * FROM pets;`;

console.log(rows)


return (
    <div >



      <p>uwu</p>
    {rows.map((row) => ( 
     <div key={row.name}>
          <div>
            <p>{row.name}</p>
          </div>
        </div>
      
      
    ))}
  </div>
)
    // }
};