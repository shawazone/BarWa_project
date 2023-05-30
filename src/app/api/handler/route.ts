// import { db } from '@vercel/postgres';
 
// export default async function handler() {
//   const client = await db.connect();



  
//   // try {

//   // } catch (error) {

//   // }


// //   try {
// //     await client.sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;
// //     const names = ['bara', 'baraaa'];
// //     await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
// //   } catch (error) {

// //   }
 
// //   const pets = await client.sql`SELECT * FROM Pets;`;


// }

// export   const registerUser = async (name :any , email :any, password :any) => {
//   console.log(name, email, password);
//   const client = await db.connect();

//      try {
//      await client.sql`CREATE TABLE IF NOT EXISTS registration ( name VARCHAR(50), email VARCHAR(100),password TEXT );`;
     
//      await client.sql`INSERT INTO registration (name, email, password) VALUES (${name}, ${email},${password});`;
//    } catch (error) {

//   }
// };