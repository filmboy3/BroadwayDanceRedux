import React from 'react';
import { Grid, Image, Label, Segment } from 'semantic-ui-react';
import lorinda from './assets/lorinda.png';
import laura from './assets/laura.png';
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css";

const Faculty = () => (
        <Carousel showThumbs = {false} showArrows={true} showStatus={false}>
            <Segment className="facultyContainer" raised>
                <Label as='a' color='red' ribbon>
                    Lorinda Haver
                </Label>
                <Segment className="facultyItem">
                    <Image src={lorinda} size='small' floated='left' />
                    <h3>Owner/Director</h3>
                    <p>Lorinda founded Broadway Dance Theater in 1997, shortly after making her Broadway debut in "Gentlemen Prefer Blondes." A member of Actor's Equity, she has studied extensively with Tony Award winner Ann Reinking ("Chicago", "Fosse") and attended her Musical Theater Workshop in Florida. She was a dance rehearsal stand-in for Vanessa Williams on the TV version of "Bye Bye Birdie" starring Jason Alexander of "Seinfeld". Lorinda holds a BFA in Dance from Mason Gross School of the Arts, Rutgers University. Locally Lorinda has choreographed "West Side Story", "Oklahoma", "Hairspray", "High School Musical", "The Wizard of Oz", "Crazy For You", "Peter Pan", "Hello Dolly", "The Music Man", "The Sound of Music", "Stepping Out", "Pippin", "Hair", "Cabaret", "Fiddler On The Roof", "42nd Street", and took on the direction and choreography of "Cats". She has been hired for theater dance workshops and dance classes at the Papermill Playhouse and choreographed portions of "Life on Earth" their summer 1996 & 1997 productions. Lorinda was asked to choreograph a moving piece to be performed at the United Nations at the Conference for Spiritual Awareness and Global Concerns, which BDT dancers performed at.</p><p>On stage, Lorinda has traveled throughout the tri-state area and performed such rols as Charity in "Sweet Charity", Anytime Annie in "42nd Street", Cassie and Kristine in "A Chorus Line" and many others. She is a two-time recipient and six-time nominee of the Papermill Playhouse's Rising Star Award for Best Choreographer of a High School Musical Production. Lorinda has won several awards specifically for her choreography at the competitions BDT attends, and she is as proud as can be of all her dancers and the success they have achieved and growth they have shown. The professional careers of her students are listed on our alumni page. Of all the shows Lorinda has been involved with, her favorite productions are her threer children, Laura, Kelcie and Keithan. They are her pride and joy, and make her smile daily.</p>
                </Segment>
            </Segment>
            <Segment className="facultyContainer" raised>
                <Label as='a' color='blue' ribbon>
                    Laura Haver
                </Label>
                <Segment className="facultyItem">
                    <Image src={laura} size='small' floated='left' />
                    <h3>Company Choreographer</h3>
                    <p>Laura was born and bred right here at Broadway Dance Theater. She started in our very first Tumble Tots class, and went on to study every discipline of dance. Her passion to perform has led her to train at the Hollywood Summer Tour Intensive, The Rockette Summer Intensive, Broadway Dance Center in NYC, Peridance, and Starpower's Power Pak. Laura has also been cast in several musicals, which have added to her versatility as a dancer. In the dance competition world, Laura has won Overall awards, special judges awards and Title awards includeing Senior Miss Star Systems - 2014. Laura received the Dance Spirit Magazines "Future Star" award and was featured in the magazine during the fall of 2013. She has been awarded numerous scholarships for her work in master classes, conventions and auditions. As a choreographer, her work has already won top high scores at various competitions. In June of 2017, she made her New York City choreographic debut when her piece, "This Gift", was one of nine dances chosen from hundreds of submitted entries to be presented in the prestigious Young Choreographers Festival at Symphony Space in Manhattan. Laura received a BFA from the prestigious Commercial Dance Program at Dyson School of the Arts at PACE University, and has worked with incredible choreographers such as Mandy Moore, Scott Jovovich, Jess Hendricks, Jason Samuel Smith, Dee Caspary, and Chloe Arnold among many more. Laura is excited to take this next step and share her passon for dance with young BDT students.</p>
                </Segment>
            </Segment>
        </Carousel>
)

export default Faculty;
