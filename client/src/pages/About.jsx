import AboutHero from "../components/AboutComponents/AboutHero";
import AboutHover from "../components/AboutComponents/AboutHover";
import People from "../components/AboutComponents/People";
import Us from "../components/AboutComponents/Us";
import Footer from "../components/Footer";


const blockContent = [
    {
        stat: "25+",
        name: "Premium & Popular Brands"
    },
    {
        stat: "100+",
        name: "Available Cars to Select From"
    },
    {
        stat: "10+",
        name: "Showrooms Around the World"
    }
]

const teamContent = [
    {
        name: "David Brooks",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        name: "Emily Parker",
        role: "Marketing Manager",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        name: "Michael Johnson",
        role: "Operational Manager",
        image: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80"
    },
    {
        name: "Olivia Bennett",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80"
    },
    {
        name: "Nathan Scott",
        role: "Financial Manager",
        image: "https://images.unsplash.com/photo-1507081323647-4d250478b919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
    },
]

const hoverContent = [
    {
        id: "01",
        stat: "Car Rental & Sales",
        name: "Experience the convenience of renting or owning your dream car from our diverse collection of premium and popular vehicles."
    },
    {
        id: "02",
        stat: "Expert Servicing & Maintenance",
        name: "Trust your vehicle to our skilled technicians for top-notch servicing and maintenance, ensuring optimal performance and longevity."
    },
    {
        id: "03",
        stat: "Trade-In Solutions",
        name: "Upgrade your ride effortlessly with our trade-in options, making it easy to transition to a new level of automotive excellence."
    },
]

const About = () => {
    return (
        <>
            <AboutHero />
            <Us blockContent={blockContent} />
            <AboutHover hoverContent={hoverContent} />
            <People teamContent={teamContent} />
            <Footer />
        </>
    );
}

export default About;