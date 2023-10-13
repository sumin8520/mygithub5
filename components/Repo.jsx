import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepo(name) {
  const username = 'sumin8520'
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`
  )
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  const username = 'sumin8520'

  return (
    <div>
      <h3 className="text-xl font-bold text-green-800">
        <Link href={`https://github.com/${username}/${name}`}>{repo.name}</Link>
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-between items-center mb-4 text-green-800">
        <span className="flex items-center gap-1 text-green-800">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1 text-green-800">
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span className="  flex items-center gap-1">
          <FaEye /> {repo.stargazers_count}
        </span>
      </div>
    </div>
  )
}
export default Repo
