import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import { RiGitRepositoryCommitsFill } from 'react-icons/ri'
async function fetchRepos() {
  const username = 'sumin8520'

  const response = await fetch(`https://api.github.com/users/${username}/repos`)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const repos = await response.json()
  return repos
}

const ReposPage = async () => {
  const username = 'sumin8520'
  const repos = await fetchRepos()

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-red-500">
        <RiGitRepositoryCommitsFill /> {username}의 레포지토리
      </h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold text-blue-700">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-red-700 flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="text-blue-700 flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="text-yellow-400 flex items-center gap-1">
                  <FaEye /> {repo.stargazers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ReposPage
