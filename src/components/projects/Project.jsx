import Card from "../card/Card"
export default function Project() {
    const projects = [{
        name: "Fitness-mon",
        tech: "Express, Mongo_DB",
        link: "https://cryptic-harbor-89354.herokuapp.com/?id=6117fbecc2af3c0016d04a04",
        styles: {
            backgroundImage: `url('https://wallpapercave.com/wp/h0Z04VL.jpg')`
        }
    },{
        name: "Coding Quiz",
        tech: "javascript",
        link: "https://nicholasperez290.github.io/coding-quiz-1/",
        styles: {
            backgroundImage: `url('https://th.bing.com/th/id/OIP.wbVT4_6t3ICttaezgOt3vgHaEK?pid=ImgDet&rs=1')`,
            backgroundSize: 'cover',
            color: 'black'
        }
        },{
            name: "Book-Searcher",
            tech: "GraphQL, Mongo_DB",
            link: "https://pure-woodland-05603.herokuapp.com/",
            styles: {
                backgroundImage: `url('https://wallpapercave.com/wp/wp2036988.png')`,
                backgroundSize: 'cover'
            }
        }, {
            name: "Tech-Talk",
            tech: "Express, MySQL",
            link: "https://evening-peak-54499.herokuapp.com/login",
            styles: {
                backgroundImage: `url('https://th.bing.com/th/id/R.51a34564ffdeb6f8d18996069eca3de9?rik=on0mzH%2b9y8pVmw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2fa%2f0%2f765113-widescreen-technology-background-images-1920x1080.jpg&ehk=q8SnlWuIg7W15zUJmiaUKyJA0qEEeXUlZBYTL7I%2bhJk%3d&risl=&pid=ImgRaw&r=0')`,
                backgroundSize: 'cover'
            }
        }
    ]
    return (
        <div className="project-cont">
        {
        projects.map((project) => {
                return <Card name={project.name} tech={project.tech} link={project.link} style={project.styles}/>
            })
        }
        
        </div>
    )
}