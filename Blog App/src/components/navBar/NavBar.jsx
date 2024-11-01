import {Link} from "react-router-dom"
export const NavBar = () => {
    return(
        <div>
            <nav style={{backgroundColor:"rgb(99, 0, 253)",color:"white" , padding:"1rem", display:"flex", justifyContent:"center",alignItems:"center", gap:"5rem", fontWeight:"bold"}}>
                <Link to="/">Home</Link>
                {/* <Link to="/blogPost">BlogPost</Link> */}
                <Link to="/createBlogPost">Create Blog</Link>
            </nav>
        </div>
    )
}