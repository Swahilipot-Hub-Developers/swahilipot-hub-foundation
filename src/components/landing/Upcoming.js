import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderSettings from "../sphevents/SliderSettings";
import EventCard from "../sphevents/EventCard";

const Upcoming = () => {
    const settings = SliderSettings();

    const events = [
        // {
        //     title: "Mega Dance Battle",
        //     description: "Get ready for the ultimate showdown as the best dancers from around the region come together to battle it out for the title of Mombasa's Dance Champion! Whether you're a fan of hip-hop, breakdance, or traditional styles, this event promises to be a day full of electrifying performances, fierce competition, and unforgettable entertainment.",
        //     date: "Friday 30th August - Saturday 31st August 2024",
        //     time: "9am - 7pm",
        //     venue: "Amphitheatre",
        //     link: "/programs/events"
        // },
        // {
        //     title: "KIEP SKIES",
        //     description: "KIEP SKIES is an exciting entrepreneurship program designed to bring together visionary innovators and aspiring entrepreneurs to showcase their groundbreaking ideas. This event offers a unique platform where participants can pitch their business concepts in front of a panel of industry experts and potential investors.",
        //     date: "Monday 26th August - Saturday 31st August 2024",
        //     time: "8am - 6pm",
        //     venue: "Mekatilili Hall",
        //     link: "/programs/events"
        // },
        {
            title: "Mombasa Comedy Show",
            description: "Get ready to laugh until your sides hurt at the Mombasa Comedy Show! This event promises an evening filled with laughter, featuring some of the best comedians from across the country. Whether you're a fan of stand-up, improv, or sketch comedy, this show has something for everyone.",
            date: "Saturday 5th October",
            // time: "4pm - 8pm",
            venue: "Amphitheatre",
            link: "/programs/events"
        },
        {
            title: "Pwani Gat Talent",
            description: "Pwani Got Talent is the ultimate showcase of the incredible talent from the coastal region! This event brings together the most gifted performers in music, dance, comedy, and more, all competing for the title of Pwani's top talent. Whether you're a performer or a fan, this is the event you won't want to miss.",
            date: "Friday 18th October",
            // time: "4pm - 8pm",
            venue: "Amphitheatre",
            link: "/programs/events"
        },
        // {
        //     title: "Pinto The Band",
        //     description: "Get ready for an unforgettable night of music as Pinto The Band takes the stage for a live concert experience like no other! Known for their unique blend of genres and electrifying performances, Pinto The Band is set to deliver a show that will leave you wanting more.",
        //     date: "Saturday 28th Sept 2024",
        //     time: "5pm - 8pm",
        //     venue: "Amphitheatre",
        //     link: "/programs/events"
        // },
        // {
        //     title: "Reggae Feast",
        //     description: "Feel the rhythm and vibe at the Reggae Feast, a celebration of the soulful sounds of reggae music! This event is a must-attend for all reggae lovers, bringing together top artists and bands for a night of live performances that will transport you to the heart of the Caribbean.",
        //     date: "Saturday 14th Sept 2024",
        //     time: "6pm - 9pm",
        //     venue: "Amphitheatre",
        //     link: "/programs/events"
        // },
        {
            title: "Whispers of Power",
            description: "Whisper of Power is a captivating evening that weaves together the enchanting art forms of music, dance, and storytelling. This event celebrates the rich cultural heritage and the profound stories that have shaped our communities, brought to life through powerful performances.",
            date: "Tuesday 3rd - Saturday 7th September 2024",
            // time: "6pm - 9pm",
            venue: "Amphitheatre",
            link: "/programs/events"
        },
        
    ];

    return (
        <>
        {/* Upcoming */}
        <div className="container content-space-1">
            {/* Heading */}
            <div className="w-lg-65 text-center mx-lg-auto mb-10">
                <h2 className="text-warning mb-1">Upcoming Events</h2>
            </div>
            {/* End Heading */}
            <div className="row">
                <Slider {...settings}>
                    {events.map((event, index) => (
                        <div key={index}>
                            <EventCard event={event} />
                        </div>
                    ))}
                </Slider>
            </div>
            {/* End Info */}
        </div>
        </>
    );
};

export default Upcoming;
