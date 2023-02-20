import Image from 'next/image'
import Link  from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, allegiance: "House Targaryen", score: 100},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, allegiance: "House Lannister", score: 56},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, allegiance: "House Lannister", score: 78},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, allegiance: "House Stark", score: 90 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 24, allegiance: "House Targaryen", score: 100 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, allegiance: "Faith of R'hllor", score: 60 },
  { id: 7, lastName: 'Baratheon', firstName: 'Robert', age: 42, allegiance: "House Baratheon", score: 80 },
  { id: 8, lastName: 'Lannister', firstName: 'Tyrion', age: 36, allegiance: "House Lannister", score: 91 },
  { id: 9, lastName: 'Stark', firstName: 'Catelyn', age: 35, allegiance: "House Stark", score: 70 },
];

export default function Home() {
  return (
    <main className="h-[90vh]">
      <div className="flex justify-center flex-col">
        <h1 className='text-3xl m-4 p-4 text-center'><b>LEADERBOARD</b></h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Allegiance</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {rows.map((row) => (
                <tr key={row.id}>
                  <th>{row.id}</th> 
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.age}</td>
                  <td>{row.allegiance}</td>
                  <td>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
