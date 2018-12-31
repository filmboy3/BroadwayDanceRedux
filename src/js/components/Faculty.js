import React from 'react';
import { Grid, Image, Label, Segment, Card } from 'semantic-ui-react';
import lorinda from './assets/lorinda.png';
import stacey from './assets/stacey.png';
import amy from './assets/amy.png';
import jess from './assets/jess.png';
import scott from './assets/scott.png';
import scottfowler from './assets/scottfowler.png';
import aaron from './assets/aaron.png';
import elijah from './assets/elijah.png';
import alyssa from './assets/alyssa.png';
import amanda from './assets/amanda.png';
import angela from './assets/angela.png';
import courtney from './assets/courtney.png';
import dana from './assets/dana.png';
import emily from './assets/emily.png';
import emilybufferd from './assets/emilybufferd.png';
import erica from './assets/erica.png';
import frank from './assets/frank.png';
import frankie from './assets/frankie.png';
import gianna from './assets/gianna.png';
import heather from './assets/heather.png';
import heatherdenges from './assets/heatherdenges.png';
import irazema from './assets/irazema.png';
import jeremy from './assets/jeremy.png';
import jon from './assets/jon.png';
import jordan from './assets/jordan.png';
import jovonna from './assets/jovonna.png';
import karen from './assets/karen.png';
import katie from './assets/katie.png';
import lauren from './assets/lauren.png';
import linda from './assets/linda.png';
import lindsey from './assets/lindsey.png';
import mary from './assets/mary.png';
import menina from './assets/menina.png';
import rachelle from './assets/rachelle.png';
import rhonda from './assets/rhonda.png';
import laura from './assets/laura.png';
import sarah from './assets/sarah.png';
import sasha from './assets/sasha.png';
import shana from './assets/shana.png';
import shelly from './assets/shelly.png';
import sherry from './assets/sherry.png';
import stearns from './assets/stearns.png';
import lance from './assets/lance.png';
import danielle from './assets/danielle.png';
import marinda from './assets/marinda.png';
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
            <Segment className="facultyContainer" raised>
                <Label as='a' color='green' ribbon>
                    Special Guests
                </Label>
                <Segment className="facultyItem">
                    <Grid>
                        <Grid.Row columns={6}>
                            <Grid.Column className="facultyImg">
                                        <h3>Marinda Davis</h3>
                                    <Image src={marinda} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Shelly Hutchinson</h3>
                                    <Image src={shelly} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                    <h3>Jess Hendricks</h3>
                                    <Image src={jess} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Amy Schulke</h3>
                                    <Image src={amy} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Scott Jovovich</h3>
                                    <Image src={scott} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Danielle Guillermo</h3>
                                    <Image src={danielle} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Segment>
            <Segment className="facultyContainer" raised>
                <Label as='a' color='green' ribbon>
                    Special Guests (Cont'd)
                </Label>
                <Segment className="facultyItem">
                    <Grid>
                        <Grid.Row columns={6}>
                            <Grid.Column className="facultyImg">
                                        <h3>Aaron Parkhurst</h3>
                                    <Image src={aaron} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Elijah Morton</h3>
                                    <Image src={elijah} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                    <h3>Gianna Martello</h3>
                                    <Image src={gianna} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Menina Fortunato</h3>
                                    <Image src={menina} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Emily Bufferd</h3>
                                    <Image src={emilybufferd} />
                            </Grid.Column>
                            <Grid.Column className="facultyImg">
                                        <h3>Rhonda Miller</h3>
                                    <Image src={rhonda} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Segment>
        </Carousel>
)

export default Faculty;
