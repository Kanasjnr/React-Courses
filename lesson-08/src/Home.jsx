import Feed  from "./Feed"



const Home = ({ posts, fetchError,isLoading}) => {
  return (
    <main className="Home">
     {isLoading && <p className="statusMsg">Loading Post...</p>}
     {!isLoading && fetchError && <p className="statusMsg" style={{color:"red"}}>{fetchError}</p>}
     {!isLoading && !fetchError && (posts.length ? <Feed posts={posts}/> : <p className="statusMsg">No Post To Display</p>)}
    </main>
  )
}

export default Home