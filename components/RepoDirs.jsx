import Link from 'next/link'

async function fetchRepoContents(name) {
  const username = 'sumin8520'
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  const contents = await response.json()

  return contents
}

const RepoDirs = async ({ name }) => {
  const username = 'sumin8520'
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div className="text-3xl mt-5 text-green-800 ">
      <h3 className="text-3xl font-bold text-black">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              className="text-2xl underline text-red-800"
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RepoDirs
