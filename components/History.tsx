import { NextPage } from 'next'

interface Props {}

export const History: NextPage<Props> = ({}) => {
  return (
    <div className="bg-neutral-900 shadow-md rounded-lg p-5 pb-8 w-full max-w-100 h-full">
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 hidden md:block">History</h1>
        <p className="text-lg text-neutral-700 mb-8 hidden md:block">
          Here you can see your previous calculations.
        </p>
        {/* Add your history display logic here */}
      </div>
    </div>
  )
}

export default History