import { useGlobalContext } from './Context'
import subLinks from './data'

const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className="nav-links">
      {subLinks.map((link) => {
        const { pageId, page } = link
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
export default NavLinks
